import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  Mic, 
  Cpu, 
  MessageSquare, 
  Lock,
  Eye,
  Route,
  Bell,
  TrendingUp,
  ArrowRight
} from "lucide-react";

const solutions = [
  {
    id: "voice",
    badge: "企数AI·Voice Agent",
    title: "多模态语音智能体",
    subtitle: "您的全天候业务助理与交互中枢",
    description: "集成ESP32硬件与MCP协议，毫秒级响应。通过云端大模型微调，精准理解行业术语与业务逻辑。",
    features: [
      { icon: Cpu, label: "超低延迟交互", desc: "毫秒级响应，拒绝卡顿" },
      { icon: MessageSquare, label: "懂业务的对话", desc: "精准理解行业术语" },
      { icon: Lock, label: "灵活部署", desc: "SaaS或私有化部署" },
    ],
    applications: ["智能客服硬件", "车载语音助手", "智能家居中控", "办公会议助理"],
    gradient: "from-primary to-primary/50",
  },
  {
    id: "skyeye",
    badge: "企数天眼·SkyEye Agent",
    title: "低空巡检智能体",
    subtitle: "赋予无人机'认知大脑'，实现低空作业全自动化",
    description: "基于YOLO框架的视觉小模型深度训练，在边缘端即可实现高精度识别。支持航线规划到实时告警的端到端管理。",
    features: [
      { icon: Eye, label: "端侧视觉进化", desc: "边缘端高精度识别" },
      { icon: Route, label: "全自动闭环", desc: "端到端任务管理" },
      { icon: TrendingUp, label: "动态迭代", desc: "模型持续进化" },
    ],
    applications: ["城市综治巡检", "电力线路巡查", "园区安防监控", "工地违规检测"],
    gradient: "from-accent to-accent/50",
  },
];

export const SolutionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
            Key Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            两大旗舰
            <span className="gradient-text">解决方案</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            从语音交互到视觉认知，为您的业务场景提供端到端的智能体解决方案
          </p>
        </motion.div>

        {/* Solution Cards */}
        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 + 0.2 }}
              className="gradient-border rounded-3xl overflow-hidden bg-card"
            >
              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className={index === 1 ? "lg:order-2" : ""}>
                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${solution.gradient} text-primary-foreground mb-6`}>
                      {solution.badge}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {solution.subtitle}
                    </p>
                    <p className="text-muted-foreground/80 text-sm leading-relaxed mb-8">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {solution.features.map((feature) => (
                        <div key={feature.label} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                            <feature.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{feature.label}</p>
                            <p className="text-sm text-muted-foreground">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button variant="hero">
                      了解详情
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className={`relative ${index === 1 ? "lg:order-1" : ""}`}>
                    <div className={`aspect-square rounded-2xl bg-gradient-to-br ${solution.gradient} opacity-20`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="glass rounded-2xl p-8 w-4/5">
                        <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">应用场景</p>
                        <div className="flex flex-wrap gap-2">
                          {solution.applications.map((app) => (
                            <span
                              key={app}
                              className="px-3 py-1.5 rounded-full text-sm bg-secondary/80 text-secondary-foreground"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
