import { BookMarked, ExternalLink, FileText, Video, MessageCircle, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const LearningResources = () => {
  const resources = [
    {
      icon: FileText,
      title: "Official Documentation",
      description: "Comprehensive technical docs covering all aspects of Injective",
      url: "https://docs.injective.network/",
      color: "injective"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Watch step-by-step guides and educational content",
      url: "https://www.youtube.com/c/Injective",
      color: "red"
    },
    {
      icon: MessageCircle,
      title: "Community Discord",
      description: "Join the community and get help from other developers",
      url: "https://discord.gg/injective",
      color: "indigo"
    },
    {
      icon: Github,
      title: "GitHub Repository",
      description: "Explore open-source code and contribute to Injective",
      url: "https://github.com/InjectiveLabs",
      color: "gray"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      injective: "from-injective/20 to-injective-light/20 border-injective/30 text-injective",
      red: "from-red-500/20 to-red-600/20 border-red-500/30 text-red-400",
      indigo: "from-indigo-500/20 to-indigo-600/20 border-indigo-500/30 text-indigo-400",
      gray: "from-gray-500/20 to-gray-600/20 border-gray-500/30 text-gray-400"
    };
    return colors[color] || colors.injective;
  };

  return (
    <section className="py-20 relative bg-gradient-to-b from-transparent via-card/30 to-transparent">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-injective/10 border border-injective/20 mb-6">
            <BookMarked className="w-4 h-4 text-injective" />
            <span className="text-sm font-medium text-injective">Additional Resources</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Continue Your Learning
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore these trusted resources to deepen your understanding of Injective
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            const colorClasses = getColorClasses(resource.color);
            
            return (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-injective/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-injective transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {resource.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-injective opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Visit</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningResources;
