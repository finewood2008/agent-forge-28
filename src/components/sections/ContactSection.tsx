import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
              开启您的
              <span className="gradient-text">智能化之旅</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              无论是语音交互升级，还是低空巡检自动化，
              我们的团队将为您提供专业的定制化咨询与解决方案。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="xl">
                立即预约演示
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                下载产品手册
              </Button>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>contact@qishu.ai</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>400-888-8888</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>深圳市南山区</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
