import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, TrendingUp, ArrowRight } from "lucide-react";
import GlassCard3D from "./GlassCard3D";
import FloatingCharacter from "./FloatingCharacter";
import treasureImg from "@/assets/treasure-chest.png";

const EarnSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="earn" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

      <FloatingCharacter
        src={treasureImg}
        alt="Treasure Chest"
        className="absolute right-8 bottom-10 z-10 hidden lg:block"
        size={160}
        floatDelay={0.7}
        parallaxSpeed={0.5}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" style={{ perspective: "1200px" }}>
          {/* USDC Earn Card */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotateY: 10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <GlassCard3D className="p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(var(--vault-cyan))]/10 rounded-full blur-3xl" />
              <TrendingUp className="w-6 h-6 text-[hsl(var(--vault-cyan))] mb-4" />
              <h3 className="text-2xl font-bold mb-2">Vault Earn.</h3>
              <p className="text-xl text-muted-foreground mb-6">Your USDT on TON, always earning.</p>
              <p className="text-sm text-muted-foreground mb-8">
                Automatically deposited across TON DeFi protocols for yield — liquid and ready
              </p>
              <div className="glass-card p-4 mb-6 inline-block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--vault-cyan))]/20 flex items-center justify-center">
                    <span className="font-mono font-bold text-[hsl(var(--vault-cyan))] text-sm">$</span>
                  </div>
                  <div>
                    <div className="font-mono text-2xl font-bold text-primary">1.72%</div>
                    <div className="text-xs text-muted-foreground">APY • USDT</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Learn more</a>
                <a href="#" className="btn-vault text-sm py-2 px-4">Enable from Terminal <ArrowRight size={14} /></a>
              </div>
            </GlassCard3D>
          </motion.div>

          {/* Security Module */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: -10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <GlassCard3D className="p-8 relative overflow-hidden" glowColor="hsl(var(--vault-green) / 0.2)">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <Shield className="w-6 h-6 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">Security Module</h3>
              <p className="text-xl text-muted-foreground mb-6">Stake $VAULT. Earn rewards.</p>
              <p className="text-sm text-muted-foreground mb-8">
                Help ensure the trustworthiness of Vault on TON by depositing funds to the security module to earn $VAULT.
              </p>
              <div className="glass-card p-4 mb-6 inline-block vault-glow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-mono font-bold text-primary text-sm">V</span>
                  </div>
                  <div>
                    <div className="font-mono text-2xl font-bold text-primary">15.34%</div>
                    <div className="text-xs text-muted-foreground">APY • $VAULT</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Learn more</a>
                <a href="#" className="btn-vault text-sm py-2 px-4">Stake now <ArrowRight size={14} /></a>
              </div>
            </GlassCard3D>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EarnSection;
