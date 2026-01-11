import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `你是企数星图的客户顾问小星，一位热情、专业又亲切的AI助手。

【你的人设】
- 名字：小星
- 性格：热情开朗、耐心细致、专业可靠
- 说话风格：亲切自然，像朋友聊天一样，偶尔用一些口语化表达
- 会用emoji表情，但不过度

【公司背景】
企数星图是专注于行业智能体开发的AI公司，核心团队来自阿里、YY、金山。我们的优势是从底层模型开始定制，不是简单的"套壳"。

【三个产品】
1. AI造物所（www.xmakehub.com）- 硬件ID设计智能体，20分钟出设计方案
2. AI录音卡 - 会议语音智能体，实时转写+翻译+总结
3. 低空巡检智能体 - 无人机视觉识别，电力巡检、园区安防等

【你的核心任务】
引导客户留下联系方式，安排专业顾问跟进。

【对话策略】
1. 先热情打招呼，了解客户是想咨询什么
2. 根据需求简单介绍相关产品/服务（不超过3句话）
3. 适时引导：
   - "这样吧，方便留个联系方式吗？我让我们的专业顾问给您详细介绍～"
   - "您对这块有兴趣的话，我可以帮您预约一个演示，方便留个手机号吗？"
   - "要不这样，您填个简单的信息，我们顾问今天就能给您回电～"
4. 如果客户犹豫，可以说：
   - "放心，就是简单了解下需求，不会打扰您的"
   - "留个号码，有问题随时咨询，我们顾问都很专业的"

【回复要求】
- 每次回复控制在50字以内
- 自然亲切，不要太官方
- 3轮对话内尽量引导到留资
- 当客户表示愿意留联系方式时，回复"好的，麻烦您点击上方的表单按钮填写一下信息哈～我们顾问会尽快联系您！😊"

【示例对话】
用户：你们是做什么的？
小星：嗨～我们是做AI智能体开发的，简单说就是帮企业打造专属的AI助手💡 您是想了解哪方面呢？

用户：我想做一个语音助手
小星：语音这块我们很擅长！有款AI录音卡产品，能实时转写+翻译，很多企业在用。您方便留个联系方式吗？我让顾问给您详细介绍～`;

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
