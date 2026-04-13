import SectionWrapper from "@/components/SectionWrapper";
import CtaButton from "@/components/CtaButton";
import { motion } from "framer-motion";
import { Check, Shield, Truck } from "lucide-react";

const OfferSection = () => (
  <SectionWrapper id="oferta">
    <div className="max-w-lg mx-auto text-center">
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">Oferta especial</p>

      <p className="text-muted-foreground line-through text-xl mb-3">De R$497</p>

      <div className="mb-4">
        <span className="inline-block bg-destructive text-destructive-foreground text-xs tracking-[0.15em] uppercase font-medium px-4 py-1.5">
          🔥 Oferta Especial
        </span>
      </div>

      <motion.p
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring" }}
        className="font-serif text-6xl md:text-7xl font-medium text-cta mb-3"
      >
        R$297
      </motion.p>
      <p className="text-muted-foreground tracking-wide mb-10">
        ou em até <span className="font-medium text-foreground">12x no cartão</span>
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
        {[
          { icon: Truck, text: "Frete grátis" },
          { icon: Shield, text: "Garantia de 7 dias" },
          { icon: Check, text: "Envio imediato" },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2">
            <Icon className="w-4 h-4 text-cta" strokeWidth={1.5} />
            <span className="text-xs tracking-[0.15em] uppercase text-foreground">{text}</span>
          </div>
        ))}
      </div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <CtaButton size="xl" showArrow>
          Garantir o meu agora
        </CtaButton>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default OfferSection;
