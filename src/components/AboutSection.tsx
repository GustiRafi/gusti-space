const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container max-w-3xl">
        {/* Section header */}
        <div className="mb-8">
          <h2 className="section-title mb-2">
            /about
          </h2>
          <p className="text-sm text-muted-foreground pl-5 flex items-center gap-1.5">
            <span className="text-dim text-xs">◊</span>
            README.md
          </p>
        </div>

        <div className="divider-dashed mb-8" />

        {/* Content */}
        <div className="space-y-6 text-sm leading-relaxed animate-fade-in-up">
          <p className="text-foreground">
            <span className="text-dim">» </span>
            I'm Gusti Rafi — a fullstack developer based in Indonesia who likes building 
            things that work well and don't break at 3am.
          </p>

          <p className="text-muted-foreground pl-4">
            Most of my time goes into Vue/Nuxt on the frontend and Laravel on the backend. 
            I care about readable code, quiet systems, and interfaces that don't fight the user.
          </p>

          <p className="text-muted-foreground pl-4">
            When I'm not writing code, I'm probably reading someone's dotfiles, 
            exploring new tools, or debugging something that definitely worked yesterday.
          </p>

          <div className="pt-4 pl-4">
            <p className="text-dim text-xs flex items-center gap-1.5">
              <span className="animate-cursor">_</span>
              Currently available for interesting projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
