import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import { openChatWidget } from "@/hooks/use-chat-widget";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();

  const companies = [
    { zh: "阿里巴巴", en: "Alibaba" },
    { zh: "YY直播", en: "YY Live" },
    { zh: "金山软件", en: "Kingsoft" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      {/* Additional glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] animate-pulse-glow animation-delay-200" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Certification Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">
              {t("2025年 国家大模型备案认证", "2025 National LLM Registration Certified")}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground">
              {t("企业级AI智能体开发专家", "Enterprise AI Agent Development Expert")}
            </span>
            <br />
            <span className="gradient-text">
              {t("软硬一体 · 私有部署", "Hardware-Software Integration · Private Deployment")}
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
          >
            {t(
              "核心产品：企业级智能音频解决方案 | 定制服务：行业智能体开发",
              "Core Product: Enterprise Audio Intelligence | Custom: Industry AI Agents"
            )}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base text-muted-foreground/70 max-w-xl mx-auto mb-10"
          >
            {t(
              "为企业打造专属AI能力，数据本地化存储，告别安全风险",
              "Build Exclusive AI for Enterprise, Local Data Storage, Zero Security Risk"
            )}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" onClick={openChatWidget}>
              <Sparkles className="w-5 h-5" />
              {t("聊聊您的智能体需求", "Discuss Your AI Needs")}
            </Button>
            <Button variant="heroOutline" size="xl">
              {t("查看案例", "View Case Studies")}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-border/30"
          >
            <p className="text-sm text-muted-foreground mb-6">
              {t("核心团队来自", "Core Team From")}
            </p>
            <div className="flex items-center justify-center gap-8 md:gap-16 opacity-60">
              {companies.map((company) => (
                <span key={company.zh} className="text-lg md:text-xl font-semibold text-muted-foreground">
                  {t(company.zh, company.en)}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};
