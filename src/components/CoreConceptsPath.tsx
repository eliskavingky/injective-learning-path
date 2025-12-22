import { Zap, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CoreConceptsPath = () => {
  const steps = [
    {
      number: "01",
      title: "Lightning-Fast Transactions",
      description: "Explore how Injective achieves instant transaction finality with block times under 1 second. Understand the technical architecture that enables this speed.",
      keyPoints: [
        "Tendermint consensus mechanism",
        "Sub-second block finality",
        "10,000+ transactions per second"
      ],
      cta: {
        label: "Learn About Speed",
        url: "https://docs.injective.network/defi/transactions/"
      }
    },
    {
      number: "02",
      title: "Transaction Fees",
      description: "Discover Injective's unique approach to transaction costs. Learn how users benefit from extremely low fees compared to other blockchains.",
      keyPoints: [
        "Extremely low transaction costs",
        "Sustainable fee model",
        "No hidden charges"
      ],
      cta: {
        label: "Understand Fee Structure",
        url: "https://docs.injective.network/defi/transaction-fees"
      }
    },
    {
      number: "03",
      title: "Cross-Chain Interoperability",
      description: "Learn how Injective connects multiple blockchain ecosystems seamlessly. Understand bridges, IBC, and cross-chain communication.",
      keyPoints: [
        "IBC protocol integration",
        "Ethereum bridge support",
        "Multi-chain asset transfers"
      ],
      cta: {
        label: "Explore Bridges",
        url: "https://hub.injective.network/"
      }
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-injective/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-injective/20 to-injective-light/20 border border-injective/30 flex items-center justify-center">
            <Zap className="w-7 h-7 text-injective" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground">Core Concepts Path</h2>
            <p className="text-muted-foreground">Dive deeper into Injective's key advantages</p>
          </div>
        </div>

        {/* Learning Steps Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-injective/30 transition-all duration-300"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-injective/20 border border-injective/40 flex items-center justify-center">
                <span className="text-xs font-bold text-injective">{step.number}</span>
              </div>

              <div className="pt-2">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {step.description}
                </p>

                {/* Key Points */}
                <ul className="space-y-2 mb-6">
                  {step.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-injective flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-injective/30 text-injective hover:bg-injective/10 hover:border-injective/50"
                >
                  <a href={step.cta.url} target="_blank" rel="noopener noreferrer">
                    {step.cta.label}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreConceptsPath;
