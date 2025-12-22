import { GraduationCap, Map, ArrowDown } from "lucide-react";

const LearningPathHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-injective/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-injective/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-injective-light/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-injective/10 border border-injective/20 mb-8 animate-fade-in">
            <GraduationCap className="w-4 h-4 text-injective" />
            <span className="text-sm font-medium text-injective">Structured Learning</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
            <span className="text-foreground">Injective</span>{" "}
            <span className="text-gradient">Learning Path</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Your step-by-step journey to mastering the Injective ecosystem. 
            Each module builds upon the last, guiding you from basics to advanced concepts.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-injective/10 flex items-center justify-center">
                <Map className="w-6 h-6 text-injective" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">4</p>
                <p className="text-sm text-muted-foreground">Learning Paths</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-injective/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-injective" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">12+</p>
                <p className="text-sm text-muted-foreground">Learning Steps</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default LearningPathHero;
