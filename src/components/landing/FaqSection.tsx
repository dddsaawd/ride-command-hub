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
  <SectionWrapper alt>
    <h2 className="font-display text-2xl md:text-4xl font-bold text-center text-foreground mb-12">
      Ainda tem dúvidas?
    </h2>
    <div className="max-w-2xl mx-auto">
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map(({ q, a }, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-xl px-6 overflow-hidden">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
              {q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              {a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </SectionWrapper>
);

export default FaqSection;
