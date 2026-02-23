import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import aiMonolith from "@/assets/ai-monolith.png";

const floatingBinary = [
  { text: "11111011", x: "35%", y: "20%", delay: 0 },
  { text: "01101111", x: "38%", y: "25%", delay: 0.5 },
  { text: "00001100", x: "62%", y: "18%", delay: 1 },
  { text: "100000", x: "68%", y: "14%", delay: 1.5 },
  { text: "11000001", x: "32%", y: "35%", delay: 0.8 },
  { text: "00010101", x: "45%", y: "30%", delay: 1.2 },
  { text: "00110011", x: "40%", y: "42%", delay: 0.3 },
  { text: "11011000", x: "65%", y: "38%", delay: 0.7 },
  { text: "11100010", x: "60%", y: "45%", delay: 1.8 },
  { text: "00001000", x: "55%", y: "50%", delay: 1.4 },
  { text: "01011000", x: "30%", y: "60%", delay: 2 },
];

const typingTexts = ["For You 24/7", "While You Sleep", "Non-Stop"];

const AIEmployeesHero = () => {
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typingTexts[typingIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTypingIndex((prev) => (prev + 1) % typingTexts.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? current.slice(0, displayText.length - 1)
              : current.slice(0, displayText.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, typingIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      {/* Floating binary */}
      {floatingBinary.map((b, i) => (
        <motion.span
          key={i}
          className="absolute text-[10px] md:text-xs font-mono text-primary/30 pointer-events-none select-none hidden md:block"
          style={{ left: b.x, top: b.y }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 0.4, 0], y: [10, -20, -40] }}
          transition={{ duration: 5, delay: b.delay, repeat: Infinity, ease: "easeOut" as const }}
        >
          {b.text}
        </motion.span>
      ))}

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center relative z-10 mb-6"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
          <span className="text-gradient-hero">AI Employees</span>
          <br />
          <span className="text-gradient-hero">That Work </span>
          <span className="text-foreground border-r-2 border-primary animate-pulse">
            {displayText}
          </span>
        </h2>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-muted-foreground text-base md:text-lg max-w-2xl mb-12 relative z-10"
      >
        While AI replaces human jobs, you'll own the AI working as a replacement.{" "}
        <span className="text-primary font-semibold">You earn while AI works.</span>
      </motion.p>

      {/* Decorative side bars */}
      <div className="absolute left-[20%] top-1/2 hidden lg:flex flex-col gap-1.5 -translate-y-1/2">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="h-1 rounded-full bg-accent/40"
            style={{ width: `${24 - i * 4}px` }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
          />
        ))}
      </div>
      <div className="absolute right-[20%] top-1/2 hidden lg:flex flex-col gap-1.5 -translate-y-1/2 items-end">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="h-1 rounded-full bg-accent/40"
            style={{ width: `${24 - i * 4}px` }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, delay: i * 0.3 + 1, repeat: Infinity }}
          />
        ))}
      </div>

      {/* AI Monolith image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 max-w-sm md:max-w-md w-full"
      >
        <img
          src={aiMonolith}
          alt="AI Monolith"
          className="w-full h-auto rounded-2xl"
        />
        {/* Glow under image */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-primary/20 blur-[40px] rounded-full" />
      </motion.div>

      {/* Hex code decoration */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        className="absolute top-[15%] left-1/2 -translate-x-1/2 text-[10px] font-mono text-primary/30 tracking-widest hidden md:block"
      >
        CAFE 0xFACE 0x1337 0x4CD
      </motion.span>
    </section>
  );
};

export default AIEmployeesHero;
