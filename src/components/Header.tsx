const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-dashed" style={{ borderColor: 'hsl(var(--border-dashed))' }}>
      <div className="container max-w-3xl py-4">
        <nav aria-label="Main Navigation" className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" aria-label="Gusti Rafi Portfolio Home" className="text-foreground font-semibold hover-opacity flex items-center gap-1.5">
            <span className="text-dim text-xs">~</span>
            gusti.rafi
          </a>

          {/* Navigation */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#projects" className="link-hover hover:text-foreground">
              projects
            </a>
            <a href="#about" className="link-hover hover:text-foreground">
              about
            </a>
            <a href="#contact" className="link-hover hover:text-foreground">
              contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
