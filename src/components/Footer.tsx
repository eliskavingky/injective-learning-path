const Footer = () => {
  return (
    <footer className="relative py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-bold text-gradient">
              Injective Fundamentals
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              Your gateway to understanding Injective
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a 
              href="https://injective.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Official Website
            </a>
            <a 
              href="https://docs.injective.network" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Documentation
            </a>
            <a 
              href="https://hub.injective.network" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Hub
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-xs">
            Educational resource for learning about Injective Protocol.
            <br className="md:hidden" />
            <span className="hidden md:inline"> · </span>
            Not affiliated with Injective Labs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
