import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const UrgencySection = () => (
  <SectionWrapper alt>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto text-center"
    >
      <AlertTriangle className="w-10 h-10 text-highlight mx-auto mb-6" strokeWidth={1.5} />
      <h2 className="font-serif text-3xl md:text-4xl font-medium text-background mb-6">
        Unidades Limitadas
      </h2>
      <p className="text-background/60 tracking-wide leading-relaxed mb-4">
        Devido à alta demanda, estamos liberando{" "}
        <span className="text-background font-medium">poucas unidades por lote.</span>
      </p>
      <p className="font-serif text-xl italic text-highlight">
        Pode esgotar a qualquer momento.
      </p>
    </motion.div>
  </SectionWrapper>
);

export default UrgencySection;
