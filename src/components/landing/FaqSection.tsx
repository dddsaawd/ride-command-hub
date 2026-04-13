import SectionWrapper from "@/components/SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Funciona com iFood, Uber e 99?",
    a: "Sim. Você conecta seu celular e usa qualquer aplicativo normalmente. Funciona tanto com CarPlay quanto Android Auto.",
  },
  {
    q: "Vai cair com a moto em movimento?",
    a: "Não. Sistema de fixação reforçado para uso em estrada, testado em diversas condições de pilotagem.",
  },
  {
    q: "E chuva?",
    a: "Totalmente resistente à água com certificação IP65. Feito para uso externo em qualquer clima.",
  },
  {
    q: "É difícil instalar?",
    a: "Não. Instala em poucos minutos sem precisar de ferramentas especiais. Vem com manual ilustrado.",
  },
];

const FaqSection = () => (
  <SectionWrapper>
    <div className="text-center mb-16">
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Dúvidas</p>
      <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground leading-tight">
        Perguntas frequentes
      </h2>
    </div>

    <div className="max-w-2xl mx-auto">
      <Accordion type="single" collapsible>
        {faqs.map(({ q, a }, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-t border-border last:border-b">
            <AccordionTrigger className="text-left text-foreground hover:no-underline py-6 text-sm tracking-wide font-medium">
              {q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6 text-sm leading-relaxed tracking-wide">
              {a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </SectionWrapper>
);

export default FaqSection;
