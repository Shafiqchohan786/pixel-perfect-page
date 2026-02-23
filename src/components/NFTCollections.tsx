import { motion } from "framer-motion";
import cosmicOrb from "@/assets/cosmic-orb.png";

const collections = [
  { name: "Cosmic Apes", price: "3.33 ETH", floor: "Floor" },
  { name: "Cyber Punks", price: "4.25 ETH", floor: "Floor" },
];

const NFTCollections = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="glass rounded-xl overflow-hidden max-w-md w-full"
  >
    {/* Browser bar */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
      </div>
      <div className="flex-1 mx-4">
        <div className="bg-muted rounded-md px-3 py-1 text-xs text-muted-foreground">
          app.iilloo.xyz
        </div>
      </div>
    </div>

    <div className="p-5">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-display font-semibold text-foreground">Featured Collections</h4>
        <button className="text-xs text-primary hover:underline">View all</button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {collections.map((col, i) => (
          <div key={col.name} className="group cursor-pointer">
            <div className="relative rounded-lg overflow-hidden mb-2 aspect-square bg-muted">
              <img
                src={cosmicOrb}
                alt={col.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                style={{ filter: i === 1 ? "hue-rotate(60deg)" : "none" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="text-xs font-medium text-foreground">{col.name}</div>
            <div className="flex justify-between text-[10px] text-muted-foreground mt-0.5">
              <span>{col.floor}</span>
              <span className="text-primary">{col.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default NFTCollections;
