import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRightLeft, LineChart, MessageCircle, ShoppingCart,
  Send, Coins, Users, Image, Sparkles
} from "lucide-react";
import GlassCard3D from "./GlassCard3D";
import ParallaxSection from "./ParallaxSection";
import FloatingCharacter from "./FloatingCharacter";
import astronautImg from "@/assets/astronaut.png";

const features = [
  { icon: ArrowRightLeft, title: "Bridge Across Chains", description: "Seamlessly move assets between TON, Sui, Sei, and Monad with the best rates and lowest fees", highlight: true },
  { icon: LineChart, title: "Technical Analysis", description: "Take emotion out of trading and make data-driven decisions on TON markets." },
  { icon: MessageCircle, title: "Social Sentiment", description: "Get real-time social sentiment analysis for any TON token or project" },
  { icon: ShoppingCart, title: "Place Limit Orders", description: "Never miss the dip or the pump. Set your price on DeDust and Vault does the rest." },
  { icon: Send, title: "Buy and Send Tokens", description: "Easily purchase and send TON tokens—just like sending money to a friend." },
  { icon: Coins, title: "Launch Tokens", description: "Create your own token on TON in a few taps. No tech skills needed." },
  { icon: Users, title: "Copy Top Traders", description: "Copy trade the best TON traders directly in the social feed." },
  { icon: Image, title: "Transfer NFTs", description: "Send your TON NFTs and collectibles to anyone, instantly and securely." },
  { icon: Sparkles, title: "More Coming", description: "We're always adding new features — Monad and Sei integrations expanding soon." },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="features" className="py-24 relative overflow-hidden">
      <FloatingCharacter
        src={astronautImg}
        alt="Astronaut"
        className="absolute left-4 top-20 z-10 hidden lg:block"
        size={150}
        floatDelay={0.3}
        parallaxSpeed={0.4}
      />

      <div className="container mx-auto px-4">
        <ParallaxSection speed={0.1}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What can <span className="text-vault-gradient">Vault</span> do?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vault is the easiest way to trade on TON and bridge across chains. An advanced AI agent
              for swapping, bridging to Sui, Sei & Monad, and more.
            </p>
          </motion.div>
        </ParallaxSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto" style={{ perspective: "1000px" }}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
            >
              <GlassCard3D className={`p-6 h-full ${feature.highlight ? 'border-primary/30 bg-primary/5' : ''}`}>
                <feature.icon className={`w-5 h-5 mb-3 ${feature.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </GlassCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
