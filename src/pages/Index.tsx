import { useEffect } from "react";
import {
  ArrowRight,
  Bluetooth,
  Check,
  Clock3,
  CloudRain,
  type LucideIcon,
  Map,
  Music4,
  PhoneCall,
  PlayCircle,
  ShieldCheck,
  Smartphone,
  Star,
  SunMedium,
  TriangleAlert,
  X,
} from "lucide-react";

import heroImage from "@/assets/autobike-hero.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type IconItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const heroBullets = [
  "Funciona com iFood, Uber, 99 e qualquer app",
  "CarPlay e Android Auto sem fio",
  "Instala em minutos em qualquer moto",
];

const painPoints: IconItem[] = [
  {
    icon: Smartphone,
    title: "Parar toda hora pra olhar o celular",
    description: "Cada parada quebra seu ritmo, atrasa a entrega e te faz perder corrida.",
  },
  {
    icon: TriangleAlert,
    title: "Se arriscar no trânsito tentando ver rota",
    description: "Olhar pro celular em movimento aumenta o risco exatamente na hora do corre.",
  },
  {
    icon: Clock3,
    title: "Perder corrida por atraso",
    description: "Quando você chega depois do prazo, o prejuízo bate no bolso no mesmo dia.",
  },
  {
    icon: ShieldCheck,
    title: "Ficar vulnerável a roubo",
    description: "Com o celular mais guardado, você trabalha com mais discrição e segurança.",
  },
];

const productBenefits: IconItem[] = [
  {
    icon: Map,
    title: "Waze, Maps, iFood, Uber e 99 direto na tela",
    description: "Tudo aparece no guidão para você navegar e aceitar corridas sem improviso.",
  },
  {
    icon: Music4,
    title: "Música e chamadas sem tirar a mão",
    description: "Controle o áudio e siga no fluxo sem precisar mexer no celular.",
  },
  {
    icon: Bluetooth,
    title: "Conexão com capacete Bluetooth",
    description: "Perfeito pra ouvir rota, atender e manter o foco na rua.",
  },
  {
    icon: SunMedium,
    title: "Tela visível até no sol",
    description: "Leitura clara mesmo rodando no meio do dia em avenida aberta.",
  },
  {
    icon: CloudRain,
    title: "Resistente à chuva (IP65)",
    description: "Feito para uso externo e rotina intensa de quem vive em cima da moto.",
  },
  {
    icon: ShieldCheck,
    title: "Compatível com qualquer moto",
    description: "Instala rápido e transforma sua moto em ferramenta de trabalho.",
  },
];

const proofCards: IconItem[] = [
  {
    icon: Map,
    title: "GPS sempre aberto",
    description: "Waze e Maps ficam visíveis o tempo inteiro, sem parar pra conferir a rota.",
  },
  {
    icon: Music4,
    title: "Música rodando na tela",
    description: "Mostra praticidade e deixa o produto com cara de central premium.",
  },
  {
    icon: PhoneCall,
    title: "Chamadas sem interromper o corre",
    description: "Atenda no capacete Bluetooth e continue a rota sem perder tempo.",
  },
];

const faqs = [
  {
    question: "Funciona com iFood, Uber e 99?",
    answer: "Sim. Você conecta seu celular e usa qualquer aplicativo normalmente.",
  },
  {
    question: "Vai cair com a moto em movimento?",
    answer: "Não. O sistema de fixação é reforçado para uso em estrada e rotina intensa.",
  },
  {
    question: "E chuva?",
    answer: "Totalmente resistente, feito para uso externo e dias corridos na rua.",
  },
  {
    question: "É difícil instalar?",
    answer: "Não. A instalação leva poucos minutos em praticamente qualquer moto.",
  },
];

const testimonials = [
  {
    name: "Rafael • motoboy iFood",
    quote: "Antes eu parava toda hora pra olhar a rota. Agora faço mais entregas no dia sem me enrolar.",
  },
  {
    name: "Camila • corridas urbanas",
    quote: "Atender chamada pelo capacete e seguir a navegação faz muita diferença na correria.",
  },
  {
    name: "Diego • entregas 99/Uber",
    quote: "Produto com cara de profissional. Instalou rápido e já virou item fixo da moto.",
  },
];

