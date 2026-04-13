import SectionWrapper from "@/components/SectionWrapper";
import { Check, X } from "lucide-react";

const before = [
  "Celular no bolso",
  "Atraso constante",
  "Risco de acidente",
  "Menos entregas",
];

const after = [
  "GPS sempre aberto",
  "Apps rodando na tela",
  "Chamadas sem parar",
  "Mais entregas no dia",
];

const TransformationSection = () => (
  <SectionWrapper>
    <h2 className="font-display text-2xl md:text-4xl font-bold text-center text-foreground mb-12">
      Agora imagina isso:
    </h2>

    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {/* Before */}
      <div className="bg-surface rounded-2xl p-8 border border-border">
        <h3 className="font-display text-xl font-bold text-destructive mb-6 text-center">ANTES</h3>
        <ul className="space-y-4">
          {before.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-4 h-4 text-destructive" />
              </span>
              <span className="text-muted-foreground font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* After */}
      <div className="bg-primary/5 rounded-2xl p-8 border-2 border-primary/20">
        <h3 className="font-display text-xl font-bold text-primary mb-6 text-center">DEPOIS</h3>
        <ul className="space-y-4">
          {after.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-4 h-4 text-primary" />
              </span>
              <span className="text-foreground font-semibold">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <p className="text-center text-xl md:text-2xl font-bold text-foreground mt-10">
      👉 Isso muda completamente sua rotina
    </p>
  </SectionWrapper>
);

export default TransformationSection;
