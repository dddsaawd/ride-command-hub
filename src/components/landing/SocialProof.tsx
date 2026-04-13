import SectionWrapper from "@/components/SectionWrapper";
import { Star } from "lucide-react";

const reviews = [
  { name: "Carlos M.", city: "São Paulo, SP", text: "Melhor investimento que fiz. Faço 30% mais entregas agora com o GPS sempre na tela.", rating: 5 },
  { name: "Rodrigo S.", city: "Rio de Janeiro, RJ", text: "Instala em 5 minutos. Uso iFood e Waze ao mesmo tempo sem problema nenhum.", rating: 5 },
  { name: "Amanda L.", city: "Belo Horizonte, MG", text: "Parei de usar suporte de celular. Muito mais seguro e prático. Super recomendo!", rating: 5 },
  { name: "João P.", city: "Curitiba, PR", text: "Funciona até na chuva. Tela boa, som no capacete bluetooth. Perfeito pra quem roda todo dia.", rating: 5 },
];

const SocialProof = () => (
  <SectionWrapper>
    <h2 className="font-display text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
      Quem usa, recomenda ⭐
    </h2>
    <p className="text-center text-muted-foreground mb-12">
      Mais de <span className="font-bold text-foreground">2.300 motoboys</span> já transformaram sua rotina.
    </p>

    <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {reviews.map(({ name, city, text, rating }) => (
        <div key={name} className="bg-surface rounded-2xl p-6 border border-border">
          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-highlight text-highlight" />
            ))}
          </div>
          <p className="text-foreground mb-4 italic">"{text}"</p>
          <div>
            <p className="font-semibold text-foreground text-sm">{name}</p>
            <p className="text-muted-foreground text-xs">{city}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default SocialProof;
