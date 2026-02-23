import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import aiPortal from "@/assets/ai-portal.png";

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];

const JoinRevolution = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      {/* Portal background image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.img
          src={aiPortal}
          alt=""
          className="w-full h-full object-cover opacity-40"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-8"
      >
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border bg-muted/30 backdrop-blur-sm text-sm text-muted-foreground">
          <Sparkles className="w-4 h-4 text-accent" />
          Join the AI Revolution
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-center leading-tight mb-12"
      >
        <span className="text-foreground">Ready to own</span>
        <br />
        <span className="text-gradient-hero">AI Future</span>
        <span className="text-foreground">?</span>
      </motion.h2>

      {/* Join Us Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative z-10 mb-10"
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsla(170, 80%, 50%, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 rounded-xl border-2 border-primary/50 bg-primary/10 backdrop-blur-sm text-foreground font-display font-bold text-lg flex items-center gap-3 glow-primary transition-all hover:bg-primary/20 hover:border-primary"
        >
          Join Us
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative z-10 flex items-center gap-5"
      >
        {socialLinks.map((social, i) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.label}
              href={social.href}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-xl glass border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:glow-primary transition-all"
              aria-label={social.label}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          );
        })}
      </motion.div>

      {/* Decorative sparkle */}
      <motion.div
        className="absolute z-10 bottom-[20%] right-[35%]"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="w-8 h-8 text-accent/40" />
      </motion.div>
    </section>
  );
};

export default JoinRevolution;
