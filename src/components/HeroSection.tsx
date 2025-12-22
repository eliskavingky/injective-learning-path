import { Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-glow opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow animation-delay-200" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-up opacity-0">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Built for DeFi</span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-up opacity-0 animation-delay-100">
          <span className="text-foreground">Injective</span>
          <br />
          <span className="text-gradient">Fundamentals</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up opacity-0 animation-delay-200">
          Discover the ultra-fast, interoperable Layer-1 blockchain purpose-built for finance. 
          Injective enables next-generation DeFi applications with unprecedented speed and low gas fees.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 max-w-md mx-auto animate-fade-up opacity-0 animation-delay-300">
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl font-bold text-gradient">0.8s</p>
            <p className="text-sm text-muted-foreground mt-1">Block Time</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl font-bold text-gradient">10K+</p>
            <p className="text-sm text-muted-foreground mt-1">TPS</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
