import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Mic, 
  Eye,
  Lightbulb,
  Zap,
  RefreshCw,
  MessageSquare,
  Globe,
  FileText,
  Route,
  Bell,
  TrendingUp,
  ArrowRight,
  ExternalLink
} from "lucide-react";

const solutions = [
  {
    id: "xmakehub",
    badge: "AI造物所",
    title: "硬件ID开发智能体",
    subtitle: "帮助企业快速完成硬件产品的工业设计",
    description: "基于深度学习的硬件外观设计AI，能够快速生成产品创意、迭代设计方案，大幅缩短硬件产品的ID设计周期。",
    link: "https://www.xmakehub.com",
    features: [
      { icon: Palette, label: "AI驱动设计", desc: "智能生成硬件外观设计" },
      { icon: Lightbulb, label: "快速构思", desc: "分钟级产品原型创意" },
      { icon: RefreshCw, label: "智能迭代", desc: "设计方案自动优化" },
    ],
    applications: ["硬件创业公司", "传统制造企业", "产品设计部门", "ODM/OEM厂商"],
    gradient: "from-primary to-primary/50",
  },
  {
    id: "voice",
    badge: "AI录音卡",
    title: "会议语音智能体",
    subtitle: "专业级AI会议助手，让每场会议都有价值",
    description: "软硬一体的智能会议解决方案，集成高清录音硬件与云端AI处理能力，实现会议全流程智能化。",
    features: [
      { icon: Mic, label: "实时录音转写", desc: "高精度语音识别" },
      { icon: Globe, label: "多语言翻译", desc: "实时跨语言沟通" },
      { icon: FileText, label: "智能纪要", desc: "自动生成会议总结" },
    ],
    applications: ["企业会议室", "商务人士", "跨国团队", "法律/医疗记录"],
    gradient: "from-accent to-accent/50",
  },
  {
    id: "skyeye",
    badge: "低空巡检智能体",
    title: "无人机视觉识别AI",
    subtitle: "赋予无人机'认知大脑'，实现低空作业全自动化",
    description: "基于YOLO框架的视觉小模型深度训练，在边缘端即可实现高精度识别。支持多场景模型快速适配与持续迭代。",
    features: [
      { icon: Eye, label: "端侧视觉识别", desc: "边缘端高精度AI" },
      { icon: Route, label: "全自动巡检", desc: "航线规划到告警闭环" },
      { icon: TrendingUp, label: "持续进化", desc: "模型动态迭代升级" },
    ],
    applications: ["电力线路巡查", "城市综治巡检", "园区安防监控", "工地违规检测"],
    gradient: "from-emerald-500 to-emerald-500/50",
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
            Our Products
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            我们开发的
            <span className="gradient-text">行业智能体</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            已服务多个行业场景，从硬件设计到语音交互再到视觉认知，证明我们的全栈智能体开发能力
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

                    {solution.link ? (
                      <Button variant="hero" asChild>
                        <a href={solution.link} target="_blank" rel="noopener noreferrer">
                          访问产品
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    ) : (
                      <Button variant="hero">
                        了解详情
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    )}
                  </div>

                  {/* Visual */}
                  <div className={`relative ${index === 1 ? "lg:order-1" : ""}`}>
                    <div className={`aspect-square rounded-2xl bg-gradient-to-br ${solution.gradient} opacity-20`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="glass rounded-2xl p-8 w-4/5">
                        <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">适用客户</p>
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
