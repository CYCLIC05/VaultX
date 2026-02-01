import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "2M+", label: "Messages sent" },
  { value: "220,000+", label: "Active wallets" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider mb-4">
            Also Available: The Vault Agent
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Trade with <span className="text-vault-gradient">Vault</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The crypto AI agent that watches your wallets, researches markets, executes trades and more.
          </p>
        </motion.div>

        {/* Example prompts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="glass-card px-4 py-3 text-sm text-muted-foreground font-mono">
              Give me $VAULT market data
            </div>
            <div className="glass-card px-4 py-3 text-sm text-muted-foreground font-mono">
              Bridge $5 of ETH on Base to Solana
            </div>
            <div className="glass-card px-4 py-3 text-sm text-muted-foreground font-mono">
              Send @0xDeployer on X $5 of $VAULT
            </div>
            <div className="glass-card px-4 py-3 text-sm text-muted-foreground font-mono">
              What are the top coins on Base?
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-16 md:gap-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="stat-number text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner logos placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center items-center gap-8 mt-16 opacity-40"
        >
          <div className="font-mono text-sm">Coinbase</div>
          <div className="font-mono text-sm">Polygon</div>
          <div className="font-mono text-sm">Solana</div>
          <div className="font-mono text-sm">0x</div>
          <div className="font-mono text-sm">Zapper</div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
