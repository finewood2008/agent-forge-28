import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { openChatWidget } from "@/hooks/use-chat-widget";

type NavItem = {
  label: string;
  href: string;
  isPage?: boolean;
};

const navItems: NavItem[] = [
  { label: "企业级智能体", href: "#capabilities" },
  { label: "解决方案", href: "#solutions" },
  { label: "关于我们", href: "#about" },
  { label: "新闻中心", href: "/news", isPage: true },
  { label: "联系我们", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: NavItem) => {
    setIsMobileMenuOpen(false);
    
    // If it's a hash link and we're not on the home page, navigate to home first
    if (!item.isPage && location.pathname !== "/") {
      window.location.href = "/" + item.href;
    }
  };

  const renderNavLink = (item: NavItem, isMobile = false) => {
    const className = isMobile
      ? "text-muted-foreground hover:text-foreground transition-colors py-2"
      : "text-muted-foreground hover:text-foreground transition-colors duration-200";

    if (item.isPage) {
      return (
        <Link
          key={item.href}
          to={item.href}
          className={className}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.label}
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
        {item.label}
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
              企数星图
            </span>
            <span className="text-muted-foreground text-center text-base font-sans font-medium">
              Q-Atlas AI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => renderNavLink(item))}
        </nav>


        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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