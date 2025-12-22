import { Layers, ExternalLink, TrendingUp, Palette, Wrench, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const EcosystemPath = () => {
  const categories = [
    {
      icon: TrendingUp,
      title: "DeFi Applications",
      description: "Explore decentralized exchanges, lending protocols, and yield farming opportunities built on Injective.",
      color: "blue",
      steps: [
        {
          name: "Helix Exchange",
          info: "The premier decentralized exchange on Injective for spot and derivatives trading.",
          url: "https://docs.helixapp.com/"
        },
        {
          name: "Explore DeFi Ecosystem",
          info: "Discover all DeFi protocols building on Injective.",
          url: "https://docs.injective.network/defi/"
        }
      ]
    },
    {
      icon: Palette,
      title: "NFTs & Gaming",
      description: "Discover the growing NFT and gaming ecosystem on Injective, from marketplaces to play-to-earn games.",
      color: "purple",
      steps: [
        {
          name: "Talis NFT Marketplace",
          info: "The leading NFT marketplace on Injective blockchain.",
          url: "https://talis.art/"
        },
        {
          name: "Browse NFT Collections",
          info: "Explore trending NFT collections and artists.",
          url: "https://injective.talis.art/"
        }
      ]
    },
    {
      icon: Wrench,
      title: "Developer Tools",
      description: "Access SDKs, APIs, and development resources to build your own applications on Injective.",
      color: "orange",
      steps: [
        {
          name: "Developer Documentation",
          info: "Complete technical documentation for building on Injective.",
          url: "https://docs.injective.network/developers/"
        },
        {
          name: "Injective TypeScript SDK",
          info: "Official SDK for JavaScript and TypeScript developers.",
          url: "https://github.com/InjectiveLabs/injective-ts"
        }
      ]
    },
    {
      icon: Rocket,
      title: "Ninja Labs & Innovation",
      description: "Learn about Injective's incubator program and the latest innovations being developed in the ecosystem.",
      color: "pink",
      steps: [
        {
          name: "Ninja Labs Overview",
          info: "Discover projects being incubated by Injective Labs.",
          url: "https://docs.injective.network/"
        },
        {
          name: "Grants Program",
          info: "Apply for funding to build on Injective.",
          url: "https://injective.com/developers/"
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; hover: string }> = {
      blue: {
        bg: "bg-blue-500/20",
        border: "border-blue-500/30",
        text: "text-blue-400",
        hover: "hover:bg-blue-500/30 hover:border-blue-500/50"
      },
      purple: {
        bg: "bg-purple-500/20",
        border: "border-purple-500/30",
        text: "text-purple-400",
        hover: "hover:bg-purple-500/30 hover:border-purple-500/50"
      },
      orange: {
        bg: "bg-orange-500/20",
        border: "border-orange-500/30",
        text: "text-orange-400",
        hover: "hover:bg-orange-500/30 hover:border-orange-500/50"
      },
      pink: {
        bg: "bg-pink-500/20",
        border: "border-pink-500/30",
        text: "text-pink-400",
        hover: "hover:bg-pink-500/30 hover:border-pink-500/50"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-violet-600/20 border border-violet-500/30 flex items-center justify-center">
            <Layers className="w-7 h-7 text-violet-400" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground">Ecosystem Path</h2>
            <p className="text-muted-foreground">Explore the diverse Injective ecosystem</p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const colors = getColorClasses(category.color);
            
            return (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-violet-500/20 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm mb-6">
                  {category.description}
                </p>

                {/* Learning Steps */}
                <div className="space-y-3">
                  {category.steps.map((step, stepIndex) => (
                    <a
                      key={stepIndex}
                      href={step.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block p-4 rounded-xl border ${colors.border} ${colors.bg} ${colors.hover} transition-all duration-200 group`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className={`font-semibold ${colors.text} mb-1`}>
                            {step.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {step.info}
                          </p>
                        </div>
                        <ExternalLink className={`w-4 h-4 ${colors.text} opacity-50 group-hover:opacity-100 transition-opacity`} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EcosystemPath;
