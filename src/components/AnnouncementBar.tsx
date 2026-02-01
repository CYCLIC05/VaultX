import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="fixed top-16 left-0 right-0 z-40 bg-primary/10 border-b border-primary/20"
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-center gap-2 text-sm">
          <Sparkles size={14} className="text-primary" />
          <span className="text-muted-foreground">
            <span className="text-primary font-semibold">NEW:</span> Launch self-sustaining AI agents.
          </span>
          <a href="#" className="text-primary hover:underline flex items-center gap-1">
            Explore Skills <ExternalLink size={12} />
          </a>
          <span className="text-muted-foreground">or check out the</span>
          <a href="#" className="text-primary hover:underline flex items-center gap-1">
            Leaderboard <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default AnnouncementBar;
