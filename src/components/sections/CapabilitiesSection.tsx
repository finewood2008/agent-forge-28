import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, GitBranch, Cpu } from "lucide-react";

const capabilities = [
  {
    icon: Layers,
    title: "企业级模型能力",
    description: "拥有国家大模型备案资质，支持模型私有化部署。您的企业数据100%留在自有环境，符合金融、医疗等行业合规要求。",
  },
  {
    icon: GitBranch,
    title: "企业级全链路交付",
    description: "企业数据清洗（脱敏处理）、专属模型微调、企业知识注入、到最终部署。不是简单的Prompt工程，而是深度定制。",
  },
  {
    icon: Cpu,
    title: "企业级端侧部署",
    description: "智能体可部署在企业私有服务器或边缘设备，实现完全离线运行。杜绝数据外泄风险，满足最严格的安全要求。",
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
            Enterprise-Grade
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            企业级智能体开发能力
            <br />
            <span className="gradient-text">告别消费级工具的数据安全隐患</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            市面上的AI工具（扣子、Dify等）本质是<span className="text-foreground font-medium">消费级产品</span>——数据存储在公有云、无法深度定制、缺乏企业合规保障。
            企数星图提供真正的<span className="text-foreground font-medium">企业级解决方案</span>：数据100%私有化、模型专属定制、完整合规认证。
            杜绝企业核心数据泄露风险。
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
