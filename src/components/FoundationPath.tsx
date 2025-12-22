import { BookOpen, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const FoundationPath = () => {
  const steps = [
    {
      number: "01",
      title: "What is Injective?",
      description: "Understand Injective as a Layer-1 blockchain built specifically for finance. Learn why it was created and what problems it solves in the DeFi space.",
      keyPoints: [
        "Purpose-built for decentralized finance",
        "Interoperable with Ethereum, Cosmos & more",
        "MEV-resistant by design"
      ],
      cta: {
        label: "Read Official Introduction",
        url: "https://docs.injective.network/learn/introduction"
      }
    },
    {
      number: "02",
      title: "The INJ Token",
      description: "Discover the native token that powers the Injective ecosystem. Learn about its utility, tokenomics, and role in governance.",
      keyPoints: [
        "Used for staking and governance",
        "Deflationary burn mechanism",
        "Transaction fee payments"
      ],
      cta: {
        label: "Explore INJ Tokenomics",
        url: "https://docs.injective.network/learn/injective-hub/inj"
      }
    },
    {
      number: "03",
      title: "Getting Started with Wallets",
      description: "Set up your first Injective-compatible wallet to interact with the ecosystem. Learn how to secure your assets properly.",
      keyPoints: [
        "Supported wallets overview",
        "Creating and securing your wallet",
        "Connecting to Injective dApps"
      ],
      cta: {
        label: "Wallet Setup Guide",
        url: "https://hub.injective.network/"
      }
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 flex items-center justify-center">
            <BookOpen className="w-7 h-7 text-emerald-400" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground">Foundation Path</h2>
            <p className="text-muted-foreground">Start here — understand the basics of Injective</p>
          </div>
        </div>

        {/* Learning Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 hover:border-emerald-500/30 transition-all duration-300"
            >
              {/* Step Number */}
              <div className="absolute -left-3 md:-left-4 top-6 md:top-8 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                <span className="text-xs font-bold text-emerald-400">{step.number}</span>
              </div>

              <div className="ml-4 md:ml-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 max-w-2xl">
                      {step.description}
                    </p>

                    {/* Key Points */}
                    <ul className="space-y-2">
                      {step.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="flex-shrink-0">
                    <Button
                      asChild
                      className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50"
                    >
                      <a href={step.cta.url} target="_blank" rel="noopener noreferrer">
                        {step.cta.label}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1 md:left-0 top-full w-px h-6 bg-gradient-to-b from-emerald-500/40 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundationPath;
