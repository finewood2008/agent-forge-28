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
import recorderBadgeImage from "@/assets/recorder-badge-eink.png";
import meetingRobotImage from "@/assets/meeting-robot-device.png";
import privateCloudImage from "@/assets/private-cloud-hero.jpg";

export const CoreProductSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const products = [
    {
      id: "recorder",
      icon: Smartphone,
      titleZh: "智能录音设备",
      titleEn: "Smart Recording",
      subtitleZh: "录音卡 · 录音工牌 · 智能胸牌",
      subtitleEn: "Card · Badge · Wearable",
      bgImage: recorderBadgeImage,
      features: [
        { textZh: "高清录音", textEn: "HD Audio" },
        { textZh: "实时转写", textEn: "Real-time" },
        { textZh: "AI分析", textEn: "AI Analysis" },
      ],
    },
    {
      id: "conference",
      icon: MonitorSpeaker,
      titleZh: "企业会议系统",
      titleEn: "Conference System",
      subtitleZh: "会议室专用智能设备",
      subtitleEn: "Smart Meeting Devices",
      bgImage: meetingRobotImage,
      features: [
        { textZh: "多人识别", textEn: "Multi-speaker" },
        { textZh: "智能纪要", textEn: "Smart Minutes" },
        { textZh: "待办提取", textEn: "Action Items" },
      ],
    },
    {
      id: "cloud",
      icon: Server,
      titleZh: "私有云算力",
      titleEn: "Private Cloud",
      subtitleZh: "企业专属数据安全保障",
      subtitleEn: "Enterprise Data Security",
      bgImage: privateCloudImage,
      features: [
        { textZh: "本地存储", textEn: "Local Storage" },
        { textZh: "安全防护", textEn: "Security" },
        { textZh: "弹性扩展", textEn: "Scalable" },
      ],
    },
  ];

  return (
    <section id="core-products" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-background to-background">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container relative z-10">
        {/* Section Header - Compact */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            {t("核心产品", "Core Products")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("企业级", "Enterprise ")}
            <span className="gradient-text">{t("智能音频解决方案", "Audio Intelligence")}</span>
          </h2>
        </motion.div>

        {/* Hero Image - Large & Prominent */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
            {/* Main Image */}
            <img 
              src={enterpriseAudioSolutionImage} 
              alt={t("企业级智能音频解决方案", "Enterprise Audio Intelligence Solution")}
              className="w-full h-auto object-cover"
            />
            
            {/* Gradient Overlay at bottom for tags */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* Floating Tags at Bottom */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-center gap-3 md:gap-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm md:text-base font-medium"
              >
                {t("私有部署", "Private Deployment")}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm md:text-base font-medium"
              >
                {t("端云一体", "Edge-Cloud Integration")}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm md:text-base font-medium"
              >
                {t("智能决策", "AI Decision")}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="px-4 py-2 rounded-full bg-primary/80 backdrop-blur-md text-white text-sm md:text-base font-medium"
              >
                {t("软硬一体", "Hardware + Software")}
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* Product Cards with Background Images */}
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <a 
                href={product.id === "recorder" ? "/products/smart-recorder" : product.id === "conference" ? "/products/meeting-robot" : "/products/private-cloud"} 
                className="block h-full"
              >
                <div className="relative h-full min-h-[320px] rounded-2xl overflow-hidden">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${product.bgImage})` }}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-300" />
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/20">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl font-bold text-white mb-1">
                      {t(product.titleZh, product.titleEn)}
                    </h3>
                    <p className="text-sm text-white/70 mb-4">
                      {t(product.subtitleZh, product.subtitleEn)}
                    </p>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature) => (
                        <span 
                          key={feature.textZh} 
                          className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-xs border border-white/10"
                        >
                          {t(feature.textZh, feature.textEn)}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                      {t("了解详情", "Learn More")}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
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
