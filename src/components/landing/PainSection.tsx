import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, MapPin, ShieldOff, Timer } from "lucide-react";

const pains = [
  { icon: Clock, text: "Parar toda hora pra olhar o celular" },
  { icon: MapPin, text: "Se arriscar no trânsito tentando ver rota" },
  { icon: Timer, text: "Perder corrida por atraso" },
  { icon: ShieldOff, text: "Ficar vulnerável a roubo" },
];

const PainSection = () => (
  <SectionWrapper alt>
    <div className="text-center mb-16">
      <p className="text-xs tracking-[0.3em] uppercase text-background/50 mb-6">A realidade</p>
      <h2 className="font-serif text-3xl md:text-5xl font-medium text-background leading-tight">
        Se você usa moto no dia a dia,<br className="hidden md:block" /> sabe como é:
      </h2>
    </div>

    <div className="max-w-2xl mx-auto space-y-4">
      {pains.map(({ icon: Icon, text }, i) => (
        <motion.div
          key={text}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="flex items-center gap-5 border-b border-background/10 py-5"
        >
          <Icon className="w-5 h-5 text-destructive flex-shrink-0" strokeWidth={1.5} />
          <span className="text-background/80 text-lg tracking-wide">{text}</span>
        </motion.div>
      ))}
    </div>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="text-center text-xl md:text-2xl text-background mt-16 max-w-lg mx-auto leading-relaxed"
    >
      Isso não é só desconforto…{" "}
      <span className="font-serif italic text-destructive">isso te faz perder dinheiro todos os dias.</span>
    </motion.p>
  </SectionWrapper>
);

export default PainSection;
