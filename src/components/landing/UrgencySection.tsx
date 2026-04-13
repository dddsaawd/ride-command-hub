import SectionWrapper from "@/components/SectionWrapper";
import { AlertTriangle } from "lucide-react";

const UrgencySection = () => (
  <SectionWrapper>
    <div className="max-w-2xl mx-auto text-center bg-highlight/5 border-2 border-highlight/30 rounded-2xl p-8 md:p-12">
      <AlertTriangle className="w-12 h-12 text-highlight mx-auto mb-4" />
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
        🚨 Atenção: Unidades Limitadas
      </h2>
      <p className="text-lg text-muted-foreground">
        Devido à alta demanda, estamos liberando{" "}
        <span className="font-bold text-foreground">poucas unidades por lote.</span>
      </p>
      <p className="text-xl font-bold text-highlight mt-4">
        👉 Pode esgotar a qualquer momento
      </p>
    </div>
  </SectionWrapper>
);

export default UrgencySection;
