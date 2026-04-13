import SectionWrapper from "@/components/SectionWrapper";
import { Play } from "lucide-react";

const videos = [
  { label: "Usando Waze na estrada", placeholder: "🗺️" },
  { label: "Moto em movimento", placeholder: "🏍️" },
  { label: "Tocando música", placeholder: "🎵" },
];

const ProofSection = () => (
  <SectionWrapper>
    <h2 className="font-display text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
      Veja funcionando na prática 👇
    </h2>
    <p className="text-center text-muted-foreground mb-12">
      Resultados reais de quem já usa o painel AutoBike.
    </p>

    <div className="grid md:grid-cols-3 gap-6">
      {videos.map(({ label, placeholder }) => (
        <div
          key={label}
          className="relative aspect-[9/16] bg-surface rounded-2xl border border-border flex flex-col items-center justify-center cursor-pointer hover:border-primary/40 transition-colors group"
        >
          <span className="text-5xl mb-4">{placeholder}</span>
          <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
            <Play className="w-6 h-6 text-primary ml-1" />
          </div>
          <p className="mt-4 text-sm font-medium text-muted-foreground">{label}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProofSection;
