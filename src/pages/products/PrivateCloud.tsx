import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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
  HardDrive,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Building2,
  Briefcase,
  Scale,
  Stethoscope,
  Package,
  Settings,
  Cloud,
  Lock,
  Users,
  Gauge
} from "lucide-react";

import privateCloudHero from "@/assets/private-cloud-hero.jpg";
import privateCloud48g from "@/assets/private-cloud-48g.jpg";
import privateCloud96g from "@/assets/private-cloud-96g.jpg";
import privateCloudRack from "@/assets/private-cloud-rack.jpg";

export default function PrivateCloud() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
      descZh: "适用于轻量复杂度任务处理：如文本处理、情感分析、对话生成、客服系统、实时翻译、代码生成、智能学习、教育辅导系统、工业产线实时决策等应用场景。",
      descEn: "Suitable for light to medium complexity tasks: text processing, sentiment analysis, dialogue generation, customer service, real-time translation, code generation, and industrial decision-making.",
      specs: [
        { labelZh: "显卡", labelEn: "GPU", valueZh: "液冷NVIDIA 24G×2 多卡并联", valueEn: "Liquid-cooled NVIDIA 24G×2" },
        { labelZh: "CPU", labelEn: "CPU", valueZh: "液冷服务器48核心 2.3GHz", valueEn: "48-core 2.3GHz Liquid-cooled" },
        { labelZh: "内存", labelEn: "RAM", valueZh: "DDR4 ECC 128GB", valueEn: "DDR4 ECC 128GB" },
        { labelZh: "硬盘", labelEn: "Storage", valueZh: "512G M.2 + 3.84T NVMe", valueEn: "512G M.2 + 3.84T NVMe" },
      ],
      performance: [
        { labelZh: "TPS性能", labelEn: "TPS", valueZh: "766.99 Token/s", valueEn: "766.99 Token/s" },
        { labelZh: "首次响应", labelEn: "TTFT", valueZh: "0.793秒", valueEn: "0.793s" },
        { labelZh: "并发用户", labelEn: "Concurrent", valueZh: "85个", valueEn: "85 users" },
      ],
    },
    {
      id: "96g",
      image: privateCloud96g,
      titleZh: "旗舰应用版 (96G)",
      titleEn: "Flagship Edition (96G)",
      subtitleZh: "ZeroStack S1",
      subtitleEn: "ZeroStack S1",
      modelZh: "支持 Qwen3/Deepseek-R1 32B-70B模型",
      modelEn: "Supports Qwen3/Deepseek-R1 32B-70B models",
      descZh: "适用于中等复杂度任务处理：科研计算（如药物研发）、多模态预处理（如医疗影像分析）、长文本生成、金融高频交易分析评估、财税政务、API服务等。",
      descEn: "Suitable for medium complexity tasks: research computing, multimodal processing (medical imaging), long-text generation, financial analysis, government services, API services.",
      specs: [
        { labelZh: "显卡", labelEn: "GPU", valueZh: "液冷NVIDIA 24G×4 多卡并联", valueEn: "Liquid-cooled NVIDIA 24G×4" },
        { labelZh: "CPU", labelEn: "CPU", valueZh: "液冷服务器48核心 2.3GHz", valueEn: "48-core 2.3GHz Liquid-cooled" },
        { labelZh: "内存", labelEn: "RAM", valueZh: "DDR4 ECC 256GB", valueEn: "DDR4 ECC 256GB" },
        { labelZh: "硬盘", labelEn: "Storage", valueZh: "512G M.2 + 3.84T NVMe", valueEn: "512G M.2 + 3.84T NVMe" },
      ],
      performance: [
        { labelZh: "TPS性能", labelEn: "TPS", valueZh: "537.53 Token/s", valueEn: "537.53 Token/s" },
        { labelZh: "首次响应", labelEn: "TTFT", valueZh: "0.140秒", valueEn: "0.140s" },
        { labelZh: "并发用户", labelEn: "Concurrent", valueZh: "490个", valueEn: "490 users" },
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
      descZh: "针对AI推理及计算、互联网、IDC、云计算、企业市场以及电信业务应用等需求，适用于IT核心业务、云计算、虚拟化、高性能计算、分布式存储、大数据处理。",
      descEn: "For AI inference, internet, IDC, cloud computing, enterprise and telecom applications. Suitable for core IT, virtualization, HPC, distributed storage, big data processing.",
      specs: [
        { labelZh: "CPU", labelEn: "CPU", valueZh: "双路Intel至强第4/5代", valueEn: "Dual Intel Xeon 4th/5th Gen" },
        { labelZh: "内存", labelEn: "RAM", valueZh: "最大32条DDR5", valueEn: "Up to 32x DDR5" },
        { labelZh: "GPU", labelEn: "GPU", valueZh: "支持8张450W双宽GPU", valueEn: "Up to 8x 450W GPUs" },
        { labelZh: "硬盘位", labelEn: "Storage", valueZh: "12盘热插拔", valueEn: "12 hot-swap bays" },
      ],
      performance: [],
    },
  ];

  const advantages = [
    {
      icon: Package,
      titleZh: "开箱即用",
      titleEn: "Plug & Play",
      descZh: "通电即开，无需复杂配置，快速赋能业务",
      descEn: "Power on and start, no complex setup required",
    },
    {
      icon: Volume2,
      titleZh: "超静音运行",
      titleEn: "Ultra Quiet",
      descZh: "运行噪音约54分贝，可放置办公室使用",
      descEn: "~54dB noise level, suitable for office use",
    },
    {
      icon: Building2,
      titleZh: "无需机房",
      titleEn: "No Server Room",
      descZh: "液冷设计散热效率高，无需专业机房环境",
      descEn: "Liquid cooling design, no server room needed",
    },
    {
      icon: Settings,
      titleZh: "技术门槛归零",
      titleEn: "Zero Tech Barrier",
      descZh: "一键安装AI应用，无需AI技术团队支持",
      descEn: "One-click AI app install, no AI team needed",
    },
    {
      icon: Lock,
      titleZh: "私有化安全",
      titleEn: "Private & Secure",
      descZh: "数据本地化存储，核心数据不出域",
      descEn: "Local data storage, data never leaves your premises",
    },
    {
      icon: Gauge,
      titleZh: "动态算力调度",
      titleEn: "Dynamic Scheduling",
      descZh: "95%硬件利用率，支持更多并发任务",
      descEn: "95% hardware utilization for more concurrent tasks",
    },
  ];

  const liquidCoolingBenefits = [
    {
      icon: Thermometer,
      titleZh: "散热效率",
      titleEn: "Cooling Efficiency",
      valueZh: "是风冷的3000倍",
      valueEn: "3000x Air Cooling",
    },
    {
      icon: Cpu,
      titleZh: "GPU温度",
      titleEn: "GPU Temperature",
      valueZh: "满载70°C左右",
      valueEn: "~70°C at Full Load",
    },
    {
      icon: Volume2,
      titleZh: "运行噪音",
      titleEn: "Noise Level",
      valueZh: "约54分贝",
      valueEn: "~54dB",
    },
    {
      icon: Zap,
      titleZh: "节能效果",
      titleEn: "Energy Saving",
      valueZh: "节省30%-50%电量",
      valueEn: "30%-50% Less Power",
    },
  ];

  const aiApps = [
    { titleZh: "企业私有知识库RAG", titleEn: "Enterprise Knowledge Base" },
    { titleZh: "企业AI客服", titleEn: "AI Customer Service" },
    { titleZh: "法务合同审阅", titleEn: "Contract Review" },
    { titleZh: "AI数字人员工", titleEn: "AI Digital Employee" },
    { titleZh: "AI会议纪要", titleEn: "AI Meeting Minutes" },
    { titleZh: "内容创作助手", titleEn: "Content Creation" },
    { titleZh: "人事HR面试官", titleEn: "HR Interview Assistant" },
    { titleZh: "拓客助手", titleEn: "Customer Acquisition" },
  ];

  const comparison = [
    { 
      aspectZh: "数据安全", aspectEn: "Data Security",
      localZh: "数据完全本地处理，安全性高", localEn: "Fully local processing, high security",
      cloudZh: "数据需上传至第三方，存在隐私风险", cloudEn: "Data uploaded to third party, privacy risk"
    },
    { 
      aspectZh: "初始成本", aspectEn: "Initial Cost",
      localZh: "一次性硬件投入", localEn: "One-time hardware investment",
      cloudZh: "初期成本低，按需付费", cloudEn: "Low initial cost, pay-as-you-go"
    },
    { 
      aspectZh: "长期成本", aspectEn: "Long-term Cost",
      localZh: "后续调用成本低", localEn: "Low ongoing call costs",
      cloudZh: "高频调用费用可能激增", cloudEn: "High-frequency costs may surge"
    },
    { 
      aspectZh: "技术门槛", aspectEn: "Tech Barrier",
      localZh: "一键部署，无需技术团队", localEn: "One-click deploy, no tech team needed",
      cloudZh: "仅需API集成", cloudEn: "Only API integration needed"
    },
    { 
      aspectZh: "定制化", aspectEn: "Customization",
      localZh: "可针对行业需求深度定制", localEn: "Deep customization for industry needs",
      cloudZh: "功能受限，无法深度定制", cloudEn: "Limited, no deep customization"
    },
  ];

  const targetCustomers = [
    { icon: Briefcase, titleZh: "金融机构", titleEn: "Financial Institutions", descZh: "数据高度敏感，合规要求严格", descEn: "Highly sensitive data, strict compliance" },
    { icon: Stethoscope, titleZh: "医疗机构", titleEn: "Healthcare", descZh: "患者隐私保护，HIPAA合规", descEn: "Patient privacy, HIPAA compliance" },
    { icon: Scale, titleZh: "法律机构", titleEn: "Legal Firms", descZh: "客户机密保护，专业性要求", descEn: "Client confidentiality, professional needs" },
    { icon: Building2, titleZh: "政府机关", titleEn: "Government", descZh: "数据主权要求，安全等保", descEn: "Data sovereignty, security requirements" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
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

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                {t("核心产品", "Core Product")}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t("私有云算力平台", "Private Cloud Platform")}
              </h1>
              <p className="text-xl text-primary mb-4">
                {t("企业AI应用液冷一体机", "Enterprise AI Liquid-cooled Server")}
              </p>
              <p className="text-lg text-muted-foreground/80 mb-8">
                {t(
                  "为企业提供专用的私有云算力服务器，所有数据在企业内部完成处理，确保敏感信息不外泄，满足合规性要求。开箱即用，无需机房，一键部署AI应用。",
                  "Dedicated private cloud servers for enterprises. All data processed internally, ensuring security and compliance. Plug & play, no server room needed."
                )}
              </p>
              <div className="flex flex-wrap gap-3">
                {["开箱即用", "静音运行", "无需机房", "一键部署"].map((tag, i) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 rounded-full text-sm bg-secondary text-secondary-foreground"
                  >
                    {t(tag, ["Plug & Play", "Silent", "No Server Room", "One-click Deploy"][i])}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={privateCloudHero} 
                  alt={t("私有云算力平台", "Private Cloud Platform")}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Series */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("产品系列", "Product Series")}
            </h2>
            <p className="text-muted-foreground">
              {t("从工作站到机架服务器，满足不同规模需求", "From workstation to rack server, for different scales")}
            </p>
          </motion.div>

          <div className="space-y-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="gradient-border rounded-3xl overflow-hidden bg-card"
              >
                <div className="p-8 md:p-12">
                  <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
                    {/* Image */}
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="relative rounded-2xl overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={t(product.titleZh, product.titleEn)}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <span className="text-sm text-primary font-medium">{product.subtitleZh}</span>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {t(product.titleZh, product.titleEn)}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {t(product.modelZh, product.modelEn)}
                      </p>
                      <p className="text-muted-foreground mb-6">
                        {t(product.descZh, product.descEn)}
                      </p>

                      {/* Specs */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {product.specs.map((spec) => (
                          <div key={spec.labelZh} className="p-3 rounded-xl bg-secondary/50">
                            <p className="text-xs text-muted-foreground mb-1">{t(spec.labelZh, spec.labelEn)}</p>
                            <p className="text-sm font-medium">{t(spec.valueZh, spec.valueEn)}</p>
                          </div>
                        ))}
                      </div>

                      {/* Performance */}
                      {product.performance.length > 0 && (
                        <div className="flex flex-wrap gap-4">
                          {product.performance.map((perf) => (
                            <div key={perf.labelZh} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                              <span className="text-sm">
                                <span className="text-muted-foreground">{t(perf.labelZh, perf.labelEn)}：</span>
                                <span className="font-medium">{t(perf.valueZh, perf.valueEn)}</span>
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("核心优势", "Core Advantages")}
            </h2>
            <p className="text-muted-foreground">
              {t("中小企业AI数字化转型首选", "The first choice for SME AI transformation")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, index) => (
              <motion.div
                key={adv.titleZh}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <adv.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t(adv.titleZh, adv.titleEn)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(adv.descZh, adv.descEn)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Liquid Cooling Benefits */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("液冷技术优势", "Liquid Cooling Advantages")}
            </h2>
            <p className="text-muted-foreground">
              {t("热量带走更多，温度传递更快，噪音品质更好，耗电节能更省", "Better heat dissipation, lower noise, energy saving")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {liquidCoolingBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.titleZh}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-card border border-border/50"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{t(benefit.titleZh, benefit.titleEn)}</p>
                <p className="text-xl font-bold">{t(benefit.valueZh, benefit.valueEn)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI App Ecosystem */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("AI应用生态平台", "AI Application Ecosystem")}
            </h2>
            <p className="text-muted-foreground">
              {t("内置数百款AI应用商店，一键安装本地化AI应用", "Built-in AI app store with one-click installation")}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aiApps.map((app, index) => (
              <motion.div
                key={app.titleZh}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center"
              >
                <p className="font-medium">{t(app.titleZh, app.titleEn)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("本地部署 vs 云服务", "Local vs Cloud Deployment")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-left font-medium">{t("对比维度", "Comparison")}</th>
                  <th className="py-4 px-6 text-left font-medium bg-primary/10 rounded-tl-xl">
                    <div className="flex items-center gap-2">
                      <Server className="w-5 h-5 text-primary" />
                      {t("本地部署", "Local Deployment")}
                    </div>
                  </th>
                  <th className="py-4 px-6 text-left font-medium">{t("云API服务", "Cloud API")}</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={row.aspectZh} className="border-b border-border/50">
                    <td className="py-4 px-6 font-medium">{t(row.aspectZh, row.aspectEn)}</td>
                    <td className="py-4 px-6 bg-primary/5">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{t(row.localZh, row.localEn)}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-muted-foreground">{t(row.cloudZh, row.cloudEn)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("适用客户", "Target Customers")}
            </h2>
            <p className="text-muted-foreground">
              {t("数据敏感行业的最佳选择", "Best choice for data-sensitive industries")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetCustomers.map((customer, index) => (
              <motion.div
                key={customer.titleZh}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
              >
                <customer.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  {t(customer.titleZh, customer.titleEn)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(customer.descZh, customer.descEn)}
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
              {t("开启企业AI私有化之路", "Start Your Enterprise AI Journey")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t(
                "数据安全、成本可控、开箱即用，让AI真正服务于企业",
                "Data security, cost control, plug & play - AI that truly serves enterprises"
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
