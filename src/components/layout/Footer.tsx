import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { labelZh: "企业级智能体", labelEn: "Enterprise AI", href: "#capabilities" },
    { labelZh: "解决方案", labelEn: "Solutions", href: "#solutions" },
    { labelZh: "关于我们", labelEn: "About Us", href: "#about" },
    { labelZh: "联系我们", labelEn: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="企数星图" className="w-8 h-8 object-contain" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-foreground leading-tight">
                {t("企数星图", "Q-Atlas AI")}
              </span>
              <span className="text-xs text-muted-foreground">
                {t("Q-Atlas AI", "Enterprise AI Solutions")}
              </span>
            </div>
          </Link>

          {/* Links */}
          <nav className="flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {t(link.labelZh, link.labelEn)}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 {t("企数星图", "Q-Atlas AI")}. {t("保留所有权利", "All rights reserved")}.
          </p>
        </div>
      </div>
    </footer>
  );
};
