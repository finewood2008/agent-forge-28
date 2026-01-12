import { motion } from "framer-motion";
import { Check, X, Shield, Server, Wrench, FileCheck, Cloud, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ComparisonSection = () => {
  const { t } = useLanguage();

  const comparisonData = [
    {
      dimensionZh: "数据安全",
      dimensionEn: "Data Security",
      icon: Shield,
      consumer: {
        textZh: "数据存储在公有云",
        textEn: "Data stored in public cloud",
        detailsZh: "企业核心数据上传至第三方服务器，存在泄露风险",
        detailsEn: "Core business data uploaded to third-party servers with leakage risks",
      },
      enterprise: {
        textZh: "100%私有化部署",
        textEn: "100% Private Deployment",
        detailsZh: "数据完全在企业内部流转，不出企业边界",
        detailsEn: "Data stays completely within enterprise boundaries",
      },
    },
    {
      dimensionZh: "定制深度",
      dimensionEn: "Customization",
      icon: Wrench,
      consumer: {
        textZh: "API编排 / Prompt调优",
        textEn: "API orchestration / Prompt tuning",
        detailsZh: "仅支持表层调整，无法深度适配业务场景",
        detailsEn: "Surface-level adjustments only, cannot deeply adapt to business scenarios",
      },
      enterprise: {
        textZh: "模型微调 / 知识注入",
        textEn: "Model fine-tuning / Knowledge injection",
        detailsZh: "从模型层开始定制，真正理解企业业务",
        detailsEn: "Customization from model layer, truly understanding your business",
      },
    },
    {
      dimensionZh: "部署方式",
      dimensionEn: "Deployment",
      icon: Server,
      consumer: {
        textZh: "仅支持云端调用",
        textEn: "Cloud-only access",
        detailsZh: "依赖网络，无法满足离线或低延迟场景",
        detailsEn: "Network-dependent, cannot meet offline or low-latency needs",
      },
      enterprise: {
        textZh: "云端+端侧灵活部署",
        textEn: "Cloud + Edge flexible deployment",
        detailsZh: "支持边缘设备部署，离线运行无忧",
        detailsEn: "Edge device deployment supported, worry-free offline operation",
      },
    },
    {
      dimensionZh: "合规认证",
      dimensionEn: "Compliance",
      icon: FileCheck,
      consumer: {
        textZh: "无企业级合规保障",
        textEn: "No enterprise compliance",
        detailsZh: "不满足行业监管要求，存在合规风险",
        detailsEn: "Does not meet regulatory requirements, compliance risks exist",
      },
      enterprise: {
        textZh: "国家大模型备案认证",
        textEn: "National LLM Registration",
        detailsZh: "符合国家法规要求，通过安全审查",
        detailsEn: "Meets national regulations, passed security review",
      },
    },
    {
      dimensionZh: "数据处理",
      dimensionEn: "Data Processing",
      icon: Cloud,
      consumer: {
        textZh: "通用数据处理",
        textEn: "Generic data processing",
        detailsZh: "无法进行企业级数据清洗和脱敏",
        detailsEn: "Cannot perform enterprise-grade data cleaning and anonymization",
      },
      enterprise: {
        textZh: "企业级数据治理",
        textEn: "Enterprise Data Governance",
        detailsZh: "专业数据清洗、脱敏、标注流程",
        detailsEn: "Professional data cleaning, anonymization, and labeling workflows",
      },
    },
    {
      dimensionZh: "安全隔离",
      dimensionEn: "Isolation",
      icon: Lock,
      consumer: {
        textZh: "共享资源池",
        textEn: "Shared resource pool",
        detailsZh: "多租户共享，无法保证资源隔离",
        detailsEn: "Multi-tenant sharing, no resource isolation guarantee",
      },
      enterprise: {
        textZh: "独立资源隔离",
        textEn: "Dedicated Resource Isolation",
        detailsZh: "专属计算资源，完全隔离运行",
        detailsEn: "Dedicated computing resources, completely isolated operation",
      },
    },
  ];

  return (
    <section id="comparison" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-accent mb-4">
            {t("为什么选择企业级", "Why Choose Enterprise-Grade")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("消费级工具", "Consumer Tools")} <span className="text-muted-foreground">vs</span>{" "}
            <span className="gradient-text">{t("企业级方案", "Enterprise Solutions")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              "扣子、Dify等工具本质是消费级产品，无法满足企业对数据安全和深度定制的要求",
              "Consumer tools like Coze and Dify cannot meet enterprise requirements for data security and deep customization"
            )}
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center md:text-left" />
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-destructive/10 border border-destructive/20">
                <X className="w-4 h-4 text-destructive" />
                <span className="font-semibold text-destructive">
                  {t("消费级工具", "Consumer Tools")}
                </span>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                <Check className="w-4 h-4 text-primary" />
                <span className="font-semibold text-primary">
                  {t("企数星图方案", "Q-Atlas Solution")}
                </span>
              </div>
            </div>
          </div>

          {/* Table Rows */}
          <div className="space-y-3">
            {comparisonData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.dimensionZh}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="grid grid-cols-3 gap-4 items-stretch"
                >
                  {/* Dimension */}
                  <div className="flex items-center gap-3 p-4 rounded-xl glass">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-medium text-foreground">
                      {t(item.dimensionZh, item.dimensionEn)}
                    </span>
                  </div>

                  {/* Consumer */}
                  <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/10 hover:border-destructive/20 transition-colors">
                    <div className="flex items-start gap-2 mb-1">
                      <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                      <span className="font-medium text-sm text-foreground">
                        {t(item.consumer.textZh, item.consumer.textEn)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground pl-6">
                      {t(item.consumer.detailsZh, item.consumer.detailsEn)}
                    </p>
                  </div>

                  {/* Enterprise */}
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/20 transition-colors">
                    <div className="flex items-start gap-2 mb-1">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="font-medium text-sm text-foreground">
                        {t(item.enterprise.textZh, item.enterprise.textEn)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground pl-6">
                      {t(item.enterprise.detailsZh, item.enterprise.detailsEn)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">
              {t(
                "还在使用消费级工具处理企业核心业务？是时候升级了",
                "Still using consumer tools for core business? It's time to upgrade"
              )}
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm">
              <Shield className="w-4 h-4 text-accent" />
              <span>
                {t("企数星图：让企业AI真正安全可控", "Q-Atlas AI: Truly Secure and Controllable Enterprise AI")}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
