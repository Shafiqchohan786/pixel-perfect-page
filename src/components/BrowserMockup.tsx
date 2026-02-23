import { motion } from "framer-motion";

const BrowserMockup = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="glass rounded-xl overflow-hidden max-w-md w-full"
  >
    {/* Browser top bar */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
      </div>
      <div className="flex-1 mx-4">
        <div className="bg-muted rounded-md px-3 py-1 text-xs text-muted-foreground flex items-center gap-2">
          <span className="text-primary">🔒</span> app.iilloo.xyz
        </div>
      </div>
    </div>

    {/* Sidebar + Content */}
    <div className="flex">
      {/* Sidebar */}
      <div className="w-36 border-r border-border/30 p-3 space-y-3">
        <div className="text-xs font-medium text-muted-foreground">Evumus Systems v3.1.4</div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-foreground/80 bg-muted/50 rounded-md px-2 py-1.5">
            <span>📊</span> Dashboard
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground px-2 py-1.5">
            <span>🎨</span> Design
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground px-2 py-1.5">
            <span>📦</span> Deploy
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 space-y-3">
        <div className="text-xs text-muted-foreground">Portfolio</div>

        {/* Portfolio value */}
        <div className="text-right text-xs text-muted-foreground">$24,567.32</div>

        {/* Crypto cards */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: "BTC", value: "$4,265.98", change: "+3.8%", positive: true },
            { name: "ETH", value: "$3,737.41", change: "+5.0%", positive: true },
            { name: "SOL", value: "$5,118.73", change: "+11.17%", positive: true },
            { name: "USDC", value: "$5,339.42", change: "+1.8%", positive: true },
          ].map((coin) => (
            <div key={coin.name} className="bg-muted/50 rounded-lg p-2">
              <div className="text-[10px] text-muted-foreground font-medium">{coin.name}</div>
              <div className="text-xs font-semibold text-foreground">{coin.value}</div>
              <div className="text-[10px] text-primary">{coin.change}</div>
            </div>
          ))}
        </div>

        {/* Building indicator */}
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-[10px] text-muted-foreground">Building...</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default BrowserMockup;
