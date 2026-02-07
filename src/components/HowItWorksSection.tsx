import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wallet, Download, Zap, Rocket, ArrowRight } from "lucide-react";
import GlassCard3D from "./GlassCard3D";

const steps = [
    {
        icon: Wallet,
        number: "01",
        title: "Connect Your Wallet",
        description: "Link your TON wallet or create a new one directly in VaultX. Your keys, your control."
    },
    {
        icon: Download,
        number: "02",
        title: "Install Skills",
        description: "Browse and install community-built skills for trading, DeFi, analytics, and more with one click."
    },
    {
        icon: Zap,
        number: "03",
        title: "Configure Your Agent",
        description: "Set your trading preferences, risk tolerance, and automation rules. Your agent learns from your style."
    },
    {
        icon: Rocket,
        number: "04",
        title: "Launch & Earn",
        description: "Deploy your agent and watch it work. Launch tokens, trade, bridge assets, and earn while your agent funds itself."
    }
];

const HowItWorksSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} id="how-it-works" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-20" />

            {/* Gradient orbs */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[hsl(var(--vault-cyan))]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        How <span className="text-vault-gradient">VaultX</span> Works
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Get started with your AI-powered TON agent in four simple steps
                    </p>
                </motion.div>

                {/* Desktop: Horizontal Timeline */}
                <div className="hidden lg:block max-w-7xl mx-auto">
                    <div className="relative">
                        {/* Connection line */}
                        <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

                        <div className="grid grid-cols-4 gap-6">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                                    className="relative"
                                >
                                    <GlassCard3D className="p-6 text-center h-full flex flex-col items-center relative">
                                        {/* Number badge with connecting dot */}
                                        <div className="relative mb-6">
                                            <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center relative z-10 backdrop-blur-sm">
                                                <span className="font-mono font-bold text-2xl text-primary">{step.number}</span>
                                            </div>
                                            {/* Connection dot on timeline */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary z-20" />
                                        </div>

                                        {/* Icon */}
                                        <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                                            <step.icon className="w-7 h-7 text-primary" />
                                        </div>

                                        {/* Content */}
                                        <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                                            {step.description}
                                        </p>

                                        {/* Arrow to next step */}
                                        {index < steps.length - 1 && (
                                            <div className="absolute -right-3 top-20 text-primary/40">
                                                <ArrowRight className="w-6 h-6" />
                                            </div>
                                        )}
                                    </GlassCard3D>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet: Vertical Flow */}
                <div className="lg:hidden max-w-2xl mx-auto space-y-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                            className="relative"
                        >
                            <GlassCard3D className="p-6 flex gap-4">
                                {/* Left: Number badge with vertical line */}
                                <div className="flex flex-col items-center">
                                    <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0">
                                        <span className="font-mono font-bold text-xl text-primary">{step.number}</span>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="w-0.5 h-full bg-gradient-to-b from-primary/40 to-transparent mt-4" />
                                    )}
                                </div>

                                {/* Right: Content */}
                                <div className="flex-1">
                                    <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-3">
                                        <step.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </GlassCard3D>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <a href="#" className="btn-vault">
                        Get Started Now
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
