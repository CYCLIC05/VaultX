import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, MessageSquare, Twitter, Send, Globe, ArrowRight } from "lucide-react";
import GlassCard3D from "./GlassCard3D";
import ParallaxSection from "./ParallaxSection";

const platforms = [
  { icon: Terminal, name: "Terminal", description: "Access your private terminal to trade on TON, bridge to Sui & Sei, and manage your wallet — all powered by AI.", cta: "Open Terminal", link: "#", featured: true },
  { icon: Globe, name: "TON App", description: "Use Vault directly inside your TON wallet app for seamless trading.", cta: "Open in TON", link: "#" },
  { icon: Send, name: "Telegram", description: "Chat with Vault on Telegram — the native home of TON blockchain.", cta: "Start on Telegram", link: "#", isNew: true },
  { icon: Twitter, name: "X", description: "Chat with Vault on X to buy and sell TON tokens, check prices, and share trades.", cta: "Chat on X", link: "#" },
  { icon: MessageSquare, name: "Farcaster", description: "Trade and bridge directly from your casts — powered by the open social web.", cta: "Open on Farcaster", link: "#" },
  { icon: Globe, name: "XMTP", description: "Chat with Vault on XMTP, the decentralized messaging protocol.", cta: "Coming Soon", link: "#", disabled: true },
];

const ConnectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="connect" className="py-24 relative overflow-hidden">

      <div className="container mx-auto px-4">
        <ParallaxSection speed={0.1}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ways to Connect with <span className="text-vault-gradient">Vault</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect with Vault on your favorite apps and platforms.
              Telegram is our home — the native platform for TON.
            </p>
          </motion.div>
        </ParallaxSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto" style={{ perspective: "1000px" }}>
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.07 }}
            >
              <GlassCard3D className={`p-6 relative h-full ${platform.featured ? 'border-primary/30 bg-primary/5' : ''} ${platform.disabled ? 'opacity-60' : ''}`}>
                {platform.isNew && (
                  <span className="absolute top-4 right-4 text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                    New
                  </span>
                )}
                <div className="w-10 h-10 rounded-xl bg-secondary backdrop-blur-sm flex items-center justify-center mb-4 border border-border">
                  <platform.icon className={`w-5 h-5 ${platform.featured ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <h3 className="font-semibold mb-2">{platform.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{platform.description}</p>
                {!platform.disabled ? (
                  <a href={platform.link} className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                    {platform.cta} <ArrowRight size={14} />
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground font-mono">{platform.cta}</span>
                )}
              </GlassCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
