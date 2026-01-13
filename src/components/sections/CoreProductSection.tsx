import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  Mic, 
  Users, 
  Server, 
  Shield, 
  Smartphone, 
  MonitorSpeaker,
  Cloud,
  Lock,
  Zap,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import enterpriseAudioSolutionImage from "@/assets/enterprise-audio-solution.png";

export const CoreProductSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const products = [
    {
      id: "recorder",
      icon: Smartphone,
      titleZh: "智能录音设备",
      titleEn: "Smart Recording Devices",
      subtitleZh: "录音卡 · 录音工牌 · 智能胸牌",
      subtitleEn: "Recording Card · Badge · Smart Wearable",
      descZh: "为每位员工打造专属的智能录音设备，全天候记录工作场景中的语音交互，自动形成结构化记录，助力企业管理与业务复盘。",
      descEn: "Personalized smart recording devices for every employee, capturing voice interactions throughout the workday and automatically generating structured records.",
      features: [
        { icon: Mic, textZh: "高清录音采集", textEn: "HD Audio Capture" },
        { icon: Zap, textZh: "实时语音转写", textEn: "Real-time Transcription" },
        { icon: CheckCircle2, textZh: "行为记录分析", textEn: "Behavior Analysis" },
      ],
    },
    {
      id: "conference",
      icon: MonitorSpeaker,
      titleZh: "企业会议系统",
      titleEn: "Enterprise Conference System",
      subtitleZh: "会议室专用智能设备",
      subtitleEn: "Dedicated Meeting Room Devices",
      descZh: "企业级会议专用设备，实时记录会议全过程，智能识别多人发言，自动生成会议纪要与待办事项，让每场会议都有价值输出。",
      descEn: "Enterprise-grade conference devices that record meetings in real-time, identify multiple speakers, and auto-generate meeting minutes and action items.",
      features: [
        { icon: Users, textZh: "多人发言识别", textEn: "Multi-speaker Recognition" },
        { icon: CheckCircle2, textZh: "智能会议纪要", textEn: "Smart Meeting Minutes" },
        { icon: Zap, textZh: "待办事项提取", textEn: "Action Item Extraction" },
      ],
    },
    {
      id: "cloud",
      icon: Server,
      titleZh: "私有云算力平台",
      titleEn: "Private Cloud Computing Platform",
      subtitleZh: "企业专属数据安全保障",
      subtitleEn: "Enterprise Data Security Guarantee",
      descZh: "为企业提供专用的私有云算力服务器，所有语音数据在企业内部完成处理，确保敏感信息不外泄，满足合规性要求。",
      descEn: "Dedicated private cloud computing servers for enterprises, processing all voice data internally to ensure sensitive information stays secure and compliant.",
      features: [
        { icon: Lock, textZh: "数据本地化存储", textEn: "Local Data Storage" },
        { icon: Shield, textZh: "企业级安全防护", textEn: "Enterprise Security" },
        { icon: Cloud, textZh: "弹性算力扩展", textEn: "Scalable Computing" },
      ],
    },
  ];

  return (
    <section id="core-products" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
            {t("核心产品", "Core Products")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t("企业级", "Enterprise")}
            <span className="gradient-text">{t("智能音频解决方案", " Audio Intelligence")}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t(
              "软硬一体化的企业级音频解决方案，从员工日常记录到会议管理，再到数据安全存储，为企业打造完整的语音数据智能化闭环",
              "Integrated hardware-software enterprise audio solutions, from daily employee records to meeting management and secure data storage, creating a complete voice data intelligence loop"
            )}
          </p>
        </motion.div>

        {/* Product Architecture Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="gradient-border rounded-3xl overflow-hidden bg-card/50 backdrop-blur-sm p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={enterpriseAudioSolutionImage} 
                    alt={t("企业级智能音频解决方案", "Enterprise Audio Intelligence Solution")}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Architecture Flow */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">
                  {t("一体化解决方案架构", "Integrated Solution Architecture")}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    "三大核心产品协同工作，形成完整的企业语音数据处理闭环",
                    "Three core products work together to form a complete enterprise voice data processing loop"
                  )}
                </p>
                
                {/* Flow Diagram */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{t("终端采集", "Data Collection")}</p>
                      <p className="text-sm text-muted-foreground">{t("录音设备收集语音数据", "Recording devices capture voice data")}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Server className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{t("私有云处理", "Private Cloud Processing")}</p>
                      <p className="text-sm text-muted-foreground">{t("企业内部AI分析处理", "In-house AI analysis and processing")}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{t("智能输出", "Intelligent Output")}</p>
                      <p className="text-sm text-muted-foreground">{t("结构化报告与业务洞察", "Structured reports and business insights")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <a href={product.id === "recorder" ? "/products/smart-recorder" : product.id === "conference" ? "/products/meeting-robot" : "/products/private-cloud"} className="block h-full">
                <div className="h-full gradient-border rounded-2xl overflow-hidden bg-card hover:bg-card/80 transition-all duration-300">
                  <div className="p-8">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <product.icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-2">
                      {t(product.titleZh, product.titleEn)}
                    </h3>
                    <p className="text-sm text-primary/80 mb-4">
                      {t(product.subtitleZh, product.subtitleEn)}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {t(product.descZh, product.descEn)}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {product.features.map((feature) => (
                        <div key={feature.textZh} className="flex items-center gap-3">
                          <feature.icon className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {t(feature.textZh, feature.textEn)}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      {t("了解详情", "Learn More")}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              {t("咨询产品方案", "Inquire About Solutions")}
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
