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
  Award,
  Battery,
  Wifi,
  Bluetooth,
  Volume2,
  Languages,
  Brain,
  MessageSquare,
  Smartphone,
  Clock,
  Layers
} from "lucide-react";

import recorderCardFront from "@/assets/recorder-card-front.png";
import recorderCardBack from "@/assets/recorder-card-back.png";
import recorderPhoneMagnetic from "@/assets/recorder-phone-magnetic.png";
import recorderBadgeEink from "@/assets/recorder-badge-eink.jpg";

export default function SmartRecorder() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  // 底层技术优势
  const techAdvantages = [
    {
      icon: Layers,
      titleZh: "超薄卡片设计",
      titleEn: "Ultra-thin Card Design",
      descZh: "85×53mm 尺寸，仅 2.89mm 厚度，比信用卡还薄，轻松放入钱包或口袋",
      descEn: "85×53mm size, only 2.89mm thick, thinner than a credit card",
      highlight: "2.89mm"
    },
    {
      icon: Mic,
      titleZh: "三麦克风阵列",
      titleEn: "Triple Microphone Array",
      descZh: "2个硅麦 + 1个骨纹麦，360°全向拾音，精准捕捉每一个声音细节",
      descEn: "2 silicon mics + 1 bone conduction mic, 360° omnidirectional pickup",
      highlight: "360°"
    },
    {
      icon: Wifi,
      titleZh: "双模快传技术",
      titleEn: "Dual-mode Fast Transfer",
      descZh: "蓝牙 V5.3 + 双频 WIFI，WIFI 传输速度高达 24Mbps，秒传录音文件",
      descEn: "Bluetooth V5.3 + Dual-band WIFI, up to 24Mbps transfer speed",
      highlight: "24Mbps"
    },
    {
      icon: Battery,
      titleZh: "超长续航能力",
      titleEn: "Extended Battery Life",
      descZh: "独创低功耗录音技术，连续录音24小时，待机长达1年",
      descEn: "Proprietary low-power technology, 24-hour recording, 1-year standby",
      highlight: "1年待机"
    },
    {
      icon: Zap,
      titleZh: "无线充电支持",
      titleEn: "Wireless Charging",
      descZh: "支持 Qi 标准无线充电，兼容手机反向充电，随时随地补充电量",
      descEn: "Qi standard wireless charging, compatible with phone reverse charging",
      highlight: "Qi标准"
    },
    {
      icon: Smartphone,
      titleZh: "磁吸便捷设计",
      titleEn: "Magnetic Attachment",
      descZh: "内置磁吸模块，可牢固吸附手机背壳，随身携带不易丢失",
      descEn: "Built-in magnetic module for secure phone attachment",
      highlight: "磁吸"
    },
  ];

  // 产品规格参数
  const specifications = [
    { labelZh: "产品尺寸", labelEn: "Dimensions", valueZh: "85 × 53 × 2.89 mm", valueEn: "85 × 53 × 2.89 mm" },
    { labelZh: "麦克风配置", labelEn: "Microphone", valueZh: "2个硅麦 + 1个骨纹麦", valueEn: "2 Silicon + 1 Bone Mic" },
    { labelZh: "存储容量", labelEn: "Storage", valueZh: "32GB / 64GB 可选", valueEn: "32GB / 64GB Optional" },
    { labelZh: "蓝牙规格", labelEn: "Bluetooth", valueZh: "V5.3 BLE", valueEn: "V5.3 BLE" },
    { labelZh: "WIFI规格", labelEn: "WIFI", valueZh: "双频 2.4GHz / 5GHz", valueEn: "Dual-band 2.4/5GHz" },
    { labelZh: "传输速度", labelEn: "Transfer Speed", valueZh: "最高 24Mbps", valueEn: "Up to 24Mbps" },
    { labelZh: "电池容量", labelEn: "Battery", valueZh: "400mAh 聚合物锂电池", valueEn: "400mAh Li-polymer" },
    { labelZh: "连续录音", labelEn: "Recording Time", valueZh: "约 24 小时", valueEn: "~24 Hours" },
    { labelZh: "待机时长", labelEn: "Standby", valueZh: "约 1 年", valueEn: "~1 Year" },
    { labelZh: "充电方式", labelEn: "Charging", valueZh: "无线充电 / Type-C", valueEn: "Wireless / Type-C" },
    { labelZh: "拾音距离", labelEn: "Pickup Range", valueZh: "5 米有效距离", valueEn: "5m Effective Range" },
    { labelZh: "产品认证", labelEn: "Certifications", valueZh: "FCC / CE / RoHS", valueEn: "FCC / CE / RoHS" },
  ];

  // 产品形态
  const products = [
    {
      id: "card",
      icon: CreditCard,
      images: [recorderCardFront, recorderCardBack, recorderPhoneMagnetic],
      titleZh: "智能录音卡",
      titleEn: "Smart Recording Card",
      subtitleZh: "2.89mm 超薄卡片",
      subtitleEn: "2.89mm Ultra-thin Card",
      descZh: "基于2.89mm超薄卡片设计，比信用卡还薄。内置磁吸模块可牢固吸附手机背壳，支持无线充电，一键录音/标记，智能声感启停，是移动办公的理想伴侣。",
      descEn: "Based on 2.89mm ultra-thin design, thinner than a credit card. Built-in magnetic module for phone attachment, wireless charging support, one-click recording.",
      featuresZh: ["2.89mm超薄", "磁吸设计", "无线充电", "声感启停"],
      featuresEn: ["2.89mm Thin", "Magnetic", "Wireless Charge", "Voice Activate"],
      scenariosZh: ["外勤拜访", "客户洽谈", "移动办公"],
      scenariosEn: ["Field Visits", "Client Meetings", "Mobile Office"],
    },
    {
      id: "badge",
      icon: BadgeCheck,
      images: [recorderBadgeEink],
      titleZh: "智能录音工牌",
      titleEn: "Smart Recording Badge",
      subtitleZh: "水墨屏显示 | 企业标配",
      subtitleEn: "E-ink Display | Enterprise Standard",
      descZh: "将超薄录音卡嵌入企业工牌内，配备水墨屏显示屏，可实时显示员工信息、会议议程、录音状态等内容。水墨屏采用电子墨水技术，阳光下清晰可见，超低功耗不影响续航。员工日常佩戴即可自动记录工作语音交互，是销售团队管理和客服质检的标配设备。",
      descEn: "Ultra-thin recording card embedded in enterprise badge with E-ink display for real-time employee info, meeting agenda, and recording status. E-ink technology ensures clear visibility under sunlight with ultra-low power consumption.",
      featuresZh: ["水墨屏显示", "工牌一体化", "自动录音", "阳光可视"],
      featuresEn: ["E-ink Display", "Badge Integrated", "Auto Recording", "Sunlight Visible"],
      scenariosZh: ["零售门店", "客服中心", "销售团队", "展会活动"],
      scenariosEn: ["Retail Stores", "Call Centers", "Sales Teams", "Trade Shows"],
    },
  ];

  // APP智能功能
  const appFeatures = [
    {
      icon: Languages,
      titleZh: "AI语音转写",
      titleEn: "AI Transcription",
      descZh: "支持130+种语言，通过AI大模型将语音精准转写成文字",
      descEn: "130+ languages, AI-powered accurate speech-to-text",
    },
    {
      icon: Zap,
      titleZh: "实时语音转写",
      titleEn: "Real-time Transcription",
      descZh: "蓝牙实时接收音频，边录边转，即刻呈现文字结果",
      descEn: "Bluetooth real-time audio, simultaneous transcription",
    },
    {
      icon: Users,
      titleZh: "角色区分",
      titleEn: "Speaker Identification",
      descZh: "支持3-5人对话角色识别，清晰区分发言人",
      descEn: "3-5 speaker recognition, clear speaker differentiation",
    },
    {
      icon: FileText,
      titleZh: "智能总结模板",
      titleEn: "Summary Templates",
      descZh: "通用、会议、咨询、通话、演讲等多种专业模板",
      descEn: "Various templates: general, meeting, consulting, call, speech",
    },
    {
      icon: Brain,
      titleZh: "思维导图生成",
      titleEn: "Mind Map Generation",
      descZh: "自动生成内容脉络，可视化展现逻辑结构",
      descEn: "Auto-generate content structure with visual mind maps",
    },
    {
      icon: MessageSquare,
      titleZh: "AI问答分析",
      titleEn: "AI Q&A Analysis",
      descZh: "单文件深度剖析，多文件协同分析，智能提取洞察",
      descEn: "Deep single-file analysis, multi-file collaborative insights",
    },
    {
      icon: Languages,
      titleZh: "实时翻译",
      titleEn: "Real-time Translation",
      descZh: "多语言互译，具备实时纠错功能，跨语言沟通无障碍",
      descEn: "Multi-language translation with real-time correction",
    },
    {
      icon: Clock,
      titleZh: "智能声感启停",
      titleEn: "Voice-activated Control",
      descZh: "有声录音/无声暂停，智能节省存储空间",
      descEn: "Record on voice, pause on silence, save storage smartly",
    },
  ];

  // 应用场景
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

  // 配色选项
  const colorOptions = [
    { nameZh: "岩韵灰", nameEn: "Rock Grey", color: "#4A4A4A" },
    { nameZh: "月辉银", nameEn: "Moon Silver", color: "#C0C0C0" },
    { nameZh: "樱梦紫", nameEn: "Sakura Purple", color: "#9B7BB8" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <Link 
              to="/#core-products" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("返回核心产品", "Back to Core Products")}
            </Link>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
              {t("核心产品", "Core Product")}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {t("智能录音设备", "Smart Recording Devices")}
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-secondary text-secondary-foreground font-medium">
                <Layers className="w-3.5 h-3.5" />
                {t("2.89mm 超薄", "2.89mm Thin")}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-secondary text-secondary-foreground font-medium">
                <Battery className="w-3.5 h-3.5" />
                {t("24小时续航", "24h Battery")}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-secondary text-secondary-foreground font-medium">
                <Clock className="w-3.5 h-3.5" />
                {t("1年待机", "1 Year Standby")}
              </span>
            </div>
            <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto">
              {t(
                "采用独创低功耗录音技术，信用卡大小的超薄设计，随身携带不受限。三麦克风阵列精准拾音，双模快传秒速同步。",
                "Proprietary low-power recording technology with credit card-sized ultra-thin design. Triple microphone array for precise pickup."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Series */}
      <section className="py-12 bg-secondary/20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {t("产品形态", "Product Forms")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("基于同一硬件平台，多种形态满足不同场景", "Same platform, multiple forms for different scenarios")}
            </p>
          </motion.div>

          <div className="space-y-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="gradient-border rounded-2xl overflow-hidden bg-card"
              >
                <div className="p-6 md:p-8">
                  <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    {/* Image */}
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-secondary/50 to-secondary/20 p-4">
                        {product.images.length > 1 ? (
                          <div className="grid grid-cols-3 gap-3">
                            {product.images.map((img, imgIndex) => (
                              <img 
                                key={imgIndex}
                                src={img} 
                                alt={`${t(product.titleZh, product.titleEn)} ${imgIndex + 1}`}
                                className="w-full h-auto object-contain rounded-lg hover:scale-105 transition-transform cursor-pointer"
                                loading="lazy"
                              />
                            ))}
                          </div>
                        ) : (
                          <img 
                            src={product.images[0]} 
                            alt={t(product.titleZh, product.titleEn)}
                            className="w-full h-auto object-contain max-h-64 mx-auto"
                            loading="lazy"
                          />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <product.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-1">
                        {t(product.titleZh, product.titleEn)}
                      </h3>
                      <p className="text-sm text-primary mb-3">
                        {t(product.subtitleZh, product.subtitleEn)}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {t(product.descZh, product.descEn)}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {product.featuresZh.map((feature, i) => (
                          <div key={feature} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span className="text-xs">{t(feature, product.featuresEn[i])}</span>
                          </div>
                        ))}
                      </div>

                      {/* Scenarios */}
                      <div className="flex flex-wrap gap-1.5">
                        {product.scenariosZh.map((scenario, i) => (
                          <span 
                            key={scenario}
                            className="px-2 py-1 rounded-full text-xs bg-secondary text-secondary-foreground"
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

      {/* Technology Advantages */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {t("底层技术优势", "Core Technology Advantages")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("源自专业级硬件平台的核心技术", "Professional-grade hardware platform technology")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techAdvantages.map((tech, index) => (
              <motion.div
                key={tech.titleZh}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <tech.icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold">
                        {t(tech.titleZh, tech.titleEn)}
                      </h3>
                      <span className="px-1.5 py-0.5 rounded text-xs font-bold bg-primary/10 text-primary">
                        {tech.highlight}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {t(tech.descZh, tech.descEn)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {t("产品规格参数", "Product Specifications")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("专业级硬件配置，满足企业级应用需求", "Professional hardware for enterprise applications")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="gradient-border rounded-xl overflow-hidden bg-card">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border/50">
                {specifications.map((spec) => (
                  <div 
                    key={spec.labelZh}
                    className="p-3 md:p-4 bg-card hover:bg-secondary/30 transition-colors"
                  >
                    <p className="text-xs text-muted-foreground mb-0.5">
                      {t(spec.labelZh, spec.labelEn)}
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {t(spec.valueZh, spec.valueEn)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Color Options */}
      <section className="py-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {t("配色选择", "Color Options")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("三款精选配色，满足不同审美需求", "Three curated colors for different preferences")}
            </p>
          </motion.div>

          <div className="flex justify-center gap-6 md:gap-10">
            {colorOptions.map((color, index) => (
              <motion.div
                key={color.nameZh}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center"
              >
                <div 
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full mx-auto mb-2 shadow-md border-2 border-background"
                  style={{ backgroundColor: color.color }}
                />
                <p className="text-sm font-medium">{t(color.nameZh, color.nameEn)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APP Smart Features */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {t("APP智能功能", "Smart APP Features")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("配套APP提供强大的AI处理能力", "Powerful AI processing with companion APP")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {appFeatures.map((feature, index) => (
              <motion.div
                key={feature.titleZh}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <feature.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold mb-1">
                  {t(feature.titleZh, feature.titleEn)}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {t(feature.descZh, feature.descEn)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Scenarios */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {t("应用场景", "Application Scenarios")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={scenario.titleZh}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
              >
                <Headphones className="w-6 h-6 text-primary mb-2" />
                <h3 className="text-sm font-semibold mb-1">
                  {t(scenario.titleZh, scenario.titleEn)}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {t(scenario.descZh, scenario.descEn)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {t("开启智能录音之旅", "Start Your Smart Recording Journey")}
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              {t(
                "联系我们，为您的团队定制专属的智能录音解决方案",
                "Contact us to customize smart recording solutions for your team"
              )}
            </p>
            <Button variant="hero" size="default" asChild>
              <Link to="/#contact">
                {t("立即咨询", "Contact Us Now")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
