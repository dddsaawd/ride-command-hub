import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { Smartphone, Monitor, Zap } from "lucide-react";

const ValueSection = () => (
  <SectionWrapper alt>
    <div className="text-center mb-16">
      <p className="text-xs tracking-[0.3em] uppercase text-background/50 mb-6">Comparativo</p>
      <h2 className="font-serif text-3xl md:text-5xl font-medium text-background leading-tight">
        Quanto custa hoje?
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-0 max-w-4xl mx-auto border border-background/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center p-10 border-b md:border-b-0 md:border-r border-background/10"
      >
        <Smartphone className="w-8 h-8 text-background/40 mx-auto mb-6" strokeWidth={1.5} />
        <p className="text-background/50 text-xs tracking-[0.2em] uppercase mb-3">Um celular novo</p>
        <p className="text-3xl font-serif text-background">R$2.000+</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center p-10 border-b md:border-b-0 md:border-r border-background/10"
      >
        <Monitor className="w-8 h-8 text-background/40 mx-auto mb-6" strokeWidth={1.5} />
        <p className="text-background/50 text-xs tracking-[0.2em] uppercase mb-3">Painel original</p>
        <p className="text-3xl font-serif text-background">R$3.000+</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center p-10 bg-cta/10"
      >
        <Zap className="w-8 h-8 text-cta mx-auto mb-6" strokeWidth={1.5} />
        <p className="text-cta text-xs tracking-[0.2em] uppercase font-medium mb-3">AutoBike Painel</p>
        <p className="text-4xl font-serif text-cta">R$297</p>
        <p className="text-background/50 text-xs tracking-wide mt-2">Os dois em um</p>
      </motion.div>
    </div>

    <p className="text-center text-background/60 tracking-wide mt-12">
      Agora você tem os dois por uma <span className="text-background font-medium">fração disso.</span>
    </p>
  </SectionWrapper>
);

export default ValueSection;
