import { Zap, Coins, Link2 } from "lucide-react";

const principles = [
  {
    icon: Zap,
    title: "Lightning Speed",
    description: "With block times under 1 second and instant finality, Injective processes over 10,000 transactions per second. This makes it one of the fastest blockchains in existence, enabling real-time trading and complex DeFi operations.",
    highlight: "< 1s Finality",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Coins,
    title: "Zero Gas Fees",
    description: "Injective eliminates the friction of gas fees for end users. Through its unique fee delegation system, applications can sponsor transaction costs, creating a seamless Web2-like experience for DeFi users.",
    highlight: "Fee-less Trading",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Link2,
    title: "True Interoperability",
    description: "Natively connected to Ethereum via Peggy Bridge and the Cosmos ecosystem via IBC, Injective enables seamless cross-chain communication. Assets and data flow freely between networks without trusted intermediaries.",
    highlight: "Cross-Chain Native",
    color: "from-violet-400 to-purple-500",
  },
];

const CorePrinciples = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Core Design</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Built Different
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Three fundamental principles that make Injective the optimal foundation for decentralized finance
          </p>
        </div>

        {/* Principles grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className="group relative card-gradient rounded-2xl p-8 border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient accent line */}
              <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${principle.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              {/* Icon */}
              <div className="mb-6">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${principle.color} bg-opacity-10`}>
                  <principle.icon className="w-6 h-6 text-foreground" />
                </div>
              </div>

              {/* Highlight badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                {principle.highlight}
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold mb-3">{principle.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePrinciples;
