import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Settings, Cloud } from "lucide-react";

const capabilities = [
  {
    icon: Shield,
    title: "合规自主",
    description: "持有国家大模型备案认证，数据可控，安全合规。满足B2B2G级别的严苛要求。",
  },
  {
    icon: Settings,
    title: "深度定制",
    description: "基于开源基座进行二次开发，精准适配垂直场景。每个智能体都经过行业数据深度浸润。",
  },
  {
    icon: Cloud,
    title: "端云协同",
    description: "既懂云端大脑，又懂边缘硬件。实现ESP32/无人机等设备的软硬一体化部署。",
  },
];

export const CapabilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="capabilities" className="section-padding relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            The Agent Factory
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            底层模型驱动
            <br />
            <span className="gradient-text">定义行业专属智能体</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            我们不只提供标准化的AI，我们构建懂您业务的"数字专家"。
            企数星图依托核心团队来自YY、阿里、金山的深厚技术积累，
            以<span className="text-foreground font-medium">"模型微调(Fine-tuning) + 智能体编排(Agent Orchestration)"</span>为双引擎，
            确保每一个智能体都具备极高的场景适应性与数据安全性。
          </p>
        </motion.div>

        {/* Capability Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className="group relative"
            >
              <div className="gradient-border rounded-2xl p-8 h-full bg-card hover:bg-card/80 transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <cap.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{cap.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
