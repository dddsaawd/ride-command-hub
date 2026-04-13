import SectionWrapper from "@/components/SectionWrapper";
import { AlertTriangle, Clock, MapPin, Phone, ShieldOff } from "lucide-react";

const pains = [
  { icon: Clock, text: "Parar toda hora pra olhar o celular" },
  { icon: MapPin, text: "Se arriscar no trânsito tentando ver rota" },
  { icon: AlertTriangle, text: "Perder corrida por atraso" },
  { icon: ShieldOff, text: "Ficar vulnerável a roubo" },
];

const PainSection = () => (
  <SectionWrapper alt>
    <h2 className="font-display text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
      Se você usa moto no dia a dia, sabe como é:
    </h2>
    <div className="max-w-2xl mx-auto mt-10 space-y-5">
      {pains.map(({ icon: Icon, text }) => (
        <div key={text} className="flex items-center gap-4 bg-destructive/5 border border-destructive/10 rounded-xl p-4">
          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-destructive" />
          </span>
          <span className="text-foreground font-medium text-lg">{text}</span>
        </div>
      ))}
    </div>
    <div className="text-center mt-10">
      <p className="text-xl md:text-2xl font-bold text-foreground">
        👉 Isso não é só desconforto…{" "}
        <span className="text-destructive">isso te faz perder dinheiro todos os dias</span>
      </p>
    </div>
  </SectionWrapper>
);

export default PainSection;
