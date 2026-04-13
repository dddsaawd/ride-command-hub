import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  { label: "Usando Waze na estrada", emoji: "🗺️" },
  { label: "Moto em movimento", emoji: "🏍️" },
  { label: "Tocando música", emoji: "🎵" },
];

const ProofSection = () => (
  <SectionWrapper alt>
    <div className="text-center mb-16">
      <p className="text-xs tracking-[0.3em] uppercase text-background/50 mb-6">Na prática</p>
      <h2 className="font-serif text-3xl md:text-5xl font-medium text-background leading-tight">
        Veja funcionando 👇
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {videos.map(({ label, emoji }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative aspect-[9/16] bg-background/5 border border-background/10 flex flex-col items-center justify-center cursor-pointer hover:bg-background/10 transition-colors group"
        >
          <span className="text-5xl mb-6">{emoji}</span>
          <div className="w-14 h-14 border border-background/30 flex items-center justify-center group-hover:bg-cta group-hover:border-cta transition-all">
            <Play className="w-5 h-5 text-background ml-0.5" />
          </div>
          <p className="mt-6 text-xs tracking-[0.15em] uppercase text-background/60">{label}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProofSection;
