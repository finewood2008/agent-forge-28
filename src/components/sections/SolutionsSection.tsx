import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  ExternalLink,
  Code2,
  Cpu,
  RefreshCw,
  Palette,
  Eye,
  Bot,
  MessageSquare,
  FileSearch,
  Video,
  Users,
  Calculator,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Import product images
import xmakehubImage from "@/assets/xmakehub-screenshot.jpeg";
import droneInspectionImage from "@/assets/drone-inspection.png";

export const SolutionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    
    emblaApi.on("select", onSelect);
    onSelect();
    
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const cases = [
    {
      id: "xmakehub",
      icon: Palette,
      titleZh: "AI造物所",
      titleEn: "AI MakeHub",
      subtitleZh: "硬件ID设计智能体",
      subtitleEn: "Hardware ID Design Agent",
      descZh: "基于深度学习的硬件外观设计AI，快速生成产品创意",
      descEn: "Deep learning-based hardware design AI for rapid product concepts",
      image: xmakehubImage,
      link: "https://www.xmakehub.com",
      tagsZh: ["工业设计", "快速原型"],
      tagsEn: ["Industrial Design", "Rapid Prototyping"],
      gradient: "from-primary to-primary/50",
    },
    {
      id: "skyeye",
      icon: Eye,
      titleZh: "低空巡检智能体",
      titleEn: "Drone Inspection AI",
      subtitleZh: "无人机视觉识别AI",
      subtitleEn: "Drone Vision Recognition",
      descZh: "YOLO框架视觉小模型，边缘端高精度识别",
      descEn: "YOLO-based visual model with edge-side recognition",
      image: droneInspectionImage,
      tagsZh: ["电力巡检", "安防监控"],
      tagsEn: ["Power Inspection", "Security"],
      gradient: "from-emerald-500 to-emerald-500/50",
    },
    {
      id: "customer-service",
      icon: MessageSquare,
      titleZh: "智能客服Agent",
      titleEn: "AI Customer Service",
      subtitleZh: "金融/电商行业",
      subtitleEn: "Finance / E-commerce",
      descZh: "7×24小时智能应答，多轮对话理解，工单自动流转",
      descEn: "24/7 intelligent response with multi-turn dialogue understanding",
      tagsZh: ["金融客服", "电商售后"],
      tagsEn: ["Finance CS", "E-commerce Support"],
      gradient: "from-blue-500 to-blue-500/50",
    },
    {
      id: "knowledge-base",
      icon: FileSearch,
      titleZh: "知识库问答Agent",
      titleEn: "Knowledge Base QA",
      subtitleZh: "企业内部知识管理",
      subtitleEn: "Enterprise Knowledge Management",
      descZh: "企业私有知识库RAG，精准检索内部文档与规范",
      descEn: "Enterprise RAG for precise internal document retrieval",
      tagsZh: ["文档检索", "知识沉淀"],
      tagsEn: ["Doc Search", "Knowledge Base"],
      gradient: "from-violet-500 to-violet-500/50",
    },
    {
      id: "quality-inspection",
      icon: Eye,
      titleZh: "智能质检Agent",
      titleEn: "Quality Inspection AI",
      subtitleZh: "制造业产线检测",
      subtitleEn: "Manufacturing Line Inspection",
      descZh: "视觉AI实时检测产品缺陷，准确率达99.5%+",
      descEn: "Real-time visual defect detection with 99.5%+ accuracy",
      tagsZh: ["缺陷检测", "产线质检"],
      tagsEn: ["Defect Detection", "Line QA"],
      gradient: "from-orange-500 to-orange-500/50",
    },
    {
      id: "digital-human",
      icon: Video,
      titleZh: "数字人直播Agent",
      titleEn: "Digital Human Streaming",
      subtitleZh: "营销/教育场景",
      subtitleEn: "Marketing / Education",
      descZh: "AI数字人24小时直播带货，自动互动与话术生成",
      descEn: "24/7 AI digital human for live streaming with auto interaction",
      tagsZh: ["直播带货", "虚拟主播"],
      tagsEn: ["Live Commerce", "Virtual Anchor"],
      gradient: "from-pink-500 to-pink-500/50",
    },
    {
      id: "hr-agent",
      icon: Users,
      titleZh: "智能HR招聘Agent",
      titleEn: "Smart HR Recruitment",
      subtitleZh: "简历筛选/面试辅助",
      subtitleEn: "Resume Screening / Interview",
      descZh: "自动筛选简历、智能匹配岗位、辅助面试评估",
      descEn: "Auto resume screening, smart job matching, interview assistance",
      tagsZh: ["简历筛选", "人才匹配"],
      tagsEn: ["Resume Screening", "Talent Match"],
      gradient: "from-cyan-500 to-cyan-500/50",
    },
    {
      id: "finance-agent",
      icon: Calculator,
      titleZh: "财税合规Agent",
      titleEn: "Finance & Tax Compliance",
      subtitleZh: "合同审阅/财务分析",
      subtitleEn: "Contract Review / Financial Analysis",
      descZh: "智能合同条款审阅、财务报表分析、税务风险预警",
      descEn: "Smart contract review, financial analysis, tax risk alerts",
      tagsZh: ["合同审阅", "财税分析"],
      tagsEn: ["Contract Review", "Tax Analysis"],
      gradient: "from-amber-500 to-amber-500/50",
    },
  ];

  const capabilities = [
    { icon: Code2, titleZh: "全栈开发", titleEn: "Full-Stack", descZh: "从需求到部署", descEn: "Requirements to Deploy" },
    { icon: Cpu, titleZh: "模型定制", titleEn: "Model Custom", descZh: "行业场景优化", descEn: "Industry Optimization" },
    { icon: RefreshCw, titleZh: "持续迭代", titleEn: "Iteration", descZh: "长期运维升级", descEn: "Long-term Support" },
  ];

  return (
    <section id="custom-development" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent mb-6">
            {t("定制开发", "Custom Development")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("企业级", "Enterprise")}
            <span className="gradient-text">{t("Agent定制开发", " Agent Development")}</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            {t(
              "基于核心技术能力，为企业提供定制化AI智能体开发服务",
              "Customized AI agent development services based on core technical capabilities"
            )}
          </p>

          {/* Capabilities - Compact */}
          <div className="flex flex-wrap justify-center gap-4">
            {capabilities.map((cap) => (
              <div
                key={cap.titleZh}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50"
              >
                <cap.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{t(cap.titleZh, cap.titleEn)}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cases Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Navigation Buttons */}
          <div className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {cases.map((caseItem) => (
                <div
                  key={caseItem.id}
                  className="flex-none w-[280px] md:w-[320px]"
                >
                  <div className="h-full rounded-2xl bg-card border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                    {/* Image */}
                    {caseItem.image ? (
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={caseItem.image} 
                          alt={t(caseItem.titleZh, caseItem.titleEn)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${caseItem.gradient} text-white`}>
                          {t(caseItem.titleZh, caseItem.titleEn)}
                        </span>
                      </div>
                    ) : (
                      <div className={`relative h-40 bg-gradient-to-br ${caseItem.gradient} flex items-center justify-center`}>
                        <caseItem.icon className="w-16 h-16 text-white/80" />
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
                          {t(caseItem.titleZh, caseItem.titleEn)}
                        </span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <caseItem.icon className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">{t(caseItem.subtitleZh, caseItem.subtitleEn)}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {t(caseItem.descZh, caseItem.descEn)}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {caseItem.tagsZh.map((tag, i) => (
                          <span 
                            key={tag}
                            className="px-2 py-1 rounded-md text-xs bg-secondary text-secondary-foreground"
                          >
                            {t(tag, caseItem.tagsEn[i])}
                          </span>
                        ))}
                      </div>

                      {/* Link */}
                      {caseItem.link && (
                        <a 
                          href={caseItem.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                          {t("访问产品", "Visit Product")}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Scroll Indicator */}
          <div className="flex justify-center gap-1 mt-6 md:hidden">
            {cases.slice(0, 5).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-border" />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            {t(
              "有定制开发需求？我们的技术团队将为您提供专业咨询",
              "Need custom development? Our team provides professional consultation"
            )}
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              {t("咨询定制服务", "Inquire Custom Services")}
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
