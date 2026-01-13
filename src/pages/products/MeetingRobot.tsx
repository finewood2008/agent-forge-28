import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Bell,
  FileText,
  Users,
  CheckSquare,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Mic,
  ClipboardList,
  Send,
  Clock,
  MessageSquare,
  Target,
  BarChart3,
  Play
} from "lucide-react";

// Import product assets
import meetingRobotVideo from "@/assets/meeting-robot-video.mp4";
import meetingRobotDevice from "@/assets/meeting-robot-device.png";
import meetingRobotScreen from "@/assets/meeting-robot-screen.png";

export default function MeetingRobot() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const phases = [
    {
      id: "before",
      icon: Bell,
      phaseZh: "会前",
      phaseEn: "Before Meeting",
      titleZh: "智能会议筹备",
      titleEn: "Smart Meeting Preparation",
      features: [
        {
          icon: Calendar,
          titleZh: "自动发送通知",
          titleEn: "Auto Send Notifications",
          descZh: "根据日程自动向参会人发送会议通知，包含议程、材料预览",
          descEn: "Auto-send meeting notifications with agenda and material previews",
        },
        {
          icon: Bell,
          titleZh: "智能提醒",
          titleEn: "Smart Reminders",
          descZh: "会前15分钟自动提醒，确保参会人准时到场",
          descEn: "Auto-remind 15 minutes before to ensure punctuality",
        },
        {
          icon: ClipboardList,
          titleZh: "议程准备",
          titleEn: "Agenda Preparation",
          descZh: "自动整理会议议程，同步历史会议相关决议",
          descEn: "Auto-organize agenda and sync related historical decisions",
        },
      ],
      gradient: "from-blue-500 to-blue-600",
    },
    {
      id: "during",
      icon: Mic,
      phaseZh: "会中",
      phaseEn: "During Meeting",
      titleZh: "实时会议记录",
      titleEn: "Real-time Meeting Recording",
      features: [
        {
          icon: MessageSquare,
          titleZh: "实时语音转写",
          titleEn: "Real-time Transcription",
          descZh: "边开会边转写，实时生成文字记录",
          descEn: "Simultaneous transcription during the meeting",
        },
        {
          icon: Users,
          titleZh: "多人发言识别",
          titleEn: "Multi-speaker Recognition",
          descZh: "智能识别不同发言人，自动标注发言者姓名",
          descEn: "Smart recognition and tagging of different speakers",
        },
        {
          icon: Target,
          titleZh: "要点自动提炼",
          titleEn: "Auto Key Points Extraction",
          descZh: "AI自动识别并高亮会议重点、决议事项",
          descEn: "AI auto-identifies and highlights key points and decisions",
        },
      ],
      gradient: "from-primary to-primary/80",
    },
    {
      id: "after",
      icon: CheckSquare,
      phaseZh: "会后",
      phaseEn: "After Meeting",
      titleZh: "任务分发追踪",
      titleEn: "Task Distribution & Tracking",
      features: [
        {
          icon: Send,
          titleZh: "任务自动分发",
          titleEn: "Auto Task Distribution",
          descZh: "根据会议决议自动生成待办任务，分发到责任人",
          descEn: "Auto-generate and assign tasks based on meeting decisions",
        },
        {
          icon: Clock,
          titleZh: "进度跟踪提醒",
          titleEn: "Progress Tracking",
          descZh: "自动追踪任务进度，到期提醒确保执行落地",
          descEn: "Auto-track progress with deadline reminders",
        },
        {
          icon: BarChart3,
          titleZh: "会议总结归档",
          titleEn: "Meeting Summary Archive",
          descZh: "自动生成结构化会议纪要，归档至企业知识库",
          descEn: "Auto-generate structured minutes and archive to knowledge base",
        },
      ],
      gradient: "from-emerald-500 to-emerald-600",
    },
  ];

  const scenarios = [
    {
      titleZh: "管理层会议",
      titleEn: "Executive Meetings",
      descZh: "高管决策会议的全程记录与决议追踪",
      descEn: "Full recording and decision tracking for executive meetings",
    },
    {
      titleZh: "项目例会",
      titleEn: "Project Standups",
      descZh: "项目进度同步、问题反馈、任务分配",
      descEn: "Project progress sync, issue feedback, task assignment",
    },
    {
      titleZh: "销售复盘",
      titleEn: "Sales Reviews",
      descZh: "销售业绩分析、策略调整、目标制定",
      descEn: "Sales analysis, strategy adjustment, goal setting",
    },
    {
      titleZh: "培训研讨",
      titleEn: "Training Sessions",
      descZh: "培训内容记录、知识沉淀、学习追踪",
      descEn: "Training records, knowledge retention, learning tracking",
    },
  ];

  const features = [
    {
      icon: Users,
      titleZh: "多人发言识别",
      titleEn: "Multi-speaker Recognition",
      descZh: "精准识别10+参会人员的发言",
      descEn: "Accurately identify 10+ meeting participants",
    },
    {
      icon: FileText,
      titleZh: "智能会议纪要",
      titleEn: "Smart Meeting Minutes",
      descZh: "自动生成结构化的会议纪要文档",
      descEn: "Auto-generate structured meeting minutes",
    },
    {
      icon: CheckSquare,
      titleZh: "待办事项提取",
      titleEn: "Action Item Extraction",
      descZh: "自动识别并提取会议中的待办任务",
      descEn: "Auto-identify and extract action items",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Video */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link 
              to="/#core-products" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("返回核心产品", "Back to Core Products")}
            </Link>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              {t("核心产品", "Core Product")}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("会议机器人", "Meeting Robot")}
            </h1>
            <p className="text-xl text-primary mb-4">
              {t("您的智能会议秘书", "Your Smart Meeting Secretary")}
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              {t(
                "会前智能通知、会中实时记录、会后任务分发。让每一场会议都有价值输出，让每一个决议都能落地执行",
                "Pre-meeting notifications, real-time recording, post-meeting task distribution. Make every meeting valuable."
              )}
            </p>
          </motion.div>

          {/* Core Video Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto mb-12"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/30">
              <video 
                className="w-full aspect-video object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
                poster={meetingRobotDevice}
              >
                <source src={meetingRobotVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {features.map((feature) => (
              <div 
                key={feature.titleZh}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-border/50"
              >
                <feature.icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{t(feature.titleZh, feature.titleEn)}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Three Phases Section */}
      <section className="py-20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("全流程会议管理", "Full-cycle Meeting Management")}
            </h2>
            <p className="text-muted-foreground">
              {t("从会前到会后，一站式解决会议管理痛点", "From pre to post-meeting, one-stop solution")}
            </p>
          </motion.div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="relative"
              >
                {/* Phase Indicator */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center shadow-lg`}>
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{t(phase.phaseZh, phase.phaseEn)}</span>
                    <h3 className="text-2xl font-bold">{t(phase.titleZh, phase.titleEn)}</h3>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6 pl-0 md:pl-20">
                  {phase.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature.titleZh}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                      className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">
                        {t(feature.titleZh, feature.titleEn)}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {t(feature.descZh, feature.descEn)}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Connector Line */}
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-border to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("会议室专用设备", "Dedicated Meeting Room Device")}
            </h2>
            <p className="text-muted-foreground">
              {t("专为会议场景设计的智能硬件", "Smart hardware designed for meeting scenarios")}
            </p>
          </motion.div>

          {/* Product Images Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="rounded-3xl overflow-hidden border border-border/50 shadow-lg">
                <img 
                  src={meetingRobotDevice} 
                  alt={t("会议机器人设备", "Meeting Robot Device")}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-center text-muted-foreground mt-4 text-sm">
                {t("三角立式设计，会议室标配", "Triangular design, meeting room standard")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="rounded-3xl overflow-hidden border border-border/50 shadow-lg">
                <img 
                  src={meetingRobotScreen} 
                  alt={t("会议纪要界面", "Meeting Minutes Interface")}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-center text-muted-foreground mt-4 text-sm">
                {t("实时转写，智能生成会议纪要", "Real-time transcription with smart meeting minutes")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Scenarios */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("应用场景", "Application Scenarios")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={scenario.titleZh}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {t(scenario.titleZh, scenario.titleEn)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(scenario.descZh, scenario.descEn)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("让会议更有价值", "Make Meetings More Valuable")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t(
                "告别冗长低效的会议，让每一次讨论都有结果、每一个决策都能落地",
                "Say goodbye to inefficient meetings, make every discussion count"
              )}
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/#contact">
                {t("立即咨询", "Contact Us Now")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
