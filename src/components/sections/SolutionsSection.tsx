import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Mic, 
  Eye,
  Lightbulb,
  RefreshCw,
  Globe,
  FileText,
  Route,
  TrendingUp,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Import product images
import xmakehubImage from "@/assets/xmakehub-screenshot.jpeg";
import aiRecorderImage from "@/assets/ai-recorder-device.png";
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
      id: "voice",
      badgeZh: "AI录音卡",
      badgeEn: "AI Recorder",
      titleZh: "会议语音智能体",
      titleEn: "Meeting Voice Agent",
      subtitleZh: "专业级AI会议助手，让每场会议都有价值",
      subtitleEn: "Professional AI meeting assistant for valuable meetings",
      descZh: "软硬一体的智能会议解决方案，集成高清录音硬件与云端AI处理能力，实现会议全流程智能化。",
      descEn: "Integrated hardware-software meeting solution with HD recording and cloud AI processing for end-to-end intelligent meetings.",
      image: aiRecorderImage,
      features: [
        { icon: Mic, labelZh: "实时录音转写", labelEn: "Real-time Transcription", descZh: "高精度语音识别", descEn: "High-precision speech recognition" },
        { icon: Globe, labelZh: "多语言翻译", labelEn: "Multilingual Translation", descZh: "实时跨语言沟通", descEn: "Real-time cross-language communication" },
        { icon: FileText, labelZh: "智能纪要", labelEn: "Smart Minutes", descZh: "自动生成会议总结", descEn: "Auto-generated meeting summaries" },
      ],
      applicationsZh: ["企业会议室", "商务人士", "跨国团队", "法律/医疗记录"],
      applicationsEn: ["Conference Rooms", "Business Professionals", "Global Teams", "Legal/Medical Records"],
      gradient: "from-accent to-accent/50",
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

  return (
    <section id="solutions" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
            Our Products
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t("我们开发的", "Our")}
            <span className="gradient-text">{t("行业智能体", "Industry AI Agents")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              "已服务多个行业场景，从硬件设计到语音交互再到视觉认知，证明我们的全栈智能体开发能力",
              "Serving multiple industries from hardware design to voice interaction to visual cognition, demonstrating our full-stack AI agent development capabilities"
            )}
          </p>
        </motion.div>

        {/* Solution Cards */}
        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 + 0.2 }}
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
      </div>
    </section>
  );
};