const SectionHeading = ({
  kicker,
  title,
  description,
  inverse = false,
}: {
  kicker: string;
  title: string;
  description: string;
  inverse?: boolean;
}) => (
  <div className="max-w-3xl space-y-4">
    <span
      className={inverse
        ? "inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.24em] text-primary"
        : "inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.24em] text-primary"}
    >
      {kicker}
    </span>
    <h2 className={inverse ? "text-3xl font-bold leading-tight tracking-[-0.06em] text-surface-foreground md:text-5xl" : "text-3xl font-bold leading-tight tracking-[-0.06em] text-foreground md:text-5xl"}>
      {title}
    </h2>
    <p className={inverse ? "max-w-2xl text-base leading-relaxed text-surface-foreground/70 md:text-lg" : "max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"}>
      {description}
    </p>
  </div>
);

const Index = () => {
  useEffect(() => {
    document.title = "AutoBike | Painel Inteligente para Moto";
  }, []);

  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <section className="relative isolate overflow-hidden bg-surface text-surface-foreground">
        <div className="absolute inset-0 bg-hero" />

        <div className="absolute inset-y-0 right-0 hidden w-[56%] md:block">
          <img
            src={heroImage}
            alt="Moto com painel inteligente no guidão exibindo navegação em uma rota urbana"
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
        </div>

        <div className="container relative flex min-h-[100svh] flex-col justify-center py-12 md:min-h-[92vh] md:py-24">
          <div className="max-w-2xl space-y-6 md:space-y-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-surface-foreground/10 bg-surface-foreground/5 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.28em] text-primary backdrop-blur">
              <ShieldCheck className="h-4 w-4" />
              Estoque limitado no Brasil
            </div>

            <h1 className="max-w-xl text-balance text-4xl font-bold leading-none tracking-[-0.08em] sm:text-5xl md:text-7xl">
              Sua moto não precisa ser cara pra trabalhar como uma profissional.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-surface-foreground/70 md:text-xl">
              Transforme qualquer moto em um painel inteligente com GPS, chamadas, música e apps funcionando direto no guidão.
            </p>

            <ul className="grid gap-3 sm:grid-cols-2">
              {heroBullets.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-surface-foreground/10 bg-surface-foreground/5 px-4 py-3 text-sm font-semibold text-surface-foreground/90"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-14 rounded-full px-8 text-base font-extrabold shadow-cta">
                <a href="#oferta">
                  QUERO TRANSFORMAR MINHA MOTO AGORA
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-surface-foreground/15 bg-surface-foreground/5 px-8 text-base font-semibold text-surface-foreground hover:bg-surface-foreground/10 hover:text-surface-foreground"
              >
                <a href="#prova">Ver funcionando</a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 border-t border-surface-foreground/10 pt-6 text-sm text-surface-foreground/70 md:gap-6">
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-primary text-primary" />
                ))}
                <span className="font-semibold text-surface-foreground">4,9/5 avaliações simuladas</span>
              </div>
              <span className="hidden h-1.5 w-1.5 rounded-full bg-primary md:block" />
              <span>Compatível com iFood, Uber, 99 e qualquer app</span>
            </div>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-surface-foreground/10 bg-surface-foreground/5 md:hidden">
            <img
              src={heroImage}
              alt="Painel inteligente instalado em uma moto com rota aberta"
              className="h-[360px] w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/25 to-transparent" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            kicker="Dor real"
            title="Se você usa moto no dia a dia, sabe como é."
            description="Parar pra olhar o celular, se arriscar no trânsito, perder corrida por atraso e trabalhar exposto não é só desconforto — isso te faz perder dinheiro todos os dias."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {painPoints.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="rounded-[1.75rem] border-border/80 bg-card/95 p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold leading-tight tracking-[-0.04em]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] bg-primary px-6 py-7 text-primary-foreground shadow-cta md:flex md:items-center md:justify-between md:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary-foreground/80">Impacto real</p>
              <p className="mt-2 max-w-3xl text-xl font-bold leading-tight tracking-[-0.04em] md:text-3xl">
                Cada parada desnecessária vira atraso, risco e corrida perdida.
              </p>
            </div>
            <div className="mt-4 inline-flex rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-semibold md:mt-0">
              Ferramenta de trabalho, não acessório
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 text-surface-foreground md:py-28">
        <div className="container">
          <SectionHeading
            inverse
            kicker="Transformação"
            title="Agora imagina isso: antes é improviso, depois é produtividade."
            description="Com o painel inteligente no guidão, você para menos, enxerga mais e roda com uma experiência muito mais profissional."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-surface-foreground/10 bg-surface-foreground/5 p-8">
              <p className="text-sm font-bold uppercase tracking-[0.26em] text-surface-foreground/60">Antes</p>
              <ul className="mt-6 space-y-4">
                {["Celular no bolso", "Atraso", "Risco"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg font-semibold">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/15 text-destructive">
                      <X className="h-5 w-5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-primary/20 bg-panel p-8">
              <p className="text-sm font-bold uppercase tracking-[0.26em] text-primary">Depois</p>
              <ul className="mt-6 space-y-4">
                {[
                  "GPS sempre aberto",
                  "Apps rodando na tela",
                  "Chamadas sem parar",
                  "Mais entregas no dia",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg font-semibold text-surface-foreground">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-success/15 text-success">
                      <Check className="h-5 w-5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-8 max-w-xl text-2xl font-bold leading-tight tracking-[-0.05em] text-surface-foreground">
                Isso muda completamente sua rotina.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            kicker="Produto"
            title="O Painel Inteligente AutoBike transforma sua moto em uma central completa."
            description="Mais do que feature: ele reduz atrito, acelera decisão e deixa sua operação muito mais profissional todos os dias."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productBenefits.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="rounded-[1.75rem] border-border/80 bg-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold leading-tight tracking-[-0.04em]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prova" className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            kicker="Prova visual"
            title="Veja funcionando na prática 👇"
            description="GPS, música e chamadas são os três momentos que fazem o cliente entender o valor em segundos."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface lg:col-span-2">
              <img
                src={heroImage}
                alt="Painel inteligente mostrando navegação na tela da moto"
                className="absolute inset-0 h-full w-full object-cover opacity-45"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-surface/25" />
              <div className="relative flex min-h-[340px] flex-col justify-end p-8 text-surface-foreground">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-surface-foreground/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-primary">
                  <PlayCircle className="h-4 w-4" />
                  Waze rodando
                </span>
                <h3 className="mt-5 max-w-xl text-3xl font-bold leading-tight tracking-[-0.05em]">
                  GPS aberto, rota visível e menos parada desnecessária.
                </h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-surface-foreground/70">
                  É a cena que entrega a transformação principal logo no primeiro impacto.
                </p>
              </div>
            </div>

            {proofCards.slice(1).map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-[2rem] border border-primary/15 bg-panel p-8 text-surface-foreground">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-foreground/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-bold leading-tight tracking-[-0.05em]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-surface-foreground/70">{description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <PlayCircle className="h-4 w-4" />
                  Demonstração ideal para anúncio
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/55 py-20 md:py-24">
        <div className="container">
          <SectionHeading
            kicker="Prova social"
            title="Avaliações que reforçam confiança e aceleram a decisão."
            description="Bloco de reviews simulados para aumentar a sensação de produto testado e aprovado por quem vive na rua."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="rounded-[1.75rem] border-border/80 bg-card p-6 shadow-sm">
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-4 text-base leading-relaxed text-foreground">“{item.quote}”</p>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">{item.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.05fr]">
          <SectionHeading
            kicker="Quebra de objeções"
            title="As respostas que o cliente precisa ler antes de comprar."
            description="FAQ curto, direto e pensado para remover travas reais de quem trabalha de moto."
          />

          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.question} className="group rounded-[1.5rem] border border-border bg-card p-6 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-bold leading-tight tracking-[-0.03em]">
                  <span>{item.question}</span>
                  <span className="text-primary transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/55 py-20 md:py-24">
        <div className="container">
          <SectionHeading
            kicker="Ancoragem de valor"
            title="Quanto custa hoje ficar sem uma solução assim?"
            description="Um celular novo custa caro. Um painel original custa mais ainda. Aqui você junta os dois por uma fração disso."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Card className="rounded-[1.75rem] border-border/80 bg-card p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-muted-foreground">Um celular novo</p>
              <p className="mt-4 text-4xl font-bold tracking-[-0.06em]">R$2.000+</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Valor alto para continuar exposto no guidão e no trânsito.</p>
            </Card>

            <Card className="rounded-[1.75rem] border-border/80 bg-card p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-muted-foreground">Um painel original</p>
              <p className="mt-4 text-4xl font-bold tracking-[-0.06em]">R$3.000+</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Custo alto demais para quem só quer produtividade e praticidade já.</p>
            </Card>

            <Card className="rounded-[1.75rem] border-primary/20 bg-primary p-8 text-primary-foreground shadow-cta">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary-foreground/80">AutoBike hoje</p>
              <p className="mt-4 text-4xl font-bold tracking-[-0.06em]">R$297</p>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">Você ganha GPS, apps, chamadas e experiência profissional por uma fração desse valor.</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="oferta" className="py-20 md:py-28">
        <div className="container">
          <div className="overflow-hidden rounded-[2.25rem] border border-primary/15 bg-surface bg-panel text-surface-foreground shadow-cta">
            <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-primary">Oferta</p>
                <h2 className="mt-4 max-w-xl text-4xl font-bold leading-none tracking-[-0.07em] md:text-6xl">
                  De R$497 por R$297 hoje.
                </h2>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-surface-foreground/70">
                  Ou em até 12x, com frete grátis e garantia de 7 dias para testar sem medo.
                </p>

                <ul className="mt-8 space-y-4">
                  {["Frete grátis", "Garantia de 7 dias", "Instala em minutos em qualquer moto"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-base font-semibold">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check className="h-5 w-5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-surface-foreground/10 bg-surface-foreground/5 p-8">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-surface-foreground/60">Lote liberado hoje</p>
                <p className="mt-6 text-lg font-semibold text-surface-foreground/55 line-through">De R$497</p>
                <p className="mt-2 text-6xl font-bold leading-none tracking-[-0.08em] text-primary">R$297</p>
                <p className="mt-2 text-lg text-surface-foreground/70">ou em até 12x</p>

                <Button asChild size="lg" className="mt-8 h-14 w-full rounded-full text-base font-extrabold shadow-cta">
                  <a href="#topo">
                    GARANTIR O MEU AGORA
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>

                <div className="mt-5 rounded-2xl border border-surface-foreground/10 bg-surface-foreground/5 px-4 py-3 text-sm text-surface-foreground/70">
                  Pagamento facilitado, envio grátis e garantia para testar na rotina real.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="rounded-[2rem] border border-primary/15 bg-primary/10 p-6 md:flex md:items-center md:justify-between md:p-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">Urgência</p>
              <h2 className="mt-2 text-2xl font-bold leading-tight tracking-[-0.05em] md:text-4xl">
                Devido à alta demanda, estamos liberando poucas unidades por lote.
              </h2>
              <p className="mt-3 text-base text-muted-foreground">Pode esgotar a qualquer momento.</p>
            </div>

            <Button asChild size="lg" className="mt-5 h-14 rounded-full px-8 text-base font-extrabold md:mt-0">
              <a href="#oferta">Quero garantir agora</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 text-surface-foreground md:py-24">
        <div className="container">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-primary">CTA final</p>
            <h2 className="text-4xl font-bold leading-none tracking-[-0.08em] md:text-6xl">
              Se você trabalha com moto… isso aqui não é acessório.
            </h2>
            <p className="text-2xl font-bold tracking-[-0.05em] text-surface-foreground/80 md:text-3xl">
              É ferramenta de trabalho.
            </p>

            <Button asChild size="lg" className="h-14 rounded-full px-8 text-base font-extrabold shadow-cta">
              <a href="#oferta">
                QUERO TRANSFORMAR MINHA MOTO AGORA
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
        <Button asChild size="lg" className="h-14 w-full rounded-full text-base font-extrabold shadow-cta">
          <a href="#oferta">
            QUERO TRANSFORMAR MINHA MOTO AGORA
            <ArrowRight className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </main>
  );
};

export default Index;
