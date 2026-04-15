import { useState, useMemo, useRef, useEffect } from "react";
import { Check, ChevronDown, Search, ShieldCheck, Bike, ArrowRight, Lock, CreditCard, Truck, Shield, Package, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

import produtoSuporteMaleavel from "@/assets/produto-suporte-maleavel.webp";
import produtoKitCompleto from "@/assets/produto-kit-completo.webp";
import produtoCarplayAndroid from "@/assets/produto-carplay-android.webp";

/* ── Complete motorcycle database ── */
const MOTO_DATABASE: Record<string, string[]> = {
  "Honda": [
    "CG 125", "CG 150 Titan", "CG 160 Fan", "CG 160 Start", "CG 160 Titan",
    "CB 250F Twister", "CB 300F", "CB 500F", "CB 500X", "CB 650R",
    "CB 1000R", "CBR 250R", "CBR 500R", "CBR 600RR", "CBR 1000RR Fireblade",
    "XRE 190", "XRE 300", "NXR 160 Bros", "Pop 110i", "Biz 110i",
    "Biz 125", "PCX 160", "Elite 125", "SH 150i", "ADV 150",
    "NC 750X", "Africa Twin 1100", "GL 1800 Gold Wing", "Rebel 500",
    "CRF 250F", "CRF 1000L", "Sahara 300", "Hornet 600",
  ],
  "Yamaha": [
    "Factor 125", "Factor 150", "Fazer 150", "Fazer 250",
    "YBR 125", "YBR 150", "Lander 250", "Ténéré 250",
    "Ténéré 700", "MT-03", "MT-07", "MT-09", "MT-09 Tracer",
    "YZF-R3", "YZF-R6", "YZF-R1", "XJ6",
    "Crosser 150", "Crosser S", "NMAX 160", "XMAX 250",
    "Fluo 125", "Neo 125", "FZ25", "Tracer 900 GT",
    "XTZ 125", "XTZ 150", "XTZ 250", "Super Ténéré 1200",
    "VMAX 1700", "Bolt 950", "Drag Star 650",
  ],
  "BMW Motorrad": [
    "G 310 R", "G 310 GS", "F 750 GS", "F 850 GS",
    "F 850 GS Adventure", "F 900 R", "F 900 XR",
    "R 1250 GS", "R 1250 GS Adventure", "R 1250 RT",
    "R 1250 RS", "R NineT", "R NineT Scrambler",
    "S 1000 R", "S 1000 RR", "S 1000 XR",
    "K 1600 GT", "K 1600 GTL", "K 1600 B",
    "C 400 X", "C 400 GT", "CE 04",
    "R 18", "R 18 Classic", "M 1000 RR",
  ],
  "Kawasaki": [
    "Ninja 300", "Ninja 400", "Ninja 650", "Ninja ZX-6R",
    "Ninja ZX-10R", "Ninja ZX-10RR", "Ninja 1000SX",
    "Z300", "Z400", "Z650", "Z900", "Z900RS",
    "Z H2", "Z H2 SE", "Versys 650", "Versys 1000",
    "Versys-X 300", "Vulcan S", "Vulcan 900",
    "KLX 300", "KX 250", "KX 450", "W800",
    "Ninja H2", "Ninja H2R", "Concours 14",
  ],
  "Suzuki": [
    "GSX-S750", "GSX-S1000", "GSX-R750",
    "GSX-R1000", "GSX-R1000R", "Hayabusa",
    "V-Strom 650", "V-Strom 1050", "V-Strom 250",
    "Burgman 400", "Burgman 650", "Address 110",
    "Intruder 125", "Intruder 250", "Boulevard M800",
    "Boulevard M1800R", "DR-Z400", "SV650",
    "Katana 1000", "GSX-250R", "DL 1000",
    "Bandit 650", "Bandit 1250",
  ],
  "Triumph": [
    "Street Triple 765", "Street Triple 765 RS",
    "Speed Triple 1200 RS", "Tiger 660", "Tiger 850 Sport",
    "Tiger 900", "Tiger 900 Rally", "Tiger 1200",
    "Trident 660", "Bonneville T100", "Bonneville T120",
    "Street Twin", "Street Scrambler", "Scrambler 1200",
    "Speed Twin 900", "Speed Twin 1200",
    "Rocket 3", "Rocket 3 R", "Thruxton RS",
    "Daytona 765",
  ],
  "Ducati": [
    "Monster 797", "Monster 821", "Monster 937",
    "Monster 1200", "Panigale V2", "Panigale V4",
    "Panigale V4 S", "Panigale V4 R",
    "Streetfighter V2", "Streetfighter V4",
    "Multistrada V2", "Multistrada V4",
    "Multistrada V4 Rally", "Scrambler Icon",
    "Scrambler Desert Sled", "Scrambler Full Throttle",
    "Hypermotard 950", "Diavel V4",
    "XDiavel", "DesertX", "SuperSport 950",
  ],
  "Royal Enfield": [
    "Classic 350", "Classic 500", "Meteor 350",
    "Hunter 350", "Bullet 350", "Bullet 500",
    "Continental GT 650", "Interceptor 650",
    "Himalayan 450", "Super Meteor 650",
    "Shotgun 650", "Scram 411",
  ],
  "Harley-Davidson": [
    "Iron 883", "Forty-Eight", "Sportster S",
    "Street Bob 114", "Fat Bob 114", "Low Rider S",
    "Low Rider ST", "Heritage Classic",
    "Fat Boy", "Breakout", "Road King",
    "Street Glide", "Road Glide", "Ultra Limited",
    "CVO Road Glide", "CVO Street Glide",
    "Electra Glide", "Pan America 1250",
    "Nightster", "LiveWire",
  ],
  "KTM": [
    "Duke 125", "Duke 200", "Duke 250",
    "Duke 390", "Duke 690", "Duke 790",
    "Duke 890", "Duke 1290 Super Duke R",
    "RC 125", "RC 200", "RC 390",
    "Adventure 250", "Adventure 390",
    "Adventure 790", "Adventure 890",
    "Adventure 1290 Super", "EXC 300",
    "SX-F 250", "SX-F 450", "SMC-R 690",
  ],
  "Dafra": [
    "Apache 150", "Apache 200", "Next 250",
    "NH 190", "Zig 50", "Citycom 300i",
    "Maxsym 400i", "Maxsym 600i",
    "Cruisym 150", "Horizon 250",
  ],
  "Shineray": [
    "Jet 50", "Jet 125", "Phoenix 50",
    "Worker 125", "XY 150-5", "XY 200",
    "XY 250-5A", "Desert 250",
    "Explorer 150",
  ],
  "Kasinski": [
    "Comet 150", "Comet 250R", "Comet 650",
    "Mirage 150", "Mirage 250", "CRZ 150",
    "Win 110", "Seta 125",
  ],
  "Indian": [
    "Scout", "Scout Bobber", "Scout Rogue",
    "Chief", "Chief Bobber", "Super Chief",
    "Chieftain", "Roadmaster", "Challenger",
    "Springfield", "FTR 1200",
  ],
  "Aprilia": [
    "RS 660", "Tuono 660", "RSV4",
    "RSV4 Factory", "Tuono V4",
    "Shiver 900", "Dorsoduro 900",
    "SR GT 200", "SXR 160",
  ],
  "Benelli": [
    "TNT 150", "TNT 300", "TNT 600",
    "Leoncino 250", "Leoncino 500",
    "Leoncino 800", "TRK 251", "TRK 502",
    "TRK 502 X", "752S", "302S",
  ],
  "MV Agusta": [
    "Brutale 800", "Brutale 1000",
    "F3 800", "Dragster 800",
    "Turismo Veloce", "Superveloce",
    "Rush 1000",
  ],
  "Husqvarna": [
    "Svartpilen 401", "Svartpilen 701",
    "Vitpilen 401", "Vitpilen 701",
    "Norden 901", "701 Supermoto",
    "701 Enduro", "FE 350", "FE 501",
  ],
  "CFMoto": [
    "250NK", "300NK", "400NK",
    "650NK", "650MT", "650GT",
    "700CL-X", "800MT", "1250TR-G",
  ],
  "Moto Guzzi": [
    "V7 Stone", "V7 Special", "V85 TT",
    "V100 Mandello", "California",
    "Stelvio", "Griso 1200",
  ],
  "Haojue": [
    "DK 150", "DK 160", "DR 160",
    "NK 150", "VR 150", "Chopper Road 150",
    "Suzuki GSX 125",
  ],
  "Traxx": [
    "JL 110", "JL 135", "Star 50",
    "Work 125", "Sky 125", "Moby 110",
  ],
  "Voge": [
    "300R", "500R", "650DS",
    "300AC", "525R", "900DS",
  ],
  "Zontes": [
    "310R", "310T", "310X",
    "350D", "350T", "350E",
  ],
  "QJ Motor": [
    "SRK 400", "SRK 600", "SRK 700",
    "SRT 800", "Flash 200",
  ],
  "Kymco": [
    "AK 550", "Downtown 350i", "People 150",
    "Agility 200i", "X-Town 300",
  ],
};

// Famous brands first, then the rest alphabetically
const TOP_BRANDS = ["Honda", "Yamaha", "BMW Motorrad", "Kawasaki", "Harley-Davidson", "Ducati", "Suzuki", "KTM", "Triumph", "Royal Enfield"];
const OTHER_BRANDS = Object.keys(MOTO_DATABASE).filter(b => !TOP_BRANDS.includes(b)).sort();
const BRAND_LIST = [...TOP_BRANDS, ...OTHER_BRANDS];

/* Countdown timer hook */
const useCountdown = (hours: number) => {
  const end = useRef(Date.now() + hours * 3600_000);
  const [left, setLeft] = useState(hours * 3600);
  useEffect(() => {
    const t = setInterval(() => {
      const diff = Math.max(0, Math.floor((end.current - Date.now()) / 1000));
      setLeft(diff);
    }, 1000);
    return () => clearInterval(t);
  }, []);
  const h = String(Math.floor(left / 3600)).padStart(2, "0");
  const m = String(Math.floor((left % 3600) / 60)).padStart(2, "0");
  const s = String(left % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
};

export default function MotoSelector() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [search, setSearch] = useState("");
  const [showBrands, setShowBrands] = useState(false);
  const offerRef = useRef<HTMLDivElement>(null);
  const countdown = useCountdown(2);

  const totalModels = useMemo(() => Object.values(MOTO_DATABASE).reduce((s, m) => s + m.length, 0), []);

  const filteredBrands = useMemo(() => {
    if (!search) return BRAND_LIST;
    const q = search.toLowerCase();
    return BRAND_LIST.filter(b =>
      b.toLowerCase().includes(q) ||
      MOTO_DATABASE[b].some(m => m.toLowerCase().includes(q))
    );
  }, [search]);

  const models = selectedBrand ? MOTO_DATABASE[selectedBrand] : [];

  const handleBrandSelect = (brand: string) => {
    setSelectedBrand(brand);
    setSelectedModel(null);
    setConfirmed(false);
    setShowBrands(false);
  };

  const handleModelSelect = (model: string) => {
    setSelectedModel(model);
    setConfirmed(true);
    // Scroll to offer after a small delay
    setTimeout(() => {
      offerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  const handleReset = () => {
    setSelectedBrand(null);
    setSelectedModel(null);
    setConfirmed(false);
    setSearch("");
    setShowBrands(false);
  };

  const whatsappLink = `https://wa.me/5500000000000?text=${encodeURIComponent(
    `Quero o MotoPlay Pro com 40% OFF!\nMinha moto: ${selectedBrand || ""} ${selectedModel || ""}`
  )}`;

  return (
    <>
      <section className="py-10" id="compatibilidade">
        <div className="container px-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Compatibilidade Universal</p>
          <h2 className="mt-1 text-[20px] font-bold leading-tight">Funciona na sua moto?</h2>
          <p className="mt-1 text-[13px] text-muted-foreground leading-relaxed">
            Verifique agora — compatível com <strong className="text-foreground">{BRAND_LIST.length} marcas</strong> e <strong className="text-foreground">{totalModels}+ modelos</strong>.
          </p>

          {/* Stats */}
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl bg-primary/10 p-3">
              <p className="text-[22px] font-bold text-primary">{BRAND_LIST.length}</p>
              <p className="text-[10px] font-bold uppercase text-muted-foreground">Marcas</p>
            </div>
            <div className="rounded-2xl bg-primary/10 p-3">
              <p className="text-[22px] font-bold text-primary">{totalModels}+</p>
              <p className="text-[10px] font-bold uppercase text-muted-foreground">Modelos</p>
            </div>
            <div className="rounded-2xl bg-primary/10 p-3">
              <p className="text-[22px] font-bold text-primary">99%</p>
              <p className="text-[10px] font-bold uppercase text-muted-foreground">Cobertura</p>
            </div>
          </div>

          {/* Selector card */}
          <div className="mt-5 rounded-2xl border-2 border-primary/30 bg-card p-4 shadow-lg shadow-primary/5 relative overflow-hidden">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
            <div className="relative">
            <p className="text-[13px] font-extrabold uppercase tracking-[0.15em] text-primary flex items-center gap-2 mb-1">
              <Bike className="h-4 w-4 animate-pulse" /> Selecione sua moto
            </p>
            <p className="text-[11px] text-muted-foreground mb-3">Descubra se sua moto é compatível e garanta <strong className="text-primary">40% OFF</strong></p>

            {/* Confirmed state */}
            {confirmed && selectedBrand && selectedModel ? (
              <div className="animate-scale-in">
                <div className="flex flex-col items-center gap-3 py-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground animate-scale-in">
                    <ShieldCheck className="h-7 w-7" />
                  </div>
                  <div className="text-center">
                    <p className="text-[16px] font-bold text-accent">✅ Compatível!</p>
                    <p className="text-[13px] font-semibold mt-1">{selectedBrand} {selectedModel}</p>
                    <p className="text-[11px] text-muted-foreground mt-1">
                      O MotoPlay Pro é 100% compatível com sua moto.
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="w-full mt-2 rounded-xl border border-border bg-secondary/50 py-2.5 text-[12px] font-bold text-muted-foreground active:scale-[0.98] transition-transform"
                >
                  Verificar outra moto
                </button>
              </div>
            ) : (
              <>
                {/* Search */}
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Buscar marca ou modelo..."
                    value={search}
                    onChange={(e) => { setSearch(e.target.value); setShowBrands(true); setSelectedBrand(null); setSelectedModel(null); }}
                    onFocus={() => setShowBrands(true)}
                    className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-4 text-[13px] font-medium placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                </div>

                {/* Brand selector */}
                {!selectedBrand && (
                  <div>
                    <p className="text-[10px] font-bold uppercase text-muted-foreground mb-2">
                      {search ? `${filteredBrands.length} marcas encontradas` : "Escolha a marca"}
                    </p>
                    <div className={`grid grid-cols-2 gap-2 transition-all ${showBrands || search ? "max-h-[400px]" : "max-h-[200px]"} overflow-y-auto overscroll-contain rounded-xl`}>
                      {filteredBrands.map((brand, i) => (
                        <button
                          key={brand}
                          onClick={() => handleBrandSelect(brand)}
                          className="flex items-center gap-2 rounded-xl border border-border/60 bg-secondary/30 px-3 py-2.5 text-left text-[12px] font-semibold active:scale-[0.97] hover:border-primary/40 hover:bg-primary/5 transition-all animate-fade-in"
                          style={{ animationDelay: `${Math.min(i * 30, 300)}ms`, animationFillMode: "both" }}
                        >
                          <Bike className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span className="truncate">{brand}</span>
                        </button>
                      ))}
                    </div>
                    {filteredBrands.length === 0 && (
                      <p className="text-center text-[12px] text-muted-foreground py-4">
                        Nenhuma marca encontrada. Mas não se preocupe — o MotoPlay Pro é compatível com 99% das motos!
                      </p>
                    )}
                  </div>
                )}

                {/* Model selector */}
                {selectedBrand && !selectedModel && (
                  <div className="animate-fade-in">
                    <button
                      onClick={() => { setSelectedBrand(null); setSearch(""); }}
                      className="flex items-center gap-1 text-[11px] font-bold text-primary mb-2"
                    >
                      <ChevronDown className="h-3 w-3 rotate-90" /> Voltar
                    </button>
                    <p className="text-[10px] font-bold uppercase text-muted-foreground mb-2">
                      {selectedBrand} — {models.length} modelos
                    </p>
                    <div className="grid grid-cols-2 gap-2 max-h-[350px] overflow-y-auto overscroll-contain rounded-xl">
                      {models.map((model, i) => (
                        <button
                          key={model}
                          onClick={() => handleModelSelect(model)}
                          className="rounded-xl border border-border/60 bg-secondary/30 px-3 py-2.5 text-left text-[12px] font-semibold active:scale-[0.97] hover:border-primary/40 hover:bg-primary/5 transition-all animate-fade-in"
                          style={{ animationDelay: `${Math.min(i * 20, 400)}ms`, animationFillMode: "both" }}
                        >
                          {model}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
            </div>
          </div>

          {/* Trust badge */}
          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
            <Check className="h-3.5 w-3.5 text-accent" />
            <span>Instalação universal — guidão de 22mm a 32mm</span>
          </div>
        </div>
      </section>

      {/* ═══════ OFERTA — aparece após confirmar moto ═══════ */}
      {confirmed && selectedBrand && selectedModel && (
        <section ref={offerRef} id="oferta" className="py-12 bg-surface text-surface-foreground animate-fade-in">
          <div className="container px-4">
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Oferta exclusiva</p>
            <h2 className="mt-2 text-center text-[22px] font-bold leading-tight tracking-[-0.03em]">
              MotoPlay Pro para sua<br />
              <span className="text-primary">{selectedBrand} {selectedModel}</span>
            </h2>
            <p className="mt-2 text-center text-[13px] text-surface-foreground/60">
              Compatibilidade confirmada. Aproveite o desconto exclusivo.
            </p>

            {/* Product images */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="overflow-hidden rounded-2xl border border-surface-foreground/10">
                <img src={produtoCarplayAndroid} alt="MotoPlay Pro com CarPlay" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-surface-foreground/10">
                <img src={produtoSuporteMaleavel} alt="Suporte maleável universal" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="mt-3 overflow-hidden rounded-2xl border border-surface-foreground/10">
              <img src={produtoKitCompleto} alt="Kit completo MotoPlay Pro" className="w-full object-cover" loading="lazy" />
            </div>

            {/* Pricing card */}
            <div className="mt-5 rounded-2xl border-2 border-primary bg-card overflow-hidden shadow-xl">
              <div className="bg-primary px-4 py-3 text-center">
                <p className="text-[13px] font-extrabold text-primary-foreground tracking-wide">🔥 OFERTA ESPECIAL — ÚLTIMAS UNIDADES</p>
              </div>

              <div className="p-5 space-y-4">
                {/* Price */}
                <div className="text-center space-y-1">
                  <p className="text-[13px] text-muted-foreground line-through">De R$ 497,00</p>
                  <p className="text-[42px] font-extrabold text-primary leading-none tracking-[-0.04em]">R$ 169,90</p>
                  <p className="text-[14px] text-foreground font-semibold">ou 12× de <span className="text-primary font-bold">R$ 14,16</span> sem juros</p>
                  <p className="text-[11px] text-muted-foreground">Apenas R$ 0,47/dia — menos que um café</p>
                </div>

                {/* Savings */}
                <div className="flex items-center justify-center gap-3">
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-[12px] font-bold text-primary">Economia de R$ 200</span>
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-[12px] font-bold text-accent-foreground">Frete GRÁTIS</span>
                </div>

                {/* What's included */}
                <div className="rounded-xl bg-secondary/50 p-4 space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary">O que você leva:</p>
                  {[
                    "Painel MotoPlay Pro 7\" HD",
                    "Suporte universal para qualquer moto",
                    "Kit completo de instalação",
                    "CarPlay + Android Auto sem fio",
                    "Garantia de satisfação 7 dias",
                    "Suporte técnico por WhatsApp",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-[12px] font-semibold text-foreground">
                      <Check className="h-4 w-4 shrink-0 text-primary" />{t}
                    </div>
                  ))}
                </div>

                {/* Moto badge */}
                <div className="rounded-xl bg-accent/10 p-3 text-center">
                  <p className="text-[12px] font-bold text-accent-foreground">
                    ✅ Pronto para sua {selectedBrand} {selectedModel}
                  </p>
                </div>

                {/* CTA */}
                <Button asChild size="lg" className="h-[56px] w-full rounded-full text-[15px] font-extrabold shadow-cta">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    COMPRAR AGORA COM 40% OFF <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>

                {/* Urgency */}
                <div className="rounded-xl bg-destructive/10 p-3 text-center space-y-1">
                  <p className="text-[12px] font-bold text-destructive">⚠️ Restam poucas unidades neste lote</p>
                  <p className="text-2xl font-bold tracking-[0.1em] text-destructive font-display">{countdown}</p>
                  <p className="text-[10px] text-destructive/60 uppercase font-bold tracking-[0.15em]">para esta oferta expirar</p>
                </div>

                {/* Trust signals */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { icon: Lock, text: "Compra 100% segura" },
                    { icon: CreditCard, text: "Pix, cartão ou boleto" },
                    { icon: Truck, text: "Entrega para todo Brasil" },
                    { icon: Shield, text: "7 dias de garantia" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-1.5 text-[10px] font-semibold text-muted-foreground">
                      <Icon className="h-3 w-3 text-primary shrink-0" />{text}
                    </div>
                  ))}
                </div>

                <p className="text-center text-[10px] text-muted-foreground/60">
                  +5.000 motociclistas já compraram • Avaliação 4,9/5
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
