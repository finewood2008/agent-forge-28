import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Zap, Calendar, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import certificationImg from "@/assets/certification.jpg";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const milestones = [
    {
      year: "2022.09",
      titleZh: "企业成立",
      titleEn: "Company Founded",
      descZh: "汇聚行业精英，正式启航",
      descEn: "Assembled industry experts, officially launched",
    },
    {
      year: "2025.12",
      titleZh: "大模型备案",
      titleEn: "LLM Registration",
      descZh: "获得国家级大模型备案认证",
      descEn: "Obtained national LLM registration certification",
      highlight: true,
    },
    {
      year: "2026",
      titleZh: "平台发布",
      titleEn: "Platform Launch",
      descZh: "行业智能体平台正式上线",
      descEn: "Industry AI agent platform officially launched",
    },
  ];

  const stats = [
    { icon: Award, valueZh: "国家级", valueEn: "National", labelZh: "大模型备案认证", labelEn: "LLM Registration" },
    { icon: Users, valueZh: "500强", valueEn: "Fortune 500", labelZh: "核心团队背景", labelEn: "Team Background" },
    { icon: Zap, valueZh: "全链路", valueEn: "Full-Stack", labelZh: "模型开发能力", labelEn: "Model Development" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            About Q-Atlas AI
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t("关于", "About")}
            <span className="gradient-text">{t("企数星图", "Q-Atlas AI")}</span>
          </h2>
        </motion.div>

        {/* About Content with Certification Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              {t(
                "企数星图是一家专注于行业智能体开发的AI公司。我们的团队来自阿里、YY、金山等互联网大厂，拥有丰富的AI模型开发与产品落地经验。2025年，我们获得国家大模型备案认证，具备模型私有化部署资质。",
                "Q-Atlas AI is an AI company focused on industry-specific agent development. Our team comes from leading tech companies like Alibaba, YY, and Kingsoft, with extensive AI model development and product deployment experience. In 2025, we obtained national LLM registration certification with private deployment qualifications."
              )}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t(
                "我们的使命：帮助每一个想要拥有专属AI智能体的企业，从底层模型开始构建真正懂业务的智能体。",
                "Our Mission: Help every enterprise that wants its own AI agent build truly business-aware agents from the foundation model up."
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-card">
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium">
                <ShieldCheck className="w-4 h-4" />
                {t("国家级认证", "National Certification")}
              </div>
              <img
                src={certificationImg}
                alt={t("生成式人工智能服务备案证明", "Generative AI Service Registration Certificate")}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.labelZh}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="text-center p-8 rounded-2xl bg-secondary/50 border border-border/50"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {t(stat.valueZh, stat.valueEn)}
              </p>
              <p className="text-muted-foreground">{t(stat.labelZh, stat.labelEn)}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            {t("企业历程", "Company Timeline")}
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-12 md:space-y-0">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative md:flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } mb-8`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className={`inline-block p-6 rounded-xl ${
                      milestone.highlight
                        ? "gradient-border bg-card glow-primary"
                        : "bg-secondary/50 border border-border/50"
                    }`}>
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className={`w-4 h-4 ${milestone.highlight ? "text-primary" : "text-muted-foreground"}`} />
                        <span className={`text-sm font-medium ${milestone.highlight ? "text-primary" : "text-muted-foreground"}`}>
                          {milestone.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold mb-1">
                        {t(milestone.titleZh, milestone.titleEn)}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {t(milestone.descZh, milestone.descEn)}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background bg-primary" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
