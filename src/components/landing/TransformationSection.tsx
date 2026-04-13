import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
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
    <div className="text-center mb-16">
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Transformação</p>
      <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground leading-tight">
        Agora imagina isso:
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-0 max-w-3xl mx-auto border border-border">
      {/* Before */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-10 md:p-12 bg-surface md:border-r border-b md:border-b-0 border-border"
      >
        <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">Antes</h3>
        <ul className="space-y-5">
          {before.map((item) => (
            <li key={item} className="flex items-center gap-4">
              <X className="w-4 h-4 text-destructive flex-shrink-0" strokeWidth={2} />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* After */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="p-10 md:p-12"
      >
        <h3 className="text-xs tracking-[0.3em] uppercase text-cta mb-8">Depois</h3>
        <ul className="space-y-5">
          {after.map((item) => (
            <li key={item} className="flex items-center gap-4">
              <Check className="w-4 h-4 text-cta flex-shrink-0" strokeWidth={2.5} />
              <span className="text-foreground font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>

    <p className="text-center font-serif text-2xl md:text-3xl italic text-foreground mt-16">
      Isso muda completamente sua rotina.
    </p>
  </SectionWrapper>
);

export default TransformationSection;
