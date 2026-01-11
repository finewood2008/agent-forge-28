import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Lightbulb, Target, Shield, MessageSquare } from "lucide-react";

const customerProfiles = [
  {
    icon: Lightbulb,
    title: "想要AI转型，但不知从何入手",
    description: "您的业务需要AI提效，但团队没有AI开发经验，不知道如何开始第一步。",
  },
  {
    icon: Target,
    title: "尝试过通用AI工具，效果不理想",
    description: "用过ChatGPT、扣子、Dify等工具，发现它们不懂您的业务场景，回答总是不够专业。",
  },
  {
    icon: MessageSquare,
    title: "需要行业专属智能体，又没有模型团队",
    description: "您需要的是真正理解行业术语和流程的专属AI，而非通用对话机器人。",
  },
  {
    icon: Shield,
    title: "对数据安全有严格要求",
    description: "您的业务数据敏感，需要私有化部署和数据隔离，不能使用公有云AI服务。",
  },
];

export const TargetCustomerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="customers" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            For You
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            我们帮助
            <span className="gradient-text">这样的企业</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            如果您符合以下任一情况，企数星图可能正是您需要的智能体开发合作伙伴
          </p>
        </motion.div>

        {/* Customer Profile Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {customerProfiles.map((profile, index) => (
            <motion.div
              key={profile.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className="group relative"
            >
              <div className="gradient-border rounded-2xl p-8 h-full bg-card hover:bg-card/80 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <profile.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{profile.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {profile.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">
            如果您符合以上任一情况，欢迎与我们聊聊您的AI智能体需求
          </p>
          <Button variant="hero" size="xl">
            <Sparkles className="w-5 h-5" />
            预约咨询
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
