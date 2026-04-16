import { useEffect, useRef, useState } from "react";
import avatar1 from "@/assets/avatar-1.webp";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";
import avatar6 from "@/assets/avatar-6-old.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import avatar10 from "@/assets/avatar-10.png";
import avatar11 from "@/assets/avatar-11.png";
import avatar12 from "@/assets/avatar-12.png";

const buyers = [
  { name: "João", city: "São Paulo", avatar: avatar1 },
  { name: "Carlos", city: "Rio de Janeiro", avatar: avatar4 },
  { name: "Marcos", city: "Belo Horizonte", avatar: avatar5 },
  { name: "Bianca", city: "Curitiba", avatar: avatar7 },
  { name: "Pedro", city: "Goiânia", avatar: avatar8 },
  { name: "Rafael", city: "Salvador", avatar: avatar9 },
  { name: "Lucas", city: "Fortaleza", avatar: avatar10 },
  { name: "Thiago", city: "Recife", avatar: avatar11 },
  { name: "Larissa", city: "Brasília", avatar: avatar12 },
  { name: "Diego", city: "Porto Alegre", avatar: avatar4 },
  { name: "Amanda", city: "Manaus", avatar: avatar3 },
  { name: "Rodrigo", city: "Belém", avatar: avatar5 },
  { name: "Leandro", city: "Campinas", avatar: avatar6 },
  { name: "Juliana", city: "São Luís", avatar: avatar2 },
  { name: "Matheus", city: "Cuiabá", avatar: avatar8 },
  { name: "Camila", city: "Vitória", avatar: avatar3 },
  { name: "Daniel", city: "Florianópolis", avatar: avatar10 },
  { name: "Fernanda", city: "Natal", avatar: avatar2 },
  { name: "Bruno", city: "Aracaju", avatar: avatar9 },
  { name: "Gustavo", city: "Teresina", avatar: avatar4 },
  { name: "Patrícia", city: "Maceió", avatar: avatar7 },
  { name: "Vinícius", city: "João Pessoa", avatar: avatar11 },
];

const timeLabels = ["Há instantes", "Há 1 min", "Há 2 min", "Há 3 min", "Há 5 min"];

const SocialProofToast = () => {
  const indexRef = useRef(Math.floor(Math.random() * buyers.length));
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: "", city: "", avatar: "", time: "" });
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    let intervalId: ReturnType<typeof setTimeout>;

    const show = () => {
      const buyer = buyers[indexRef.current % buyers.length];
      const time = timeLabels[Math.floor(Math.random() * timeLabels.length)];
      indexRef.current++;
      setData({ name: buyer.name, city: buyer.city, avatar: buyer.avatar, time });
      setVisible(true);
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = setTimeout(() => setVisible(false), 5000);
    };

    const scheduleNext = () => {
      intervalId = setTimeout(() => {
        show();
        scheduleNext();
      }, 35000 + Math.random() * 20000);
    };

    const initialDelay = setTimeout(() => {
      show();
      scheduleNext();
    }, 10000 + Math.random() * 5000);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(intervalId);
      clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  const dismiss = () => setVisible(false);

  return (
    <div
      className="fixed bottom-20 left-3 right-3 z-[9999] transition-all duration-500 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] px-4 py-3 flex items-center gap-3 max-w-[380px] mx-auto">
        <img
          src={data.avatar}
          alt=""
          className="w-11 h-11 rounded-full object-cover flex-shrink-0 border-2 border-gray-100"
        />
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-[#1a1a1a] text-[14px] font-bold leading-tight">
            {data.name} de {data.city}
          </span>
          <span className="text-[#444] text-[13px]">
            comprou o <span className="font-bold">MotoPlay Pro</span>
          </span>
          <span className="text-[#22C55E] text-[12px] font-medium">{data.time}</span>
        </div>
        <button
          onClick={dismiss}
          className="text-gray-400 hover:text-gray-600 flex-shrink-0 p-1"
          aria-label="Fechar"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SocialProofToast;
