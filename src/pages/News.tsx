import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AIChatWidget } from "@/components/AIChatWidget";
import { ArrowLeft, ExternalLink, Newspaper, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    title: "珠海AI发展再提速，8款已备案大模型展现鲜明产业特色",
    source: "南方都市报",
    date: "2026年1月6日",
    location: "珠海",
    summary:
      "珠海市积极推动人工智能产业发展，目前已有8款大模型完成国家备案。企数星图作为珠海本土AI企业，凭借企业级智能体开发能力，展现出鲜明的产业特色和技术优势。",
    link: "https://m.mp.oeeee.com/a/BAAFRD0000202601061505485.html?layer=3&share=chat&isndappinstalled=0",
    highlight: true,
  },
  {
    id: 2,
    title: "粤港澳大湾区生成式人工智能安全发展联合实验室珠西中心揭牌",
    source: "南方都市报",
    date: "2026年1月6日",
    location: "珠海",
    summary:
      "粤港澳大湾区生成式人工智能安全发展联合实验室珠西中心正式揭牌成立，将推动区域AI安全技术研究与产业应用。企数星图积极参与大湾区AI生态建设，助力企业级AI安全发展。",
    link: "https://m.mp.oeeee.com/a/BAAFRD0000202601061505505.html?layer=4&share=chat&isndappinstalled=0",
    highlight: true,
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
          
          <div className="container relative z-10">
            <Link to="/">
              <Button variant="ghost" className="mb-6 gap-2">
                <ArrowLeft className="w-4 h-4" />
                返回首页
              </Button>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-accent mb-4">
                <Newspaper className="w-4 h-4" />
                媒体报道
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                新闻中心
              </h1>
              <p className="text-xl text-muted-foreground">
                了解企数星图的最新动态和媒体报道
              </p>
            </motion.div>
          </div>
        </section>

        {/* News List */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              {newsItems.map((news, index) => (
                <motion.a
                  key={news.id}
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="block group"
                >
                  <article
                    className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                      news.highlight
                        ? "bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 hover:border-primary/40"
                        : "glass border-border/50 hover:border-border"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {news.title}
                        </h2>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <Newspaper className="w-3.5 h-3.5" />
                            {news.source}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {news.date}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {news.location}
                          </span>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {news.summary}
                    </p>
                    {news.highlight && (
                      <div className="mt-4 inline-flex items-center gap-2 text-sm text-primary">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        最新报道
                      </div>
                    )}
                  </article>
                </motion.a>
              ))}
            </div>

            {/* More News Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground">
                更多新闻报道持续更新中...
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
};

export default News;
