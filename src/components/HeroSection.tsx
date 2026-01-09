import { useRef, useState } from 'react';
import Confetti from './Confetti';

const HeroSection = () => {
  const [confettiTrigger, setConfettiTrigger] = useState(0);
  const commandRef = useRef<HTMLDivElement>(null);

  const handleCommandClick = () => {
    navigator.clipboard.writeText('npm run build-life');
    setConfettiTrigger((prev) => prev + 1);
  };

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="container max-w-3xl">
        <div className="animate-fade-in-up">
          {/* Heading */}
          <h1 className="text-3xl md:text-display font-bold tracking-tight text-foreground mb-6">
            Building calm, reliable
            <br />
            web systems.
            <span className="animate-cursor ml-1 text-dim">_</span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground mb-10 max-w-lg leading-relaxed">
            <span className="text-dim">// </span>
            Fullstack developer focused on Vue, Nuxt, and Laravel.
            <br />
            <span className="text-dim">// </span>
            I write code that reads well and runs quietly.
          </p>

          {/* Command CTA */}
          <div className="inline-block relative">
            <div 
              ref={commandRef}
              onClick={handleCommandClick}
              className="command-block group cursor-pointer"
              title="Click to copy"
            >
              <span className="text-foreground">npm run build-life</span>
              <span className="animate-cursor ml-0.5 text-dim">|</span>
            </div>
          </div>

          {/* Hero loop */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-border/60 bg-muted/30 shadow-lg">
            <img
              className="h-full w-full object-cover"
              src="/coding-lofi.gif"
              alt="Coding lofi loop"
              loading="lazy"
            />
          </div>

          {/* Links */}
          <div className="mt-10 flex gap-6 text-sm text-muted-foreground">
            <a 
              href="https://github.com/gustirafi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-external hover:text-foreground flex items-center gap-1.5"
            >
              <span className="text-dim text-xs">→</span>
              github
            </a>
            <a 
              href="https://www.linkedin.com/in/rafigusti/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-external hover:text-foreground flex items-center gap-1.5"
            >
              <span className="text-dim text-xs">→</span>
              linkedin
            </a>
            <a 
              href="mailto:hello@gustirafi49@gmail.com"
              className="link-external hover:text-foreground flex items-center gap-1.5"
            >
              <span className="text-dim text-xs">@</span>
              email
            </a>
          </div>
        </div>
      </div>
      <Confetti trigger={confettiTrigger} originRef={commandRef} />
    </section>
  );
};

export default HeroSection;
