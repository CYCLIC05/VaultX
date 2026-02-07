import { motion } from "framer-motion";
import { Twitter, MessageCircle, ExternalLink, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-mono font-bold text-primary-foreground text-sm">V</span>
              </div>
              <span className="font-mono font-bold text-lg tracking-tight">VAULT</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md mb-6">
              The AI agent on TON that watches your wallets, bridges to Sui, Sei & Monad,
              and executes trades. Built for the next generation of on-chain traders.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent transition-colors border border-border">
                <Twitter size={18} className="text-muted-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent transition-colors border border-border">
                <MessageCircle size={18} className="text-muted-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent transition-colors border border-border">
                <Github size={18} className="text-muted-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terminal</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Earn</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Developers</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">Documentation <ExternalLink size={12} /></a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">API Reference <ExternalLink size={12} /></a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">GitHub <ExternalLink size={12} /></a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">Skills <ExternalLink size={12} /></a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Vault. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
