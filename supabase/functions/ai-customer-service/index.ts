import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `你是企数星图（Q-Atlas AI）的智能客服助手。企数星图是一家专注于行业智能体开发的AI公司，拥有从底层模型开发到智能体部署的全链路能力。

公司核心优势：
1. 模型层能力 - 拥有国家大模型备案资质，具备模型微调与私有化部署能力
2. 全链路交付 - 从需求分析、数据处理、模型训练到智能体部署，一站式交付
3. 软硬一体 - 既能做云端智能体，也能部署到边缘设备

我们开发的三个行业智能体产品：
1. AI造物所（www.xmakehub.com）- 硬件ID开发智能体，帮助企业快速完成硬件产品的工业设计
2. AI录音卡 - 会议语音智能体，支持实时录音转写、多语言翻译、智能会议纪要
3. 低空巡检智能体 - 无人机视觉识别AI，支持电力巡检、城市综治、园区安防等场景

目标客户：
- 想要AI转型但不知从何入手的企业
- 尝试过通用AI工具但效果不理想的企业
- 需要行业专属智能体但没有模型团队的企业
- 对数据安全有严格要求的企业

核心团队来自阿里巴巴、YY直播、金山软件等互联网大厂。

你的职责：
1. 热情友好地回答客户关于公司、产品、服务的咨询
2. 了解客户需求，引导他们预约演示或留下联系方式
3. 如果客户询问具体技术细节或定价，建议他们预约演示与专业顾问沟通
4. 回答要简洁专业，控制在100字以内

请用中文回答。`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Processing customer service request with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "服务繁忙，请稍后再试" }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "服务暂时不可用" }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI服务错误" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Customer service error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
