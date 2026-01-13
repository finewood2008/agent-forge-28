import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, GitBranch, Cpu } from "lucide-react";
import xmakehubDemo from "@/assets/xmakehub-demo.mp4";
import { useLanguage } from "@/contexts/LanguageContext";

export const CapabilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const capabilities = [
    {
      icon: Layers,
      titleZh: "企业级模型能力",
      titleEn: "Enterprise Model Capabilities",
      descZh: "拥有国家大模型备案资质，支持模型私有化部署。您的企业数据100%留在自有环境，符合金融、医疗等行业合规要求。",
      descEn: "National LLM registration certified with private deployment support. Your data stays 100% within your environment, meeting compliance requirements for finance, healthcare, and more.",
    },
    {
      icon: GitBranch,
      titleZh: "企业级全链路交付",
      titleEn: "Full-Stack Delivery",
      descZh: "企业数据清洗（脱敏处理）、专属模型微调、企业知识注入、到最终部署。不是简单的Prompt工程，而是深度定制。",
      descEn: "From data cleaning and anonymization, to model fine-tuning, knowledge injection, and deployment. Not just prompt engineering—true deep customization.",
    },
    {
      icon: Cpu,
      titleZh: "企业级端侧部署",
      titleEn: "Edge Deployment",
      descZh: "智能体可部署在企业私有服务器或边缘设备，实现完全离线运行。杜绝数据外泄风险，满足最严格的安全要求。",
      descEn: "Deploy AI agents on private servers or edge devices for fully offline operation. Eliminate data leakage risks and meet the strictest security requirements.",
    },
  ];

  return (
    <section id="capabilities" className="section-padding relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Enterprise-Grade
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t("企业级智能体开发能力", "Enterprise AI Development Capabilities")}
            <br />
            <span className="gradient-text">
              {t("告别消费级工具的数据安全隐患", "Say Goodbye to Consumer-Grade Security Risks")}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t(
              "市面上的AI工具（扣子、Dify等）本质是消费级产品——数据存储在公有云、无法深度定制、缺乏企业合规保障。企数星图提供真正的企业级解决方案：数据100%私有化、模型专属定制、完整合规认证。杜绝企业核心数据泄露风险。",
              "Consumer AI tools store data in public clouds with limited customization and no enterprise compliance. Q-Atlas AI provides true enterprise solutions: 100% private data, custom models, and full compliance certification. Eliminate core data leakage risks."
            )}
          </p>
        </motion.div>

        {/* Platform Demo Video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3">
              {t("自研企业级智能体开发平台", "Self-developed Enterprise AI Agent Platform")}
            </h3>
            <p className="text-muted-foreground">
              {t(
                "从大模型微调到智能体部署的全流程管理，展示我们在AI领域的核心技术能力",
                "Full-lifecycle management from LLM fine-tuning to agent deployment, demonstrating our core AI capabilities"
              )}
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/30 glow-primary">
            <video 
              className="w-full aspect-video object-cover"
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src={xmakehubDemo} type="video/mp4" />
            </video>
          </div>
          
          {/* Tech Capability Tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { zh: "大模型微调", en: "LLM Fine-tuning" },
              { zh: "Agent开发", en: "Agent Development" },
              { zh: "知识库管理", en: "Knowledge Base" },
              { zh: "工作流编排", en: "Workflow Orchestration" },
              { zh: "私有化部署", en: "Private Deployment" },
            ].map((tag) => (
              <span 
                key={tag.zh}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
              >
                {t(tag.zh, tag.en)}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Capability Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.titleZh}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className="group relative"
            >
              <div className="gradient-border rounded-2xl p-8 h-full bg-card hover:bg-card/80 transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <cap.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {t(cap.titleZh, cap.titleEn)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(cap.descZh, cap.descEn)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
