import { motion } from "framer-motion";
import {
  TrendingUp,
  Code2,
  Shield,
  Wrench,
  MessageSquare,
  Palette,
  BarChart3,
} from "lucide-react";

const employees = [
  {
    name: "Marketing",
    icon: TrendingUp,
    subtitle: "Autonomous campaigns",
    task: "Optimizing ad spend...",
    color: "text-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/5",
  },
  {
    name: "Engineering",
    icon: Code2,
    subtitle: "Self-coding systems",
    task: "Writing unit tests...",
    color: "text-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/5",
  },
  {
    name: "Security",
    icon: Shield,
    subtitle: "Real-time protection",
    task: "Blocking threats...",
    color: "text-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/5",
  },
  {
    name: "Product",
    icon: Wrench,
    subtitle: "User-driven evolution",
    task: "Conducting user research...",
    color: "text-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/5",
  },
  {
    name: "Sales",
    icon: MessageSquare,
    subtitle: "24/7 conversion",
    task: "Qualifying leads...",
    color: "text-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/5",
  },
  {
    name: "Design",
    icon: Palette,
    subtitle: "Infinite creativity",
    task: "Creating assets...",
    color: "text-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/5",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    subtitle: "Perfect predictions",
    task: "Predicting trends...",
    color: "text-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/5",
  },
];

const AIEmployeesHub = () => {
  return (
    <section className="relative px-6 md:px-12 py-20 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/3 blur-[120px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-wider uppercase mb-4">
          AI Employees Hub
        </h2>
        <div className="flex items-center justify-center gap-3 text-xs md:text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="text-primary">∞</span> CONNECTIONS
          </span>
          <span className="text-border">|</span>
          <span className="flex items-center gap-1.5">
            <span className="text-primary">⚡</span> PROCESSING
          </span>
          <span className="text-border">|</span>
          <span>99.9% UPTIME</span>
        </div>
      </motion.div>

      {/* Cards grid - horizontal on large screens */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {employees.map((emp, i) => {
            const Icon = emp.icon;
            return (
              <motion.div
                key={emp.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`glass rounded-xl border ${emp.borderColor} p-4 cursor-pointer group transition-colors hover:border-primary/60`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-3 rounded-xl ${emp.bgColor} border ${emp.borderColor} flex items-center justify-center group-hover:glow-primary transition-shadow`}>
                  <Icon className={`w-7 h-7 ${emp.color}`} />
                </div>

                {/* Name + badge */}
                <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                  <span className="font-display font-bold text-foreground text-sm">
                    {emp.name}
                  </span>
                  <span className="px-1.5 py-0.5 text-[8px] font-bold rounded bg-primary/20 text-primary border border-primary/30">
                    AI
                  </span>
                  <span className="text-[10px] text-muted-foreground">Employee</span>
                </div>

                {/* Subtitle */}
                <p className="text-xs text-muted-foreground mb-3">{emp.subtitle}</p>

                {/* Active task */}
                <div className="flex items-center gap-1.5">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-[10px] text-primary font-mono truncate">
                    {emp.task}
                  </span>
                  <motion.span
                    className="text-primary text-xs"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIEmployeesHub;
