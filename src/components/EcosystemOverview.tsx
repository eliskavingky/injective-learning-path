import { TrendingUp, Palette, Wrench, Server, Rocket } from "lucide-react";

const ecosystemCategories = [
  {
    icon: TrendingUp,
    title: "DeFi",
    description: "The backbone of financial applications on Injective",
    items: [
      { name: "Helix", desc: "Premier decentralized derivatives exchange" },
      { name: "Hydro Protocol", desc: "Institutional-grade liquidity infrastructure" },
      { name: "Neptune Finance", desc: "Next-gen lending and borrowing" },
      { name: "Astroport", desc: "Multi-chain AMM and liquidity hub" },
    ],
    color: "primary",
  },
  {
    icon: Palette,
    title: "NFTs & Gaming",
    description: "Digital collectibles and on-chain gaming experiences",
    items: [
      { name: "Talis Protocol", desc: "NFT marketplace and launchpad" },
      { name: "Shadow Labs", desc: "Generative art collections" },
      { name: "Grid Trading Bots", desc: "Automated trading NFTs" },
    ],
    color: "accent",
  },
  {
    icon: Wrench,
    title: "Developer Tools",
    description: "Build and deploy with powerful infrastructure",
    items: [
      { name: "Injective SDK", desc: "TypeScript/Python development kits" },
      { name: "Injective Bridge", desc: "Cross-chain asset transfers" },
      { name: "Explorer", desc: "Blockchain data and analytics" },
      { name: "Indexer API", desc: "Query chain state efficiently" },
    ],
    color: "primary",
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "Core protocol components and services",
    items: [
      { name: "Validators", desc: "Secure network consensus" },
      { name: "Oracles", desc: "Pyth and Band price feeds" },
      { name: "Peggy Bridge", desc: "Ethereum interoperability" },
      { name: "IBC Relayers", desc: "Cosmos ecosystem connectivity" },
    ],
    color: "accent",
  },
  {
    icon: Rocket,
    title: "Ninja Labs",
    description: "Incubated projects by Injective Labs",
    items: [
      { name: "Mito", desc: "Automated trading strategies" },
      { name: "DojoSwap", desc: "Community-driven DEX" },
      { name: "Black Panther", desc: "Yield optimization vaults" },
    ],
    color: "primary",
  },
];

const EcosystemOverview = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Ecosystem</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            A Thriving <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore the diverse range of applications, tools, and infrastructure powering the Injective network
          </p>
        </div>

        {/* Ecosystem grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecosystemCategories.map((category, index) => (
            <div
              key={category.title}
              className={`card-gradient rounded-2xl p-6 border border-border transition-all duration-300 hover:border-${category.color}/50 group ${
                index === ecosystemCategories.length - 1 && ecosystemCategories.length % 3 === 2
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-2.5 rounded-xl bg-${category.color}/10 group-hover:bg-${category.color}/20 transition-colors`}>
                  <category.icon className={`w-5 h-5 text-${category.color}`} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{category.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{category.description}</p>
                </div>
              </div>

              {/* Items list */}
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-3 rounded-lg bg-secondary/30 border border-border/50 hover:bg-secondary/50 hover:border-border transition-all cursor-default"
                  >
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            And many more projects building on Injective every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcosystemOverview;
