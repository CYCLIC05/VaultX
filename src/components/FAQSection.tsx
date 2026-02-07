import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What is VaultX?",
        answer: "VaultX is an AI-powered agent on the TON blockchain that helps you trade, bridge assets across chains (Sui, Sei, Monad), and manage your DeFi activities. It's designed to be self-sustaining through trading fees."
    },
    {
        question: "How does the cross-chain bridging work?",
        answer: "VaultX uses secure bridge protocols to move your assets between TON, Sui, Sei, and Monad blockchains. The AI agent finds the best routes and rates automatically, ensuring fast and cost-effective transfers."
    },
    {
        question: "What are Vault Skills?",
        answer: "Vault Skills are community-built plugins that extend your agent's capabilities. You can install skills for trading strategies, DeFi protocols, analytics, and more with just one click."
    },
    {
        question: "How do agents fund themselves?",
        answer: "When you launch a token through VaultX, a portion of the trading fees automatically goes toward funding your agent's compute costs. This creates a self-sustaining ecosystem where successful tokens support their own AI agents."
    },
    {
        question: "Is VaultX secure?",
        answer: "Yes! VaultX uses industry-standard security practices including non-custodial wallets, encrypted communications, and audited smart contracts. You always maintain control of your private keys."
    },
    {
        question: "What networks does VaultX support?",
        answer: "Currently, VaultX supports TON as the primary network, with cross-chain bridging to Sui, Sei, and Monad. We're continuously expanding to more networks based on community demand."
    }
];

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card overflow-hidden"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-accent/50 transition-colors"
            >
                <h3 className="font-semibold text-base md:text-lg pr-4">{question}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                </motion.div>
            </button>
            <motion.div
                initial={false}
                animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <div className="px-6 pb-5 pt-2">
                    <p className="text-muted-foreground leading-relaxed">{answer}</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const FAQSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} id="faq" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-20" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Frequently Asked <span className="text-vault-gradient">Questions</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to know about VaultX and how it works
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
