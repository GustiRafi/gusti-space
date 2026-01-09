const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-dashed" style={{ borderColor: 'hsl(var(--border-dashed))' }}>
      <div className="container max-w-3xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-dim">
          <p className="flex items-center gap-1.5">
            <span className="text-[10px]">©</span>
            {currentYear} gusti.rafi
          </p>
          <p className="flex items-center gap-1.5">
            <span className="text-[10px]">⌘</span>
            Built with patience and caffeine.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
