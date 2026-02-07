import { motion } from "framer-motion";
import { ArrowRight, Cpu, Wallet, Rocket } from "lucide-react";
import Scene3D from "./Scene3D";
import GlassCard3D from "./GlassCard3D";
import Interactive3DScene from "./Interactive3DScene";

const features = [
  {
    icon: Cpu,
    title: "Plug-in Skills",
    description: "Community-built skills for trading, bridging, and DeFi on TON.",
  },
  {
    icon: Wallet,
    title: "Built-in Wallet",
    description: "Cross-chain wallet for TON, Sui, Sei & Monad with zero setup.",
  },
  {
    icon: Rocket,
    title: "Token Launchpad",
    description: "Fair launch tokens. Trading fees fund your agent's compute.",
  },
];

const stats = [
  { value: "2M+", label: "Messages sent" },
  { value: "220K+", label: "Active wallets" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden">
      <Scene3D />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Diagonal gradient separator */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(var(--vault-cyan))]/5"
          style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }} />
      </div>

      {/* Enhanced gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-[hsl(var(--vault-cyan))]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[hsl(var(--vault-purple))]/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center min-h-[85vh]">
          {/* LEFT PANEL - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="announcement-badge backdrop-blur-xl inline-flex">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-muted-foreground">Built on TON Blockchain</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]">
                AI agents on{" "}
                <span className="text-vault-gradient">TON</span>
                <br />
                that <span className="text-vault-gradient">fund themselves</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-mono max-w-xl">
                Build a Vault agent on TON. Bridge to Sui, Sei & Monad. Trading fees pay for your AI compute.
              </p>
            </div>

            {/* Vertical CTA Stack */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
              <a href="#" className="btn-vault flex-1 justify-center">
                Vault Skills <ArrowRight size={16} />
              </a>
              <a href="#" className="btn-outline-vault backdrop-blur-xl flex-1 justify-center">
                Tokenized Agents
              </a>
              <a href="#" className="btn-outline-vault backdrop-blur-xl flex-1 justify-center">
                API Docs
              </a>
            </div>

            {/* Stats integrated */}
            <div className="flex gap-12 pt-6 border-t border-primary/10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="stat-number text-primary drop-shadow-[0_0_20px_hsl(var(--vault-green)/0.4)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Supported chains */}
            <div className="flex items-center gap-6 pt-4 opacity-50">
              <span className="text-xs font-mono text-muted-foreground uppercase">Supports:</span>
              {["TON", "Sui", "Sei", "Monad"].map((name) => (
                <div key={name} className="font-mono text-sm">{name}</div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT PANEL - Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Floating Feature Cards */}
            <div className="space-y-4 relative" style={{ perspective: "1000px" }}>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20, rotateX: 10 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                  style={{
                    transform: `translateX(${index * 20}px)`,
                  }}
                >
                  <GlassCard3D className="p-5 backdrop-blur-xl">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-mono text-sm font-semibold mb-1">{feature.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard3D>
                </motion.div>
              ))}

              {/* Code snippet as floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="absolute bottom-8 right-4 w-72"
              >
                <GlassCard3D className="p-4 bg-background/40">
                  <pre className="text-xs text-green-400 font-mono overflow-x-auto">
                    <code>{`const agent = new VaultAI()
agent.trade("TON", 100)
// -> Executing...`}</code>
                  </pre>
                </GlassCard3D>
              </motion.div>

              {/* Interactive 3D Elements - Character and Vault */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="absolute inset-0"
              >
                <Interactive3DScene
                  elements={['character', 'vault']}
                  className="opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile feature cards */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12 lg:hidden"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
            >
              <GlassCard3D className="p-5">
                <feature.icon className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-mono text-sm font-semibold mb-2">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </GlassCard3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
