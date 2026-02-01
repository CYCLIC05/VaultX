import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, TrendingUp, ArrowRight } from "lucide-react";

const EarnSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="earn" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* USDC Earn Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
            
            <TrendingUp className="w-6 h-6 text-blue-400 mb-4" />
            
            <h3 className="text-2xl font-bold mb-2">Vault Earn.</h3>
            <p className="text-xl text-muted-foreground mb-6">Your USDC, always earning.</p>
            <p className="text-sm text-muted-foreground mb-8">
              Automatically deposited across chains for yield — liquid and ready
            </p>

            <div className="glass-card p-4 mb-6 inline-block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="font-mono font-bold text-blue-400 text-sm">$</span>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-primary">1.72%</div>
                  <div className="text-xs text-muted-foreground">APY • USDC</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Learn more
              </a>
              <a href="#" className="btn-vault text-sm py-2 px-4">
                Enable from Terminal <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Security Module Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            
            <Shield className="w-6 h-6 text-primary mb-4" />
            
            <h3 className="text-2xl font-bold mb-2">Security Module</h3>
            <p className="text-xl text-muted-foreground mb-6">Stake $VAULT. Earn rewards.</p>
            <p className="text-sm text-muted-foreground mb-8">
              Help ensure the trustworthiness of Vault by depositing funds to the security module to earn rewards in $VAULT.
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
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Learn more
              </a>
              <a href="#" className="btn-vault text-sm py-2 px-4">
                Stake now <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EarnSection;
