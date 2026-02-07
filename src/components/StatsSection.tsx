import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ParallaxSection from "./ParallaxSection";
import GlassCard3D from "./GlassCard3D";
import FloatingCharacter from "./FloatingCharacter";
import rocketImg from "@/assets/rocket-3d.png";

const stats = [
  { value: "2M+", label: "Messages sent" },
  { value: "220,000+", label: "Active wallets" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <FloatingCharacter
        src={rocketImg}
        alt="Rocket"
        className="absolute -right-4 top-10 z-10 hidden lg:block"
        size={180}
        floatDelay={0.5}
        parallaxSpeed={0.6}
      />

      <div className="container mx-auto px-4 relative z-10">
        <ParallaxSection speed={0.15}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider mb-4">
              Powered by TON Blockchain
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Trade with <span className="text-vault-gradient">Vault</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The AI agent on TON that watches your wallets, bridges to Sui, Sei & Monad, and executes trades.
            </p>
          </motion.div>
        </ParallaxSection>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
          style={{ perspective: "1000px" }}
        >
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Give me $VAULT market data on TON",
              "Bridge 100 TON to Sui network",
              "Swap TON for USDT on DeDust",
              "What are the top tokens on Sei?",
            ].map((prompt, i) => (
              <GlassCard3D key={i} className="px-4 py-3">
                <span className="text-sm text-muted-foreground font-mono">{prompt}</span>
              </GlassCard3D>
            ))}
          </div>
        </motion.div>

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
              <div className="stat-number text-primary drop-shadow-[0_0_20px_hsl(var(--vault-green)/0.4)]">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center items-center gap-8 mt-16 opacity-40"
        >
          {["TON", "Sui", "Sei", "Monad", "DeDust"].map((name) => (
            <div key={name} className="font-mono text-sm">{name}</div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
