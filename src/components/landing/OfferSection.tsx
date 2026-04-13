import SectionWrapper from "@/components/SectionWrapper";
import CtaButton from "@/components/CtaButton";
import { Check, Shield, Truck } from "lucide-react";

const OfferSection = () => (
  <SectionWrapper alt id="oferta">
    <div className="max-w-lg mx-auto text-center">
      <p className="text-muted-foreground line-through text-2xl mb-2">De R$497</p>
      <div className="mb-2">
        <span className="inline-block bg-destructive text-destructive-foreground text-sm font-bold px-4 py-1 rounded-full">
          🔥 OFERTA ESPECIAL
        </span>
      </div>
      <p className="font-display text-5xl md:text-6xl font-bold text-primary mb-2">R$297</p>
      <p className="text-muted-foreground text-lg mb-8">ou em até <span className="font-bold text-foreground">12x no cartão</span></p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
        <div className="flex items-center gap-2 text-foreground">
          <Truck className="w-5 h-5 text-primary" />
          <span className="font-medium">Frete grátis</span>
        </div>
        <div className="flex items-center gap-2 text-foreground">
          <Shield className="w-5 h-5 text-primary" />
          <span className="font-medium">Garantia de 7 dias</span>
        </div>
        <div className="flex items-center gap-2 text-foreground">
          <Check className="w-5 h-5 text-primary" />
          <span className="font-medium">Envio imediato</span>
        </div>
      </div>

      <CtaButton size="xl">GARANTIR O MEU AGORA</CtaButton>
    </div>
  </SectionWrapper>
);

export default OfferSection;
