import { motion } from "framer-motion";
import { ArrowRight, Cpu, Wallet, Rocket } from "lucide-react";
import Scene3D from "./Scene3D";
import FloatingCharacter from "./FloatingCharacter";
import GlassCard3D from "./GlassCard3D";
import mascotImg from "@/assets/vault-mascot.png";
import giftCardImg from "@/assets/gift-card-1.png";

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
      <Scene3D />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating characters */}
      <FloatingCharacter
        src={mascotImg}
        alt="Vault Mascot"
        className="absolute top-40 right-8 md:right-16 z-20 hidden md:block"
        size={220}
        floatDelay={0}
        parallaxSpeed={0.5}
      />
      <FloatingCharacter
        src={giftCardImg}
        alt="Vault Gift Card"
        className="absolute bottom-32 left-4 md:left-12 z-20 hidden md:block"
        size={160}
        floatDelay={1}
        parallaxSpeed={0.3}
      />

      {/* Floating bubbles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20"
          style={{
            width: 20 + Math.random() * 40,
            height: 20 + Math.random() * 40,
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Announcement badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="announcement-badge backdrop-blur-xl">
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

        {/* Feature cards with 3D tilt */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mt-12"
          style={{ perspective: "1000px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <GlassCard3D className="p-6 group cursor-pointer">
                <feature.icon className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-mono text-primary text-sm font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard3D>
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
          <div className="code-block text-center backdrop-blur-xl">
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
          <a href="#" className="btn-outline-vault backdrop-blur-xl">
            Tokenized Agents
          </a>
          <a href="#" className="btn-outline-vault backdrop-blur-xl">
            Agent API Docs
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
