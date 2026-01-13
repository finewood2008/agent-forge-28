import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Mic, 
  Zap, 
  Shield, 
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Users,
  FileText,
  BarChart3,
  Headphones,
  CreditCard,
  BadgeCheck,
  Award
} from "lucide-react";

import recorderCard from "@/assets/recorder-card.png";
import recorderBadge from "@/assets/recorder-badge.png";
import recorderChestBadge from "@/assets/recorder-chest-badge.png";

export default function SmartRecorder() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const products = [
    {
      id: "card",
      icon: CreditCard,
      image: recorderCard,
      titleZh: "智能录音卡",
      titleEn: "Smart Recording Card",
      subtitleZh: "卡片式便携设计",
      subtitleEn: "Card-style Portable Design",
      descZh: "信用卡大小的超薄设计，便于随身携带。适合外勤销售、商务洽谈等移动场景，随时记录关键对话。",
      descEn: "Credit card-sized ultra-thin design for easy portability. Perfect for field sales and business meetings.",
      featuresZh: ["超薄便携", "一键录音", "8小时续航", "降噪技术"],
      featuresEn: ["Ultra-thin & Portable", "One-click Recording", "8-hour Battery", "Noise Reduction"],
      scenariosZh: ["外勤拜访", "客户洽谈", "现场调研"],
      scenariosEn: ["Field Visits", "Client Meetings", "On-site Research"],
    },
    {
      id: "badge",
      icon: BadgeCheck,
      image: recorderBadge,
      titleZh: "智能录音工牌",
      titleEn: "Smart Recording Badge",
      subtitleZh: "企业标准配置",
      subtitleEn: "Enterprise Standard Equipment",
      descZh: "企业统一配发的智能工牌，员工日常佩戴即可自动记录工作中的语音交互，是销售团队管理的标配设备。",
      descEn: "Enterprise-issued smart badge for automatic recording during daily work. Standard equipment for sales team management.",
      featuresZh: ["工牌一体化", "自动录音", "12小时续航", "多人识别"],
      featuresEn: ["Badge Integration", "Auto Recording", "12-hour Battery", "Multi-speaker ID"],
      scenariosZh: ["零售门店", "客服中心", "销售团队"],
      scenariosEn: ["Retail Stores", "Call Centers", "Sales Teams"],
    },
    {
      id: "chest",
      icon: Award,
      image: recorderChestBadge,
      titleZh: "智能胸牌",
      titleEn: "Smart Chest Badge",
      subtitleZh: "高端商务场景",
      subtitleEn: "Premium Business Scenarios",
      descZh: "精致的胸牌设计，适用于高端商务场景。磁吸佩戴，优雅便捷，支持多场景自动切换录音模式。",
      descEn: "Elegant chest badge design for premium business scenarios. Magnetic attachment, elegant and convenient.",
      featuresZh: ["磁吸设计", "智能模式切换", "24小时续航", "实时同步"],
      featuresEn: ["Magnetic Design", "Smart Mode Switch", "24-hour Battery", "Real-time Sync"],
      scenariosZh: ["高管会议", "重要商务", "培训考核"],
      scenariosEn: ["Executive Meetings", "Important Business", "Training Assessment"],
    },
  ];

  const coreFeatures = [
    {
      icon: Mic,
      titleZh: "高清录音采集",
      titleEn: "HD Audio Capture",
      descZh: "专业级麦克风阵列，360°全向拾音，清晰捕捉每一个声音细节",
      descEn: "Professional microphone array with 360° omnidirectional pickup",
    },
    {
      icon: Zap,
      titleZh: "实时语音转写",
      titleEn: "Real-time Transcription",
      descZh: "边录边转，语音秒变文字，支持多语言实时转写",
      descEn: "Simultaneous recording and transcription with multi-language support",
    },
    {
      icon: BarChart3,
      titleZh: "行为数据分析",
      titleEn: "Behavior Analytics",
      descZh: "智能分析对话内容，自动生成沟通质量报告和改进建议",
      descEn: "Smart analysis of conversations with automatic quality reports",
    },
    {
      icon: FileText,
      titleZh: "智能报告生成",
      titleEn: "Smart Report Generation",
      descZh: "自动提取关键信息，生成结构化的工作日志和客户画像",
      descEn: "Automatic extraction of key info for structured work logs",
    },
    {
      icon: Shield,
      titleZh: "数据安全保障",
      titleEn: "Data Security",
      descZh: "端到端加密传输，数据存储在企业私有云，确保信息安全",
      descEn: "End-to-end encryption with private cloud storage",
    },
    {
      icon: Users,
      titleZh: "多人协作管理",
      titleEn: "Team Collaboration",
      descZh: "支持团队成员录音共享、权限管理和统一后台管理",
      descEn: "Team recording sharing, permission management, and unified admin",
    },
  ];

  const scenarios = [
    {
      titleZh: "销售团队管理",
      titleEn: "Sales Team Management",
      descZh: "记录每一次客户拜访，分析销售话术，提升成交率",
      descEn: "Record client visits, analyze sales scripts, improve conversion",
    },
    {
      titleZh: "客户服务质检",
      titleEn: "Customer Service QA",
      descZh: "自动记录服务对话，智能质检，提升服务质量",
      descEn: "Auto-record service calls, smart QA, improve service quality",
    },
    {
      titleZh: "培训考核评估",
      titleEn: "Training Assessment",
      descZh: "记录培训过程，评估员工表现，优化培训方案",
      descEn: "Record training, assess performance, optimize programs",
    },
    {
      titleZh: "合规记录存档",
      titleEn: "Compliance Recording",
      descZh: "重要对话留痕，满足行业合规要求，规避法律风险",
      descEn: "Important conversation records for compliance requirements",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link 
              to="/#core-products" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("返回核心产品", "Back to Core Products")}
            </Link>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              {t("核心产品", "Core Product")}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("智能录音设备", "Smart Recording Devices")}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {t("录音卡 · 录音工牌 · 智能胸牌", "Recording Card · Badge · Smart Wearable")}
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              {t(
                "为每位员工打造专属的智能录音设备，全天候记录工作场景中的语音交互，自动形成结构化记录，助力企业管理与业务复盘",
                "Personalized smart recording devices for every employee, capturing voice interactions throughout the workday"
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Series */}
      <section className="py-20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("产品系列", "Product Series")}
            </h2>
            <p className="text-muted-foreground">
              {t("三款设备，满足不同场景需求", "Three devices for different scenarios")}
            </p>
          </motion.div>

          <div className="space-y-16">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="gradient-border rounded-3xl overflow-hidden bg-card"
              >
                <div className="p-8 md:p-12">
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    {/* Image */}
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/50 to-secondary/20 p-8">
                        <img 
                          src={product.image} 
                          alt={t(product.titleZh, product.titleEn)}
                          className="w-full h-auto object-contain max-h-80 mx-auto"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <product.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {t(product.titleZh, product.titleEn)}
                      </h3>
                      <p className="text-primary mb-4">
                        {t(product.subtitleZh, product.subtitleEn)}
                      </p>
                      <p className="text-muted-foreground mb-6">
                        {t(product.descZh, product.descEn)}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {product.featuresZh.map((feature, i) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-sm">{t(feature, product.featuresEn[i])}</span>
                          </div>
                        ))}
                      </div>

                      {/* Scenarios */}
                      <div className="flex flex-wrap gap-2">
                        {product.scenariosZh.map((scenario, i) => (
                          <span 
                            key={scenario}
                            className="px-3 py-1.5 rounded-full text-xs bg-secondary text-secondary-foreground"
                          >
                            {t(scenario, product.scenariosEn[i])}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("核心功能", "Core Features")}
            </h2>
            <p className="text-muted-foreground">
              {t("从录音到洞察的完整链路", "Complete pipeline from recording to insights")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={feature.titleZh}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t(feature.titleZh, feature.titleEn)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(feature.descZh, feature.descEn)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Scenarios */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("应用场景", "Application Scenarios")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={scenario.titleZh}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
              >
                <Headphones className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  {t(scenario.titleZh, scenario.titleEn)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(scenario.descZh, scenario.descEn)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("开启智能录音之旅", "Start Your Smart Recording Journey")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t(
                "联系我们，为您的团队定制专属的智能录音解决方案",
                "Contact us to customize smart recording solutions for your team"
              )}
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/#contact">
                {t("立即咨询", "Contact Us Now")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
