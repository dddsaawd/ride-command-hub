import SectionWrapper from "@/components/SectionWrapper";
import CtaButton from "@/components/CtaButton";
import { motion } from "framer-motion";

const FinalCtaSection = () => (
  <SectionWrapper>
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">Decisão</p>

      <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
        Se você trabalha com moto…
      </h2>
      <p className="text-xl text-muted-foreground mb-2 tracking-wide">
        isso aqui não é acessório.
      </p>
      <p className="font-serif text-2xl md:text-3xl italic text-cta mb-12">
        É ferramenta de trabalho.
      </p>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <CtaButton
          size="xl"
          showArrow
          onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
        >
          Quero transformar minha moto
        </CtaButton>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default FinalCtaSection;
