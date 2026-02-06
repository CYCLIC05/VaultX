import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface FloatingCharacterProps {
  src: string;
  alt: string;
  className?: string;
  size?: number;
  floatDelay?: number;
  parallaxSpeed?: number;
}

const FloatingCharacter = ({ 
  src, alt, className = "", size = 200, floatDelay = 0, parallaxSpeed = 0.3 
}: FloatingCharacterProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50 * parallaxSpeed, -50 * parallaxSpeed]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      className={`pointer-events-none select-none ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="drop-shadow-[0_0_30px_rgba(0,255,127,0.3)]"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        }}
      />
    </motion.div>
  );
};

export default FloatingCharacter;
