import SectionWrapper from "@/components/SectionWrapper";
import CtaButton from "@/components/CtaButton";

const FinalCtaSection = () => (
  <SectionWrapper alt>
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
        Se você trabalha com moto…
      </h2>
      <p className="text-xl md:text-2xl text-muted-foreground mb-2">
        isso aqui não é acessório.
      </p>
      <p className="text-2xl md:text-3xl font-bold text-primary mb-10">
        👉 É ferramenta de trabalho.
      </p>
      <CtaButton size="xl" onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}>
        QUERO TRANSFORMAR MINHA MOTO AGORA
      </CtaButton>
    </div>
  </SectionWrapper>
);

export default FinalCtaSection;
