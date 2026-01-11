export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">企</span>
            </div>
            <span className="text-lg font-semibold text-foreground">
              企数星图
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#capabilities" className="hover:text-foreground transition-colors">核心能力</a>
            <a href="#solutions" className="hover:text-foreground transition-colors">解决方案</a>
            <a href="#about" className="hover:text-foreground transition-colors">关于我们</a>
            <a href="#contact" className="hover:text-foreground transition-colors">联系我们</a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 企数星图. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
