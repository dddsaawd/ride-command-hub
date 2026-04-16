import { useEffect, useRef } from "react";
import { toast } from "sonner";

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
  return `${minutes} min atrás`;
};

const SocialProofToast = () => {
  const indexRef = useRef(Math.floor(Math.random() * buyers.length));

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      showToast();
      const interval = setInterval(showToast, 18000 + Math.random() * 12000);
      return () => clearInterval(interval);
    }, 8000 + Math.random() * 5000);

    return () => clearTimeout(initialDelay);
  }, []);

  const showToast = () => {
    const buyer = buyers[indexRef.current % buyers.length];
    indexRef.current++;

    toast(
      `🔥 ${buyer.name} de ${buyer.city} acabou de comprar!`,
      {
        description: `MotoPlay Pro — ${timeAgo()}`,
        duration: 5000,
        position: "bottom-left",
        style: {
          background: "#1a1a1a",
          color: "#fff",
          border: "1px solid #22C55E",
          borderLeft: "4px solid #22C55E",
          fontSize: "13px",
          padding: "12px 16px",
        },
      }
    );
  };

  return null;
};

export default SocialProofToast;
