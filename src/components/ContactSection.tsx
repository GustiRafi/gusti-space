const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container max-w-3xl">
        {/* Section header */}
        <div className="mb-8">
          <h2 className="section-title mb-2">
            /contact
          </h2>
          <p className="text-sm text-muted-foreground pl-5">
            Let's talk.
          </p>
        </div>

        <div className="divider-dashed mb-8" />

        {/* Content */}
        <div className="text-sm space-y-4 animate-fade-in-up">
          <p className="text-muted-foreground">
            <span className="text-dim">// </span>
            Got a project in mind? Want to collaborate on something?
            <br />
            <span className="text-dim">// </span>
            Feel free to reach out.
          </p>

          <div className="pt-2 space-y-2.5 pl-4">
            <p className="flex items-center gap-2">
              <span className="text-dim text-xs">@</span>
              <span className="text-dim">email:</span>
              <a 
                href="mailto:hello@gustirafi.dev" 
                className="text-foreground link-hover"
              >
                gustirafi49@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-dim text-xs">→</span>
              <span className="text-dim">github:</span>
              <a 
                href="https://github.com/gustirafi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground link-external flex items-center gap-1"
              >
                @gustirafi
                <span className="text-dim text-[10px]">↗</span>
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-dim text-xs">→</span>
              <span className="text-dim">linkedin:</span>
              <a 
                href="https://www.linkedin.com/in/rafigusti/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground link-external flex items-center gap-1"
              >
                /in/rafigusti
                <span className="text-dim text-[10px]">↗</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
