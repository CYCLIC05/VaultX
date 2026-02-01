import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-mono font-bold text-primary-foreground text-sm">V</span>
            </div>
            <span className="font-mono font-bold text-lg tracking-tight">VAULT</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#earn" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Earn
            </a>
            <a href="#connect" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Connect
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              Docs <ExternalLink size={12} />
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="hidden sm:flex text-sm text-muted-foreground hover:text-primary transition-colors font-mono items-center gap-1"
            >
              $VAULT <ExternalLink size={12} />
            </a>
            <button className="btn-vault text-sm py-2 px-4">
              Launch Terminal
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
