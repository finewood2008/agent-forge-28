import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { openChatWidget } from "@/hooks/use-chat-widget";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="gradient-border rounded-3xl p-8 md:p-16 bg-card text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t("开启您的", "Start Your")}
              <span className="gradient-text">{t("智能化之旅", "AI Journey")}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              {t(
                "无论是语音交互升级，还是低空巡检自动化，我们的团队将为您提供专业的定制化咨询与解决方案。",
                "Whether it's voice interaction upgrades or automated drone inspection, our team will provide professional customized consulting and solutions."
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="xl" onClick={openChatWidget}>
                {t("立即预约演示", "Book a Demo")}
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                {t("下载产品手册", "Download Brochure")}
              </Button>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-border/50">
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>contact@qishu.ai</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>400-888-8888</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 pt-6">
              <div className="flex items-start justify-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-left">{t("深圳地址：广东省深圳市南山区粤海街道高新区社区高新南环路26号深圳湾科技生态园5栋A1319", "Shenzhen: Building 5, A1319, Shenzhen Bay Eco-Tech Park, No.26 Gaoxin South Ring Road, Nanshan District, Shenzhen")}</span>
              </div>
              <div className="flex items-start justify-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-left">{t("珠海地址：珠海市高新区唐家湾镇天星五路159号4栋402室", "Zhuhai: Room 402, Building 4, No.159 Tianxing 5th Road, Tangjiawan Town, High-tech Zone, Zhuhai")}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
