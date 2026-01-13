import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Server,
  Shield,
  Zap,
  Volume2,
  Thermometer,
  Cpu,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Building2,
  Briefcase,
  Scale,
  Stethoscope,
  Package,
  Settings,
  Lock,
  Gauge
} from "lucide-react";

import privateCloudHero from "@/assets/private-cloud-hero.jpg";
import privateCloud48g from "@/assets/private-cloud-48g.jpg";
import privateCloudRack from "@/assets/private-cloud-rack.jpg";

export default function PrivateCloud() {
  const ref = useRef(null);
  const { t } = useLanguage();

  const products = [
    {
      id: "48g",
      image: privateCloud48g,
      titleZh: "轻量应用版 (48G)",
      titleEn: "Lightweight Edition (48G)",
      subtitleZh: "ZeroStack T1",
      subtitleEn: "ZeroStack T1",
      modelZh: "支持 Qwen3/Deepseek-R1 14B-32B模型",
      modelEn: "Supports Qwen3/Deepseek-R1 14B-32B models",
      descZh: "适用于轻量复杂度任务：文本处理、对话生成、客服系统、实时翻译、代码生成等。",
      descEn: "For light complexity tasks: text processing, dialogue, customer service, translation, code generation.",
      specs: [
        { labelZh: "显卡", labelEn: "GPU", valueZh: "液冷NVIDIA 24G×2", valueEn: "Liquid-cooled NVIDIA 24G×2" },
        { labelZh: "CPU", labelEn: "CPU", valueZh: "48核心 2.3GHz", valueEn: "48-core 2.3GHz" },
        { labelZh: "内存", labelEn: "RAM", valueZh: "DDR4 ECC 128GB", valueEn: "DDR4 ECC 128GB" },
        { labelZh: "硬盘", labelEn: "Storage", valueZh: "512G + 3.84T NVMe", valueEn: "512G + 3.84T NVMe" },
      ],
      performance: [
        { labelZh: "TPS", labelEn: "TPS", valueZh: "766.99 Token/s", valueEn: "766.99 Token/s" },
        { labelZh: "TTFT", labelEn: "TTFT", valueZh: "0.793秒", valueEn: "0.793s" },
        { labelZh: "并发", labelEn: "Concurrent", valueZh: "85用户", valueEn: "85 users" },
      ],
    },
    {
      id: "96g",
      image: privateCloud48g, // T1和S1外观一样
      titleZh: "旗舰应用版 (96G)",
      titleEn: "Flagship Edition (96G)",
      subtitleZh: "ZeroStack S1",
      subtitleEn: "ZeroStack S1",
      modelZh: "支持 Qwen3/Deepseek-R1 32B-70B模型",
      modelEn: "Supports Qwen3/Deepseek-R1 32B-70B models",
      descZh: "适用于中等复杂度任务：科研计算、多模态处理、长文本生成、金融分析、API服务等。",
      descEn: "For medium complexity: research computing, multimodal processing, long-text generation, financial analysis.",
      specs: [
        { labelZh: "显卡", labelEn: "GPU", valueZh: "液冷NVIDIA 24G×4", valueEn: "Liquid-cooled NVIDIA 24G×4" },
        { labelZh: "CPU", labelEn: "CPU", valueZh: "48核心 2.3GHz", valueEn: "48-core 2.3GHz" },
        { labelZh: "内存", labelEn: "RAM", valueZh: "DDR4 ECC 256GB", valueEn: "DDR4 ECC 256GB" },
        { labelZh: "硬盘", labelEn: "Storage", valueZh: "512G + 3.84T NVMe", valueEn: "512G + 3.84T NVMe" },
      ],
      performance: [
        { labelZh: "TPS", labelEn: "TPS", valueZh: "537.53 Token/s", valueEn: "537.53 Token/s" },
        { labelZh: "TTFT", labelEn: "TTFT", valueZh: "0.140秒", valueEn: "0.140s" },
        { labelZh: "并发", labelEn: "Concurrent", valueZh: "490用户", valueEn: "490 users" },
      ],
    },
    {
      id: "rack",
      image: privateCloudRack,
      titleZh: "8GPU机架式服务器",
      titleEn: "8GPU Rack Server",
      subtitleZh: "R521G3A",
      subtitleEn: "R521G3A",
      modelZh: "4U双路Intel至强处理器 + 8GPU",
      modelEn: "4U Dual Intel Xeon + 8GPU",
      descZh: "适用于AI推理、云计算、虚拟化、高性能计算、分布式存储、大数据处理。",
      descEn: "For AI inference, cloud computing, virtualization, HPC, distributed storage, big data.",
      specs: [
        { labelZh: "CPU", labelEn: "CPU", valueZh: "双路Intel至强4/5代", valueEn: "Dual Intel Xeon 4th/5th" },
        { labelZh: "内存", labelEn: "RAM", valueZh: "最大32条DDR5", valueEn: "Up to 32x DDR5" },
        { labelZh: "GPU", labelEn: "GPU", valueZh: "8张450W双宽GPU", valueEn: "8x 450W GPUs" },
        { labelZh: "硬盘位", labelEn: "Storage", valueZh: "12盘热插拔", valueEn: "12 hot-swap bays" },
      ],
      performance: [],
    },
  ];

  const advantages = [
    { icon: Package, titleZh: "开箱即用", titleEn: "Plug & Play", descZh: "通电即开，无需复杂配置", descEn: "Power on and start, no setup" },
    { icon: Volume2, titleZh: "超静音", titleEn: "Ultra Quiet", descZh: "约54分贝，可放办公室", descEn: "~54dB, office-friendly" },
    { icon: Building2, titleZh: "无需机房", titleEn: "No Server Room", descZh: "液冷设计，无需专业机房", descEn: "Liquid cooling, no server room" },
    { icon: Settings, titleZh: "零门槛", titleEn: "Zero Barrier", descZh: "一键安装AI应用", descEn: "One-click AI app install" },
    { icon: Lock, titleZh: "私有安全", titleEn: "Private & Secure", descZh: "数据本地化存储", descEn: "Local data storage" },
    { icon: Gauge, titleZh: "高利用率", titleEn: "High Utilization", descZh: "95%硬件利用率", descEn: "95% hardware utilization" },
  ];

  const liquidCooling = [
    { icon: Thermometer, valueZh: "3000倍", valueEn: "3000x", labelZh: "散热效率", labelEn: "Cooling" },
    { icon: Cpu, valueZh: "70°C", valueEn: "70°C", labelZh: "满载温度", labelEn: "Max Temp" },
    { icon: Volume2, valueZh: "54dB", valueEn: "54dB", labelZh: "运行噪音", labelEn: "Noise" },
    { icon: Zap, valueZh: "30-50%", valueEn: "30-50%", labelZh: "节能", labelEn: "Energy Save" },
  ];

  const aiApps = [
    { zh: "企业知识库RAG", en: "Enterprise RAG" },
    { zh: "AI客服", en: "AI Customer Service" },
    { zh: "法务合同审阅", en: "Contract Review" },
    { zh: "AI数字人", en: "AI Digital Human" },
    { zh: "会议纪要", en: "Meeting Minutes" },
    { zh: "内容创作", en: "Content Creation" },
    { zh: "HR面试官", en: "HR Interview" },
    { zh: "拓客助手", en: "Sales Assistant" },
  ];

  const comparison = [
    { aspect: { zh: "数据安全", en: "Security" }, local: { zh: "完全本地，安全性高", en: "Fully local, high security" }, cloud: { zh: "存在隐私风险", en: "Privacy risks" } },
    { aspect: { zh: "初始成本", en: "Initial Cost" }, local: { zh: "一次性投入", en: "One-time investment" }, cloud: { zh: "按需付费", en: "Pay-as-you-go" } },
    { aspect: { zh: "长期成本", en: "Long-term Cost" }, local: { zh: "调用成本低", en: "Low call costs" }, cloud: { zh: "费用可能激增", en: "Costs may surge" } },
    { aspect: { zh: "定制化", en: "Customization" }, local: { zh: "深度定制", en: "Deep customization" }, cloud: { zh: "功能受限", en: "Limited features" } },
  ];

  const customers = [
    { icon: Briefcase, zh: "金融机构", en: "Finance", descZh: "数据敏感，合规严格", descEn: "Sensitive data, strict compliance" },
    { icon: Stethoscope, zh: "医疗机构", en: "Healthcare", descZh: "患者隐私保护", descEn: "Patient privacy protection" },
    { icon: Scale, zh: "法律机构", en: "Legal", descZh: "客户机密保护", descEn: "Client confidentiality" },
    { icon: Building2, zh: "政府机关", en: "Government", descZh: "数据主权要求", descEn: "Data sovereignty" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Compact */}
      <section className="pt-20 md:pt-24 pb-8 md:pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4 md:mb-6">
            <Link to="/#core-products" className="inline-flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
              {t("返回核心产品", "Back to Products")}
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-2.5 py-1 rounded-full text-[10px] md:text-xs font-medium bg-primary/10 text-primary mb-3 md:mb-4">
                {t("核心产品", "Core Product")}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3">
                {t("企业私有AI服务器", "Private AI Server")}
              </h1>
              <p className="text-base md:text-lg text-primary mb-2 md:mb-3">
                {t("企业AI应用液冷一体机", "Enterprise AI Liquid-cooled Server")}
              </p>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                {t(
                  "专用私有云算力服务器，数据本地处理，确保安全合规。开箱即用，无需机房，一键部署AI应用。",
                  "Dedicated private cloud servers. Local data processing for security and compliance. Plug & play, no server room needed."
                )}
              </p>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {["开箱即用", "静音运行", "无需机房", "一键部署"].map((tag, i) => (
                  <span key={tag} className="px-2 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs bg-secondary text-secondary-foreground">
                    {t(tag, ["Plug & Play", "Silent", "No Server Room", "One-click"][i])}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <div className="relative rounded-lg md:rounded-xl overflow-hidden shadow-lg md:shadow-xl">
                <img 
                  src={privateCloudHero} 
                  alt={t("私有云算力平台", "Private Cloud Platform")}
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Series - Compact Cards */}
      <section className="py-8 md:py-12 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5 md:mb-2">{t("产品系列", "Product Series")}</h2>
            <p className="text-xs md:text-sm text-muted-foreground">{t("从工作站到机架服务器，满足不同规模", "From workstation to rack server")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl md:rounded-2xl bg-card border border-border/50 overflow-hidden hover:border-primary/30 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={t(product.titleZh, product.titleEn)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <span className="text-[10px] md:text-xs text-primary font-medium">{product.subtitleZh}</span>
                  <h3 className="text-base md:text-lg font-bold mb-0.5 md:mb-1">{t(product.titleZh, product.titleEn)}</h3>
                  <p className="text-[10px] md:text-xs text-muted-foreground mb-2 md:mb-3 line-clamp-1">{t(product.modelZh, product.modelEn)}</p>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-2">{t(product.descZh, product.descEn)}</p>

                  <div className="grid grid-cols-2 gap-1.5 md:gap-2 mb-3 md:mb-4">
                    {product.specs.map((spec) => (
                      <div key={spec.labelZh} className="p-1.5 md:p-2 rounded-md md:rounded-lg bg-secondary/50 text-center">
                        <p className="text-[8px] md:text-[10px] text-muted-foreground">{t(spec.labelZh, spec.labelEn)}</p>
                        <p className="text-[10px] md:text-xs font-medium">{t(spec.valueZh, spec.valueEn)}</p>
                      </div>
                    ))}
                  </div>

                  {product.performance.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 md:gap-2 pt-2 md:pt-3 border-t border-border/50">
                      {product.performance.map((perf) => (
                        <span key={perf.labelZh} className="text-[10px] md:text-xs">
                          <span className="text-muted-foreground">{t(perf.labelZh, perf.labelEn)}: </span>
                          <span className="font-medium text-primary">{t(perf.valueZh, perf.valueEn)}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Grid - Compact */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-5 md:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5 md:mb-2">{t("核心优势", "Core Advantages")}</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
            {advantages.map((adv, index) => (
              <motion.div
                key={adv.titleZh}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-2 md:p-4 rounded-lg md:rounded-xl bg-card border border-border/50 text-center"
              >
                <div className="w-7 h-7 md:w-10 md:h-10 rounded-md md:rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-1.5 md:mb-2">
                  <adv.icon className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary" />
                </div>
                <h3 className="text-[10px] md:text-sm font-semibold mb-0.5 md:mb-1">{t(adv.titleZh, adv.titleEn)}</h3>
                <p className="text-[8px] md:text-xs text-muted-foreground hidden md:block">{t(adv.descZh, adv.descEn)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Liquid Cooling Stats */}
      <section className="py-6 md:py-10 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-4 gap-4 md:flex md:flex-wrap md:justify-center md:gap-8 lg:gap-16">
            {liquidCooling.map((item) => (
              <div key={item.labelZh} className="text-center">
                <item.icon className="w-4 h-4 md:w-6 md:h-6 text-primary mx-auto mb-1 md:mb-2" />
                <p className="text-base md:text-2xl font-bold">{t(item.valueZh, item.valueEn)}</p>
                <p className="text-[8px] md:text-xs text-muted-foreground">{t(item.labelZh, item.labelEn)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Apps */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5 md:mb-2">{t("AI应用生态", "AI App Ecosystem")}</h2>
            <p className="text-xs md:text-sm text-muted-foreground">{t("内置AI应用商店，一键安装", "Built-in AI app store")}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {aiApps.map((app) => (
              <div key={app.zh} className="p-2 md:p-3 rounded-md md:rounded-lg bg-primary/5 border border-primary/10 text-center text-xs md:text-sm font-medium">
                {t(app.zh, app.en)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-8 md:py-12 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{t("本地部署 vs 云服务", "Local vs Cloud")}</h2>
          </div>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[400px] text-xs md:text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 md:py-3 px-2 md:px-4 text-left">{t("对比维度", "Comparison")}</th>
                  <th className="py-2 md:py-3 px-2 md:px-4 text-left bg-primary/10">
                    <div className="flex items-center gap-1 md:gap-2">
                      <Server className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                      {t("本地部署", "Local")}
                    </div>
                  </th>
                  <th className="py-2 md:py-3 px-2 md:px-4 text-left">{t("云服务", "Cloud")}</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.aspect.zh} className="border-b border-border/50">
                    <td className="py-2 md:py-3 px-2 md:px-4 font-medium">{t(row.aspect.zh, row.aspect.en)}</td>
                    <td className="py-2 md:py-3 px-2 md:px-4 bg-primary/5">
                      <div className="flex items-center gap-1 md:gap-2">
                        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-primary shrink-0" />
                        <span className="text-[10px] md:text-sm">{t(row.local.zh, row.local.en)}</span>
                      </div>
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-4 text-muted-foreground text-[10px] md:text-sm">{t(row.cloud.zh, row.cloud.en)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5 md:mb-2">{t("适用客户", "Target Customers")}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {customers.map((c, index) => (
              <motion.div
                key={c.zh}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-3 md:p-4 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10"
              >
                <c.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mb-1.5 md:mb-2" />
                <h3 className="text-xs md:text-sm font-semibold mb-0.5 md:mb-1">{t(c.zh, c.en)}</h3>
                <p className="text-[10px] md:text-xs text-muted-foreground line-clamp-2">{t(c.descZh, c.descEn)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4">{t("开启企业AI私有化之路", "Start Your AI Journey")}</h2>
            <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">{t("数据安全、成本可控、开箱即用", "Secure, cost-effective, plug & play")}</p>
            <Button variant="hero" size="sm" className="md:text-sm" asChild>
              <Link to="/#contact">
                {t("立即咨询", "Contact Us")}
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
