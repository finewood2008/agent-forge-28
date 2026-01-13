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
      <section className="pt-20 md:pt-24 pb-6 md:pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 md:mb-4"
          >
            <Link 
              to="/#core-products" 
              className="inline-flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
              {t("返回核心产品", "Back to Core Products")}
            </Link>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-5 md:mb-8"
          >
            <span className="inline-block px-2.5 py-1 rounded-full text-[10px] md:text-xs font-medium bg-primary/10 text-primary mb-2 md:mb-3">
              {t("核心产品", "Core Product")}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-3">
              {t("会议机器人", "Meeting Robot")}
            </h1>
            <p className="text-base md:text-lg text-primary mb-1.5 md:mb-2">
              {t("您的智能会议秘书", "Your Smart Meeting Secretary")}
            </p>
            <p className="text-sm md:text-base text-muted-foreground/80 max-w-2xl mx-auto px-2">
              {t(
                "会前智能通知、会中实时记录、会后任务分发。让每一场会议都有价值输出",
                "Pre-meeting notifications, real-time recording, post-meeting task distribution."
              )}
            </p>
          </motion.div>

          {/* Core Video Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto mb-4 md:mb-6"
          >
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl border border-border/30">
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
            </div>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3"
          >
            {features.map((feature) => (
              <div 
                key={feature.titleZh}
                className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-4 py-1.5 md:py-2 rounded-full bg-card border border-border/50 text-xs md:text-sm"
              >
                <feature.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                <span className="font-medium">{t(feature.titleZh, feature.titleEn)}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Three Phases Section */}
      <section className="py-8 md:py-12 relative">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-6 md:mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5 md:mb-2">
              {t("全流程会议管理", "Full-cycle Meeting Management")}
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground">
              {t("从会前到会后，一站式解决会议管理痛点", "From pre to post-meeting, one-stop solution")}
            </p>
          </motion.div>

          <div className="space-y-6 md:space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Phase Indicator */}
                <div className="flex items-center gap-2.5 md:gap-3 mb-3 md:mb-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center shadow-md`}>
                    <phase.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] md:text-xs text-muted-foreground">{t(phase.phaseZh, phase.phaseEn)}</span>
                    <h3 className="text-base md:text-lg font-bold">{t(phase.titleZh, phase.titleEn)}</h3>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 pl-0 md:pl-16">
                  {phase.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature.titleZh}
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      className="p-3 md:p-4 rounded-lg md:rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                    >
                      <div className="w-7 h-7 md:w-9 md:h-9 rounded-md md:rounded-lg bg-secondary flex items-center justify-center mb-2 md:mb-3">
                        <feature.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                      </div>
                      <h4 className="text-xs md:text-sm font-semibold mb-0.5 md:mb-1">
                        {t(feature.titleZh, feature.titleEn)}
                      </h4>
                      <p className="text-[10px] md:text-xs text-muted-foreground line-clamp-2">
                        {t(feature.descZh, feature.descEn)}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Connector Line */}
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute left-6 top-14 w-0.5 h-16 bg-gradient-to-b from-border to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="py-8 md:py-12 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5 md:mb-2">
              {t("会议室专用设备", "Dedicated Meeting Room Device")}
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground">
              {t("专为会议场景设计的智能硬件", "Smart hardware designed for meeting scenarios")}
            </p>
          </motion.div>

          {/* Product Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="rounded-xl md:rounded-2xl overflow-hidden border border-border/50 shadow-md">
                <img 
                  src={meetingRobotDevice} 
                  alt={t("会议机器人设备", "Meeting Robot Device")}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-muted-foreground mt-1.5 md:mt-2 text-[10px] md:text-xs">
                {t("三角立式设计，会议室标配", "Triangular design, meeting room standard")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="rounded-xl md:rounded-2xl overflow-hidden border border-border/50 shadow-md">
                <img 
                  src={meetingRobotScreen} 
                  alt={t("会议纪要界面", "Meeting Minutes Interface")}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-muted-foreground mt-1.5 md:mt-2 text-[10px] md:text-xs">
                {t("实时转写，智能生成会议纪要", "Real-time transcription with smart meeting minutes")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Scenarios */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-5 md:mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5 md:mb-2">
              {t("应用场景", "Application Scenarios")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={scenario.titleZh}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-3 md:p-4 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
              >
                <h3 className="text-xs md:text-sm font-semibold mb-0.5 md:mb-1">
                  {t(scenario.titleZh, scenario.titleEn)}
                </h3>
                <p className="text-[10px] md:text-xs text-muted-foreground line-clamp-2">
                  {t(scenario.descZh, scenario.descEn)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-3">
              {t("让会议更有价值", "Make Meetings More Valuable")}
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">
              {t(
                "告别冗长低效的会议，让每一次讨论都有结果",
                "Say goodbye to inefficient meetings, make every discussion count"
              )}
            </p>
            <Button size="sm" className="md:text-sm" asChild>
              <Link to="/#contact">
                {t("预约演示", "Book a Demo")}
                <ArrowRight className="ml-1.5 w-3.5 h-3.5 md:ml-2 md:w-4 md:h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
