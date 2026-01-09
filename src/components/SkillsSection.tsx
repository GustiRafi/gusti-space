const SkillsSection = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container max-w-3xl">
        {/* Section header */}
        <div className="mb-8">
          <h2 className="section-title mb-2">
            /stack
          </h2>
          <p className="text-sm text-muted-foreground pl-5">
            Tools and technologies I work with.
          </p>
        </div>

        <div className="divider-dashed mb-8" />

        {/* Skills blocks */}
        <div className="grid md:grid-cols-3 gap-8 text-sm stagger">
          {/* Frontend */}
          <div className="group">
            <h3 className="text-foreground font-medium mb-3 flex items-center gap-2">
              <span className="text-dim text-xs group-hover:text-muted-foreground transition-colors duration-100">◈</span>
              Frontend:
            </h3>
            <ul className="space-y-1.5 text-muted-foreground pl-4">
              <li className="caret-item">Vue / Nuxt</li>
              <li className="caret-item">React</li>
              <li className="caret-item">TypeScript</li>
              <li className="caret-item">Tailwind CSS</li>
              <li className="caret-item">HTML / CSS</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="group">
            <h3 className="text-foreground font-medium mb-3 flex items-center gap-2">
              <span className="text-dim text-xs group-hover:text-muted-foreground transition-colors duration-100">◈</span>
              Backend:
            </h3>
            <ul className="space-y-1.5 text-muted-foreground pl-4">
              <li className="caret-item">Laravel / PHP</li>
              <li className="caret-item">Node.js</li>
              <li className="caret-item">PostgreSQL</li>
              <li className="caret-item">MySQL</li>
              <li className="caret-item">REST APIs</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="group">
            <h3 className="text-foreground font-medium mb-3 flex items-center gap-2">
              <span className="text-dim text-xs group-hover:text-muted-foreground transition-colors duration-100">◈</span>
              Tools:
            </h3>
            <ul className="space-y-1.5 text-muted-foreground pl-4">
              <li className="caret-item">Git</li>
              {/* <li className="caret-item">Docker</li> */}
              <li className="caret-item">Linux / Ubuntu</li>
              <li className="caret-item">VS Code / Vim</li>
              <li className="caret-item">Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
