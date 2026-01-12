import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

type NavItem = {
  labelZh: string;
  labelEn: string;
  href: string;
  isPage?: boolean;
};

const navItems: NavItem[] = [
  { labelZh: "企业级智能体", labelEn: "Enterprise AI", href: "#capabilities" },
  { labelZh: "解决方案", labelEn: "Solutions", href: "#solutions" },
  { labelZh: "关于我们", labelEn: "About Us", href: "#about" },
  { labelZh: "新闻中心", labelEn: "News", href: "/news", isPage: true },
  { labelZh: "联系我们", labelEn: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: NavItem) => {
    setIsMobileMenuOpen(false);
    
    if (!item.isPage && location.pathname !== "/") {
      window.location.href = "/" + item.href;
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "zh" ? "en" : "zh");
  };

  const renderNavLink = (item: NavItem, isMobile = false) => {
    const className = isMobile
      ? "text-muted-foreground hover:text-foreground transition-colors py-2"
      : "text-muted-foreground hover:text-foreground transition-colors duration-200";

    const label = language === "zh" ? item.labelZh : item.labelEn;

    if (item.isPage) {
      return (
        <Link
          key={item.href}
          to={item.href}
          className={className}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {label}
        </Link>
      );
    }

    return (
      <a
        key={item.href}
        href={location.pathname === "/" ? item.href : "/" + item.href}
        className={className}
        onClick={() => handleNavClick(item)}
      >
        {label}
      </a>
    );
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="企数星图" className="w-10 h-10 object-contain" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground leading-tight">
              {t("企数星图", "Q-Atlas AI")}
            </span>
            <span className="text-muted-foreground text-center text-base font-sans font-medium">
              {t("Q-Atlas AI", "Enterprise AI Solutions")}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => renderNavLink(item))}
        </nav>

        {/* Language Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-sm text-muted-foreground hover:text-foreground transition-colors"
            title={t("切换到英文", "Switch to Chinese")}
          >
            <Globe className="w-4 h-4" />
            <span className="hidden sm:inline">{language === "zh" ? "EN" : "中"}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass mt-4 mx-4 rounded-xl p-6"
        >
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => renderNavLink(item, true))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};