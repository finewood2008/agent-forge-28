import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

type NavItem = {
  labelZh: string;
  labelEn: string;
  href: string;
  isPage?: boolean;
  hasDropdown?: boolean;
  dropdownItems?: { labelZh: string; labelEn: string; href: string }[];
};

const navItems: NavItem[] = [
  { 
    labelZh: "核心产品", 
    labelEn: "Core Products", 
    href: "#core-products",
    hasDropdown: true,
    dropdownItems: [
      { labelZh: "智能录音设备", labelEn: "Smart Recorder", href: "/products/smart-recorder" },
      { labelZh: "会议机器人", labelEn: "Meeting Robot", href: "/products/meeting-robot" },
      { labelZh: "私有云算力平台", labelEn: "Private Cloud", href: "/products/private-cloud" },
    ]
  },
  { labelZh: "定制开发", labelEn: "Custom Development", href: "#custom-development" },
  { labelZh: "关于我们", labelEn: "About Us", href: "#about" },
  { labelZh: "新闻中心", labelEn: "News", href: "/news", isPage: true },
  { labelZh: "联系我们", labelEn: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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

    // Desktop with dropdown
    if (item.hasDropdown && !isMobile) {
      return (
        <div 
          key={item.href}
          className="relative"
          onMouseEnter={() => setActiveDropdown(item.href)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button className={`${className} flex items-center gap-1`}>
            {label}
            <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.href ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {activeDropdown === item.href && item.dropdownItems && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-48 rounded-xl bg-card border border-border shadow-xl z-50 overflow-hidden"
              >
                {item.dropdownItems.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.href}
                    to={dropdownItem.href}
                    className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    {language === "zh" ? dropdownItem.labelZh : dropdownItem.labelEn}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    // Mobile with dropdown
    if (item.hasDropdown && isMobile) {
      return (
        <div key={item.href} className="space-y-2">
          <span className={className}>{label}</span>
          <div className="pl-4 space-y-2">
            {item.dropdownItems?.map((dropdownItem) => (
              <Link
                key={dropdownItem.href}
                to={dropdownItem.href}
                className="block text-sm text-muted-foreground hover:text-foreground py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {language === "zh" ? dropdownItem.labelZh : dropdownItem.labelEn}
              </Link>
            ))}
          </div>
        </div>
      );
    }

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
