import { motion } from "framer-motion";
import { ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-mono font-bold text-primary-foreground text-sm">V</span>
            </div>
            <span className="font-mono font-bold text-lg tracking-tight">VAULT</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#earn" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Earn</a>
            <a href="#connect" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Connect</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              Docs <ExternalLink size={12} />
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="#" className="hidden sm:flex text-sm text-muted-foreground hover:text-primary transition-colors font-mono items-center gap-1">
              $VAULT <ExternalLink size={12} />
            </a>
            <button className="btn-vault text-sm py-2 px-4">Launch Terminal</button>
            <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="md:hidden pb-4 flex flex-col gap-3"
          >
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2">Features</a>
            <a href="#earn" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2">Earn</a>
            <a href="#connect" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2">Connect</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 flex items-center gap-1">
              Docs <ExternalLink size={12} />
            </a>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
