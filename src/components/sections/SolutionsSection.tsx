import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Eye,
  Lightbulb,
  RefreshCw,
  Route,
  TrendingUp,
  ArrowRight,
  ExternalLink,
  Code2,
  Cpu
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Import product images
import xmakehubImage from "@/assets/xmakehub-screenshot.jpeg";
import droneInspectionImage from "@/assets/drone-inspection.png";

export const SolutionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const solutions = [
    {
      id: "xmakehub",
      badgeZh: "AI造物所",
      badgeEn: "AI MakeHub",
      titleZh: "硬件ID开发智能体",
      titleEn: "Hardware ID Design Agent",
      subtitleZh: "帮助企业快速完成硬件产品的工业设计",
      subtitleEn: "Accelerate hardware product industrial design",
      descZh: "基于深度学习的硬件外观设计AI，能够快速生成产品创意、迭代设计方案，大幅缩短硬件产品的ID设计周期。",
      descEn: "Deep learning-based hardware design AI that rapidly generates product concepts and iterates designs, significantly shortening the ID design cycle.",
      link: "https://www.xmakehub.com",
      image: xmakehubImage,
      features: [
        { icon: Palette, labelZh: "AI驱动设计", labelEn: "AI-Driven Design", descZh: "智能生成硬件外观设计", descEn: "Smart hardware appearance generation" },
        { icon: Lightbulb, labelZh: "快速构思", labelEn: "Rapid Ideation", descZh: "分钟级产品原型创意", descEn: "Minute-level prototype concepts" },
        { icon: RefreshCw, labelZh: "智能迭代", labelEn: "Smart Iteration", descZh: "设计方案自动优化", descEn: "Automatic design optimization" },
      ],
      applicationsZh: ["硬件创业公司", "传统制造企业", "产品设计部门", "ODM/OEM厂商"],
      applicationsEn: ["Hardware Startups", "Manufacturing", "Product Design Teams", "ODM/OEM"],
      gradient: "from-primary to-primary/50",
    },
    {
      id: "skyeye",
      badgeZh: "低空巡检智能体",
      badgeEn: "Drone Inspection AI",
      titleZh: "无人机视觉识别AI",
      titleEn: "Drone Vision Recognition AI",
      subtitleZh: "赋予无人机'认知大脑'，实现低空作业全自动化",
      subtitleEn: "Give drones cognitive capabilities for fully automated operations",
      descZh: "基于YOLO框架的视觉小模型深度训练，在边缘端即可实现高精度识别。支持多场景模型快速适配与持续迭代。",
      descEn: "YOLO-based visual model with edge-side high-precision recognition. Supports multi-scenario model adaptation and continuous iteration.",
      image: droneInspectionImage,
      features: [
        { icon: Eye, labelZh: "端侧视觉识别", labelEn: "Edge Vision Recognition", descZh: "边缘端高精度AI", descEn: "Edge-side high-precision AI" },
        { icon: Route, labelZh: "全自动巡检", labelEn: "Fully Automated Inspection", descZh: "航线规划到告警闭环", descEn: "Route planning to alert closure" },
        { icon: TrendingUp, labelZh: "持续进化", labelEn: "Continuous Evolution", descZh: "模型动态迭代升级", descEn: "Dynamic model iteration upgrades" },
      ],
      applicationsZh: ["电力线路巡查", "城市综治巡检", "园区安防监控", "工地违规检测"],
      applicationsEn: ["Power Line Inspection", "Urban Patrol", "Campus Security", "Construction Monitoring"],
      gradient: "from-emerald-500 to-emerald-500/50",
    },
  ];

  const capabilities = [
    { icon: Code2, titleZh: "全栈开发", titleEn: "Full-Stack Development", descZh: "从需求分析到部署交付", descEn: "From requirements to deployment" },
    { icon: Cpu, titleZh: "模型定制", titleEn: "Model Customization", descZh: "针对行业场景训练优化", descEn: "Industry-specific training and optimization" },
    { icon: RefreshCw, titleZh: "持续迭代", titleEn: "Continuous Iteration", descZh: "长期运维与模型升级", descEn: "Long-term maintenance and model upgrades" },
  ];

  return (
    <section id="custom-development" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent mb-6">
            {t("定制开发", "Custom Development")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t("企业级", "Enterprise")}
            <span className="gradient-text">{t("AGENT定制开发", " Agent Development")}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            {t(
              "基于核心技术能力，我们为企业提供定制化AI智能体开发服务。以下是我们成功交付的行业案例，展示我们的全栈智能体开发能力",
              "Leveraging our core technical capabilities, we provide customized AI agent development services. Below are our successfully delivered industry cases demonstrating our full-stack agent development expertise"
            )}
          </p>

          {/* Capabilities */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.titleZh}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <cap.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium">{t(cap.titleZh, cap.titleEn)}</p>
                  <p className="text-sm text-muted-foreground">{t(cap.descZh, cap.descEn)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Study Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-8"
        >
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            {t("— 成功案例 —", "— Success Cases —")}
          </span>
        </motion.div>

        {/* Solution Cards */}
        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 + 0.4 }}
              className="gradient-border rounded-3xl overflow-hidden bg-card"
            >
              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className={index === 1 ? "lg:order-2" : ""}>
                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${solution.gradient} text-primary-foreground mb-6`}>
                      {t(solution.badgeZh, solution.badgeEn)}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold mb-3">
                      {t(solution.titleZh, solution.titleEn)}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {t(solution.subtitleZh, solution.subtitleEn)}
                    </p>
                    <p className="text-muted-foreground/80 text-sm leading-relaxed mb-8">
                      {t(solution.descZh, solution.descEn)}
                    </p>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {solution.features.map((feature) => (
                        <div key={feature.labelZh} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                            <feature.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{t(feature.labelZh, feature.labelEn)}</p>
                            <p className="text-sm text-muted-foreground">{t(feature.descZh, feature.descEn)}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {solution.link ? (
                      <Button variant="hero" asChild>
                        <a href={solution.link} target="_blank" rel="noopener noreferrer">
                          {t("访问产品", "Visit Product")}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    ) : (
                      <Button variant="hero">
                        {t("了解详情", "Learn More")}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    )}
                  </div>

                  {/* Visual - Product Image */}
                  <div className={`relative ${index === 1 ? "lg:order-1" : ""}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={solution.image} 
                        alt={t(solution.titleZh, solution.titleEn)}
                        className="w-full h-auto object-cover"
                      />
                      {/* Overlay with applications */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent p-6">
                        <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                          {t("适用客户", "Target Customers")}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {solution.applicationsZh.map((app, appIndex) => (
                            <span
                              key={app}
                              className="px-3 py-1.5 rounded-full text-xs bg-secondary/80 text-secondary-foreground backdrop-blur-sm"
                            >
                              {t(app, solution.applicationsEn[appIndex])}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            {t(
              "有定制开发需求？我们的技术团队将为您提供专业咨询",
              "Need custom development? Our technical team will provide professional consultation"
            )}
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              {t("咨询定制服务", "Inquire Custom Services")}
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
