import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import BrowserMockup from "@/components/BrowserMockup";
import NFTCollections from "@/components/NFTCollections";
import cosmicOrb from "@/assets/cosmic-orb.png";
import { Zap, ShieldCheck, Rocket, Sparkles, ArrowRight } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

interface FeatureItemProps {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  description: string;
  index: number;
}

const FeatureItem = ({ icon, iconColor, title, description, index }: FeatureItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeRight}
      transition={{ delay: index * 0.15 }}
      className="group flex gap-5 items-start p-4 rounded-2xl hover:bg-muted/30 transition-colors duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${iconColor}`}
      >
        {icon}
      </motion.div>
      <div>
        <h3 className="text-xl font-display font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const IillooPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <section className="relative overflow-hidden">
      <ParticleBackground />

      {/* Ambient glow effects */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/3 blur-[150px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16 pt-16 md:pt-24 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left Column: Hero Text + Mockups */}
            <motion.div
              ref={heroRef}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={stagger}
              className="space-y-10"
            >
              {/* Badge */}
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs text-primary font-medium tracking-widest uppercase">
                  <Sparkles className="w-3 h-3" />
                  No-Code Web3 Builder
                </span>
              </motion.div>

              {/* Heading */}
              <motion.div variants={fadeUp} className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight">
                  <span className="text-gradient-hero">Build Any</span>
                  <br />
                  <span className="text-gradient-hero">Web3 App</span>
                  <br />
                  <span className="text-foreground">Instantly</span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed"
              >
                Like Lovable, but for blockchain. AI-powered smart contracts, automated testing, one-click deployment.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 0 30px hsla(170, 80%, 50%, 0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center gap-2 glow-primary transition-all"
                >
                  Start Building
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-xl glass text-foreground font-semibold text-sm hover:bg-muted/60 transition-all"
                >
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Browser Mockups */}
              <div className="space-y-6 pt-4">
                <BrowserMockup />
                <NFTCollections />
              </div>
            </motion.div>

            {/* Right Column: Features + Evumus */}
            <div className="space-y-8 lg:pt-28">
              {/* Features */}
              <div className="space-y-2">
                <FeatureItem
                  icon={<Zap className="w-6 h-6 text-primary" />}
                  iconColor="bg-primary/10 border border-primary/20"
                  title="Instant Creation"
                  description="Describe your Web3 app in natural language. Watch AI generate smart contracts, UI and tests in real-time."
                  index={0}
                />
                <FeatureItem
                  icon={<ShieldCheck className="w-6 h-6 text-accent" />}
                  iconColor="bg-accent/10 border border-accent/20"
                  title="Auto-Audited"
                  description="Every smart contract is automatically tested and audited for security vulnerabilities before deployment."
                  index={1}
                />
                <FeatureItem
                  icon={<Rocket className="w-6 h-6 text-secondary" />}
                  iconColor="bg-secondary/10 border border-secondary/20"
                  title="One-Click Deploy"
                  description="Deploy to any blockchain network instantly. No configuration, no DevOps, no hassle."
                  index={2}
                />
              </div>

              {/* Powered by Evumus */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={scaleIn}
                className="glass-strong rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-start gap-5">
                  <motion.img
                    src={cosmicOrb}
                    alt="Evumus AI Network"
                    className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="flex-1">
                    <div className="text-[10px] text-primary/80 uppercase tracking-[0.2em] font-medium mb-1">
                      Powered by
                    </div>
                    <h3 className="font-display font-bold text-foreground text-xl md:text-2xl mb-2">
                      Evumus AI Network
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Every app built on iilloo is powered by the Evumus token ecosystem, creating value for miners and token holders.
                    </p>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border/30">
                  {[
                    { label: "Total Value Locked", value: "$2.4B" },
                    { label: "Active Builders", value: "12.5K" },
                    { label: "Deployed Apps", value: "48K+" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-lg md:text-xl font-display font-bold text-gradient-primary">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass rounded-2xl p-5 flex items-center justify-between group cursor-pointer hover:border-primary/30 transition-colors"
              >
                <div>
                  <div className="text-sm font-display font-semibold text-foreground">Ready to build?</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Start your first Web3 app in under 60 seconds</div>
                </div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"
                >
                  <ArrowRight className="w-4 h-4 text-primary" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IillooPage;
