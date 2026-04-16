import { useEffect, useRef, useState } from "react";

const buyers = [
  { name: "João", city: "São Paulo, SP" },
  { name: "Carlos", city: "Rio de Janeiro, RJ" },
  { name: "Marcos", city: "Belo Horizonte, MG" },
  { name: "Lucas", city: "Curitiba, PR" },
  { name: "Pedro", city: "Goiânia, GO" },
  { name: "Rafael", city: "Salvador, BA" },
  { name: "André", city: "Fortaleza, CE" },
  { name: "Thiago", city: "Recife, PE" },
  { name: "Felipe", city: "Brasília, DF" },
  { name: "Diego", city: "Porto Alegre, RS" },
  { name: "Gustavo", city: "Manaus, AM" },
  { name: "Rodrigo", city: "Belém, PA" },
  { name: "Leandro", city: "Campinas, SP" },
  { name: "Bruno", city: "São Luís, MA" },
  { name: "Matheus", city: "Cuiabá, MT" },
  { name: "Vinícius", city: "Vitória, ES" },
  { name: "Daniel", city: "Florianópolis, SC" },
  { name: "Eduardo", city: "Natal, RN" },
];

const timeAgo = () => {
  const minutes = Math.floor(Math.random() * 12) + 1;
  return `há ${minutes} min`;
};

const SocialProofToast = () => {
  const indexRef = useRef(Math.floor(Math.random() * buyers.length));
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: "", city: "", time: "" });

  useEffect(() => {
    const show = () => {
      const buyer = buyers[indexRef.current % buyers.length];
      indexRef.current++;
      setData({ name: buyer.name, city: buyer.city, time: timeAgo() });
      setVisible(true);
      setTimeout(() => setVisible(false), 4500);
    };

    const initialDelay = setTimeout(() => {
      show();
      const interval = setInterval(show, 18000 + Math.random() * 12000);
      return () => clearInterval(interval);
    }, 8000 + Math.random() * 5000);

    return () => clearTimeout(initialDelay);
  }, []);

  return (
    <div
      className="fixed bottom-20 left-3 z-[9999] transition-all duration-500 ease-out pointer-events-none"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
      }}
    >
      <div className="relative bg-[#1a1a1a] rounded-2xl rounded-bl-md shadow-2xl px-4 py-3 flex items-center gap-3 max-w-[320px] border border-[#333]">
        {/* Triângulo do balão */}
        <div
          className="absolute -bottom-2 left-4 w-0 h-0"
          style={{
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderTop: "8px solid #1a1a1a",
          }}
        />
        {/* Ícone verde pulsante */}
        <div className="relative flex-shrink-0">
          <div className="w-9 h-9 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
            <span className="text-lg">🛒</span>
          </div>
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#22C55E] rounded-full animate-ping" />
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#22C55E] rounded-full" />
        </div>
        {/* Texto */}
        <div className="flex flex-col min-w-0">
          <span className="text-white text-[13px] font-semibold leading-tight truncate">
            {data.name} de {data.city}
          </span>
          <span className="text-[#22C55E] text-[12px] font-medium">
            acabou de comprar ✅
          </span>
          <span className="text-gray-500 text-[11px]">{data.time}</span>
        </div>
      </div>
    </div>
  );
};

export default SocialProofToast;
