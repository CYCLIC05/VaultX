import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const NewsletterSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic email validation
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
            return;
        }

        setStatus("loading");

        // Simulate API call (replace with actual integration)
        setTimeout(() => {
            setStatus("success");
            setEmail("");
            setTimeout(() => setStatus("idle"), 5000);
        }, 1500);
    };

    return (
        <section ref={ref} id="newsletter" className="py-24 relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
            <div className="absolute inset-0 grid-pattern opacity-20" />

            {/* Gradient orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="glass-card p-8 md:p-12 text-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6"
                        >
                            <Send className="w-8 h-8 text-primary" />
                        </motion.div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Join the <span className="text-vault-gradient">VaultX</span> Waitlist
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                            Be the first to know when we launch new features, skills, and integrations.
                            Get exclusive early access to VaultX beta.
                        </p>

                        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    disabled={status === "loading" || status === "success"}
                                    className="flex-1 px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all backdrop-blur-xl disabled:opacity-50"
                                />
                                <button
                                    type="submit"
                                    disabled={status === "loading" || status === "success"}
                                    className="btn-vault whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? "Joining..." : status === "success" ? "Joined!" : "Join Waitlist"}
                                </button>
                            </div>

                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-4 flex items-center justify-center gap-2 text-primary"
                                >
                                    <CheckCircle2 className="w-5 h-5" />
                                    <span className="text-sm font-medium">Successfully joined the waitlist!</span>
                                </motion.div>
                            )}

                            {status === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-4 text-destructive text-sm"
                                >
                                    Please enter a valid email address
                                </motion.div>
                            )}
                        </form>

                        <p className="text-xs text-muted-foreground mt-6">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default NewsletterSection;
