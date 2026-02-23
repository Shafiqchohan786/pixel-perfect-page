import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import BrowserMockup from "@/components/BrowserMockup";
import NFTCollections from "@/components/NFTCollections";
import FeatureCard from "@/components/FeatureCard";
import cosmicOrb from "@/assets/cosmic-orb.png";
import { Zap, ShieldCheck, Rocket, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <Globe className="w-4 h-4 text-primary" />
          </div>
          <span className="font-display font-bold text-foreground text-lg tracking-tight">iilloo</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Features</a>
          <a href="#" className="hover:text-foreground transition-colors">Docs</a>
          <a href="#" className="hover:text-foreground transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground hidden sm:block">English</span>
          <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            Launch App
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 px-6 md:px-12 pt-12 md:pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Hero Text + Mockups */}
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="inline-block px-3 py-1 rounded-full border border-border text-xs text-muted-foreground tracking-widest uppercase">
                  No-Code Web3 Builder
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                  <span className="text-gradient-hero">Build Any Web3 App</span>
                  <br />
                  <span className="text-foreground">Instantly</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                  Like Lovable, but for blockchain. AI-powered smart contracts, automated testing, one-click deployment.
                </p>
                <div className="flex gap-3 pt-2">
                  <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow-primary">
                    Start Building
                  </button>
                  <button className="px-6 py-3 rounded-xl glass text-foreground font-medium hover:bg-muted/80 transition-colors">
                    Watch Demo
                  </button>
                </div>
              </motion.div>

              {/* Browser mockups stacked */}
              <div className="space-y-6">
                <BrowserMockup />
                <NFTCollections />
              </div>
            </div>

            {/* Right: Features */}
            <div className="space-y-10 lg:pt-32">
              <div className="space-y-8">
                <FeatureCard
                  icon={<Zap className="w-5 h-5 text-primary" />}
                  title="Instant Creation"
                  description="Describe your Web3 app in natural language. Watch AI generate smart contracts, UI and tests in real-time."
                  delay={0.1}
                />
                <FeatureCard
                  icon={<ShieldCheck className="w-5 h-5 text-accent" />}
                  title="Auto-Audited"
                  description="Every smart contract is automatically tested and audited for security vulnerabilities before deployment."
                  delay={0.2}
                />
                <FeatureCard
                  icon={<Rocket className="w-5 h-5 text-secondary" />}
                  title="One-Click Deploy"
                  description="Deploy to any blockchain network instantly. No configuration, no DevOps, no hassle."
                  delay={0.3}
                />
              </div>

              {/* Powered by section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass rounded-xl p-6 flex items-center gap-4"
              >
                <img
                  src={cosmicOrb}
                  alt="Evumus AI"
                  className="w-14 h-14 rounded-full animate-float"
                />
                <div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Powered by</div>
                  <div className="font-display font-bold text-foreground text-lg">Evumus AI Network</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Every app built on iilloo is powered by the Evumus token ecosystem, creating value for miners and token holders.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/30 px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© 2026 iilloo. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
