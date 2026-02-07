import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRightLeft, LineChart, MessageCircle, ShoppingCart,
  Send, Coins, Users, Image, Sparkles
} from "lucide-react";
import GlassCard3D from "./GlassCard3D";
import ParallaxSection from "./ParallaxSection";
import Interactive3DScene from "./Interactive3DScene";

const features = [
  {
    icon: ArrowRightLeft,
    title: "Bridge Across Chains",
    description: "Seamlessly move assets between TON, Sui, Sei, and Monad with the best rates and lowest fees",
    highlight: true,
    size: "large" // 2x2
  },
  {
    icon: LineChart,
    title: "Technical Analysis",
    description: "Make data-driven decisions on TON markets with advanced analytics.",
    size: "small" // 1x1
  },
  {
    icon: MessageCircle,
    title: "Social Sentiment",
    description: "Real-time social sentiment analysis for any TON token or project",
    size: "small" // 1x1
  },
  {
    icon: ShoppingCart,
    title: "Place Limit Orders",
    description: "Never miss the dip or pump. Set your price on DeDust and Vault executes.",
    size: "small" // 1x1
  },
  {
    icon: Send,
    title: "Buy and Send Tokens",
    description: "Purchase and send TON tokens easily—just like sending money to a friend.",
    size: "small" // 1x1
  },
  {
    icon: Coins,
    title: "Launch Tokens",
    description: "Create your own token on TON in a few taps. No tech skills needed.",
    size: "wide" // 1x2
  },
  {
    icon: Users,
    title: "Copy Top Traders",
    description: "Copy trade the best TON traders directly in the social feed.",
    size: "small" // 1x1
  },
  {
    icon: Image,
    title: "Transfer NFTs",
    description: "Send your TON NFTs and collectibles instantly and securely.",
    size: "small" // 1x1
  },
  {
    icon: Sparkles,
    title: "More Coming Soon",
    description: "We're always adding new features — Monad and Sei integrations expanding.",
    size: "small" // 1x1
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="features" className="py-24 relative overflow-hidden">
      {/* Interactive 3D Elements */}
      <Interactive3DScene
        elements={['card', 'coins']}
        className="opacity-60 pointer-events-none"
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

        {/* Bento Box Grid Layout */}
        <div
          className="max-w-7xl mx-auto"
          style={{ perspective: "1000px" }}
        >
          <div className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
            auto-rows-[minmax(200px,auto)]
            gap-4
          ">
            {features.map((feature, index) => {
              // Define grid cell spans based on size
              const sizeClasses = {
                large: "md:col-span-2 md:row-span-2",
                wide: "md:col-span-2",
                small: "md:col-span-1"
              };

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30, rotateX: 10 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
                  className={sizeClasses[feature.size as keyof typeof sizeClasses]}
                >
                  <GlassCard3D
                    className={`p-6 h-full flex flex-col ${feature.highlight ? 'border-primary/30 bg-primary/5' : ''}`}
                  >
                    <feature.icon
                      className={`w-${feature.size === 'large' ? '8 h-8' : '6 h-6'} mb-4 ${feature.highlight ? 'text-primary' : 'text-muted-foreground'}`}
                    />
                    <h3 className={`font-semibold mb-2 ${feature.size === 'large' ? 'text-xl' : 'text-base'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-muted-foreground leading-relaxed ${feature.size === 'large' ? 'text-base' : 'text-sm'}`}>
                      {feature.description}
                    </p>
                  </GlassCard3D>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
