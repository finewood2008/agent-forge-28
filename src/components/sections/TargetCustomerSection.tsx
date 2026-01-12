import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Lightbulb, Target, Shield, MessageSquare, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { openChatWidget } from "@/hooks/use-chat-widget";

export const TargetCustomerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const customerProfiles = [
    {
      icon: AlertTriangle,
      titleZh: "试过消费级AI工具，担心企业数据安全",
      titleEn: "Tried consumer AI tools, worried about data security",
      descZh: "使用扣子、Dify等消费级工具时，企业核心数据需上传至公有云，存在严重的数据泄露风险和合规隐患。",
      descEn: "When using consumer tools like Coze or Dify, core business data is uploaded to public clouds, posing serious data leakage risks and compliance concerns.",
    },
    {
      icon: Lightbulb,
      titleZh: "想要AI转型，但不知从何入手",
      titleEn: "Want AI transformation but don't know where to start",
      descZh: "您的业务需要AI提效，但团队没有AI开发经验，不知道如何开始第一步。",
      descEn: "Your business needs AI efficiency, but your team lacks AI development experience and doesn't know how to take the first step.",
    },
    {
      icon: Target,
      titleZh: "尝试过消费级AI工具，效果不理想",
      titleEn: "Tried consumer AI tools with unsatisfactory results",
      descZh: "用过ChatGPT、扣子、Dify等消费级工具，发现它们不懂您的业务场景，无法满足企业级专业要求。",
      descEn: "Used ChatGPT, Coze, Dify and similar tools but found they don't understand your business scenarios and can't meet enterprise-grade requirements.",
    },
    {
      icon: MessageSquare,
      titleZh: "需要行业专属智能体，又没有模型团队",
      titleEn: "Need industry-specific agents but lack a model team",
      descZh: "您需要的是真正理解行业术语和流程的企业级专属AI，而非消费级通用对话机器人。",
      descEn: "You need enterprise-grade AI that truly understands industry terminology and processes, not a generic consumer chatbot.",
    },
    {
      icon: Shield,
      titleZh: "对数据安全和合规有严格要求",
      titleEn: "Strict data security and compliance requirements",
      descZh: "金融、医疗、政务等行业对数据安全有刚性要求，需要私有化部署和完整合规认证。",
      descEn: "Industries like finance, healthcare, and government have rigid data security requirements, needing private deployment and full compliance certification.",
    },
  ];

  return (
    <section id="customers" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            For You
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t("我们帮助", "We Help")}
            <span className="gradient-text">{t("这样的企业", "Enterprises Like You")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              "如果您符合以下任一情况，企数星图可能正是您需要的智能体开发合作伙伴",
              "If any of the following applies to you, Q-Atlas AI might be the AI agent development partner you need"
            )}
          </p>
        </motion.div>

        {/* Customer Profile Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {customerProfiles.map((profile, index) => (
            <motion.div
              key={profile.titleZh}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className="group relative"
            >
              <div className="gradient-border rounded-2xl p-8 h-full bg-card hover:bg-card/80 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <profile.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {t(profile.titleZh, profile.titleEn)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(profile.descZh, profile.descEn)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">
            {t(
              "如果您符合以上任一情况，欢迎与我们聊聊您的AI智能体需求",
              "If any of the above applies to you, let's discuss your AI agent needs"
            )}
          </p>
          <Button variant="hero" size="xl" onClick={openChatWidget}>
            <Sparkles className="w-5 h-5" />
            {t("预约咨询", "Book a Consultation")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
