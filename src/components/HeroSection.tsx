import { motion } from "framer-motion";
import { ArrowRight, Cpu, Wallet, Rocket } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Plug-in Skills",
    description: "Community-built skills for trading, social, defi. One-click install. Your agent gets smarter over time.",
  },
  {
    icon: Wallet,
    title: "Built-in Wallet",
    description: "Every agent gets a cross-chain wallet. Trade, deploy contracts, manage defi. No extra setup.",
  },
  {
    icon: Rocket,
    title: "Token Launchpad",
    description: "Fair launch a token for your agent. Trading fees flow back to fund compute. Self-sustaining from day one.",
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Announcement badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="announcement-badge">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-muted-foreground">Announcement</span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            AI agents that{" "}
            <span className="text-vault-gradient">fund themselves</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-mono max-w-2xl mx-auto">
            Build a vaultbot agent. Launch a token. Trading fees pay for your AI compute. No ongoing costs.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mt-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="feature-card group"
            >
              <feature.icon className="w-5 h-5 text-primary mb-3" />
              <h3 className="font-mono text-primary text-sm font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Code block */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="max-w-2xl mx-auto mt-10"
        >
          <p className="text-center text-sm text-muted-foreground mb-3 font-mono">
            To install Vault skills tell your agent:
          </p>
          <div className="code-block text-center">
            <code className="text-primary">
              install the vault skill from https://github.com/VaultAI/vault-skills
            </code>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <a href="#" className="btn-vault">
            Vault Skills <ArrowRight size={16} />
          </a>
          <a href="#" className="btn-outline-vault">
            Tokenized Agents
          </a>
          <a href="#" className="btn-outline-vault">
            Agent API Docs
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
