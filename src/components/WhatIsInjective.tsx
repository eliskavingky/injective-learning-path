import { Globe, Layers, Shield } from "lucide-react";

const WhatIsInjective = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            What is <span className="text-gradient">Injective</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A foundational layer for the future of decentralized finance
          </p>
        </div>

        {/* Main content card */}
        <div className="card-gradient rounded-2xl p-8 md:p-12 border border-border glow-effect">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Injective is a <span className="text-primary font-medium">Layer-1 blockchain</span> built specifically 
                for finance. It provides the infrastructure for developers to build powerful 
                DeFi applications including decentralized exchanges, prediction markets, 
                lending protocols, and more.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Powered by a Tendermint-based Proof-of-Stake consensus mechanism, Injective 
                achieves instant transaction finality while maintaining the highest level of 
                security and decentralization. The chain is fully interoperable with Ethereum, 
                Cosmos, and other major blockchain networks.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 transition-all hover:border-primary/30 hover:bg-secondary">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1">Fully Decentralized</h4>
                  <p className="text-sm text-muted-foreground">
                    No central authority, governed entirely by the community
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 transition-all hover:border-primary/30 hover:bg-secondary">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1">Smart Contract Platform</h4>
                  <p className="text-sm text-muted-foreground">
                    CosmWasm-powered for secure and efficient dApp development
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 transition-all hover:border-primary/30 hover:bg-secondary">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1">MEV-Resistant</h4>
                  <p className="text-sm text-muted-foreground">
                    Built-in protection against front-running and sandwich attacks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsInjective;
