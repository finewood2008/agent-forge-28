import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, GitBranch, Cpu } from "lucide-react";

const capabilities = [
  {
    icon: Layers,
    title: "模型层能力",
    description: "拥有大模型备案资质，具备模型微调与私有化部署能力。不只是API调用，而是真正的模型开发。",
  },
  {
    icon: GitBranch,
    title: "全链路交付",
    description: "从需求分析、数据处理、模型训练到智能体部署，一站式交付。您只需提出需求，我们负责落地。",
  },
  {
    icon: Cpu,
    title: "软硬一体",
    description: "既能做云端智能体，也能部署到ESP32、无人机等边缘设备。真正实现端云协同的智能体解决方案。",
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
            Why Q-Atlas AI
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            为什么选择企数星图？
            <br />
            <span className="gradient-text">真正从模型层构建的智能体开发能力</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            市面上的智能体工具（如扣子、Dify）本质上是在调用通用大模型API做简单编排。
            而企数星图不同——我们拥有<span className="text-foreground font-medium">从数据清洗、模型微调、知识注入到端侧部署</span>的全链路能力。
            这意味着：您的智能体不是"套壳ChatGPT"，而是真正理解您业务的专属AI。
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
