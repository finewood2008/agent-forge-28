import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Zap, Calendar } from "lucide-react";

const milestones = [
  {
    year: "2022.09",
    title: "企业成立",
    description: "汇聚行业精英，正式启航",
  },
  {
    year: "2025.12",
    title: "大模型备案",
    description: "获得国家级大模型备案认证",
    highlight: true,
  },
  {
    year: "2026",
    title: "平台发布",
    description: "行业智能体平台正式上线",
  },
];

const stats = [
  { icon: Award, value: "国家级", label: "大模型备案认证" },
  { icon: Users, value: "500强", label: "核心团队背景" },
  { icon: Zap, value: "全链路", label: "模型开发能力" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            About Q-Atlas AI
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            关于
            <span className="gradient-text">企数星图</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            企数星图是一家专注于<span className="text-foreground font-medium">行业智能体开发</span>的AI公司。
            我们的团队来自阿里、YY、金山等互联网大厂，拥有丰富的AI模型开发与产品落地经验。
            2025年，我们获得国家大模型备案认证，具备模型私有化部署资质。
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
            <span className="text-foreground font-medium">我们的使命：</span>帮助每一个想要拥有专属AI智能体的企业，从底层模型开始构建真正懂业务的智能体。
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="text-center p-8 rounded-2xl bg-secondary/50 border border-border/50"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">企业历程</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-12 md:space-y-0">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative md:flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } mb-8`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className={`inline-block p-6 rounded-xl ${
                      milestone.highlight
                        ? "gradient-border bg-card glow-primary"
                        : "bg-secondary/50 border border-border/50"
                    }`}>
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className={`w-4 h-4 ${milestone.highlight ? "text-primary" : "text-muted-foreground"}`} />
                        <span className={`text-sm font-medium ${milestone.highlight ? "text-primary" : "text-muted-foreground"}`}>
                          {milestone.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold mb-1">{milestone.title}</h4>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background bg-primary" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
