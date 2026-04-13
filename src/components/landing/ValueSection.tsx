import SectionWrapper from "@/components/SectionWrapper";
import { Smartphone, Monitor, Zap } from "lucide-react";

const ValueSection = () => (
  <SectionWrapper>
    <h2 className="font-display text-2xl md:text-4xl font-bold text-center text-foreground mb-12">
      Quanto custa hoje?
    </h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
      <div className="text-center bg-surface rounded-2xl p-8 border border-border">
        <Smartphone className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground font-medium mb-2">Um celular novo</p>
        <p className="text-2xl font-bold text-foreground">R$2.000+</p>
      </div>
      <div className="text-center bg-surface rounded-2xl p-8 border border-border">
        <Monitor className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground font-medium mb-2">Painel original</p>
        <p className="text-2xl font-bold text-foreground">R$3.000+</p>
      </div>
      <div className="text-center bg-primary/5 rounded-2xl p-8 border-2 border-primary/30">
        <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
        <p className="text-primary font-bold mb-2">AutoBike Painel</p>
        <p className="text-3xl font-bold text-primary">R$297</p>
        <p className="text-sm text-muted-foreground mt-1">Os dois em um</p>
      </div>
    </div>
    <p className="text-center text-lg text-muted-foreground mt-8">
      Agora você tem os dois por uma <span className="font-bold text-foreground">fração disso.</span>
    </p>
  </SectionWrapper>
);

export default ValueSection;
