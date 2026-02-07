import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import GlassCard3D from "./GlassCard3D";

const testimonials = [
    {
        name: "Alex Chen",
        role: "DeFi Trader",
        avatar: "AC",
        content: "VaultX completely changed how I trade on TON. The cross-chain bridging is seamless and the AI agent handles my limit orders perfectly.",
        rating: 5
    },
    {
        name: "Sarah Martinez",
        role: "Token Creator",
        avatar: "SM",
        content: "Launched my first token through VaultX and the self-funding mechanism is genius. My agent pays for itself through trading fees!",
        rating: 5
    },
    {
        name: "David Kim",
        role: "Crypto Enthusiast",
        avatar: "DK",
        content: "The Vault Skills marketplace is incredible. I installed a sentiment analysis skill and it's helped me make better trading decisions.",
        rating: 5
    }
];

const TestimonialsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} id="testimonials" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-20" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Loved by <span className="text-vault-gradient">Traders</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        See what our community is saying about VaultX
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto" style={{ perspective: "1000px" }}>
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                        >
                            <GlassCard3D className="p-6 h-full flex flex-col">
                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                                        <span className="font-mono font-semibold text-primary text-sm">
                                            {testimonial.avatar}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </GlassCard3D>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
