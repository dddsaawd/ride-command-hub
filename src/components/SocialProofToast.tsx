import { useEffect, useRef, useState } from "react";

const buyers = [
  { name: "João", city: "São Paulo" },
  { name: "Carlos", city: "Rio de Janeiro" },
  { name: "Marcos", city: "Belo Horizonte" },
  { name: "Lucas", city: "Curitiba" },
  { name: "Pedro", city: "Goiânia" },
  { name: "Rafael", city: "Salvador" },
  { name: "André", city: "Fortaleza" },
  { name: "Thiago", city: "Recife" },
  { name: "Felipe", city: "Brasília" },
  { name: "Diego", city: "Porto Alegre" },
  { name: "Gustavo", city: "Manaus" },
  { name: "Rodrigo", city: "Belém" },
  { name: "Leandro", city: "Campinas" },
  { name: "Bruno", city: "São Luís" },
  { name: "Matheus", city: "Cuiabá" },
  { name: "Vinícius", city: "Vitória" },
  { name: "Daniel", city: "Florianópolis" },
  { name: "Eduardo", city: "Natal" },
];

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/men/22.jpg",
  "https://randomuser.me/api/portraits/men/55.jpg",
  "https://randomuser.me/api/portraits/men/67.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
  "https://randomuser.me/api/portraits/men/76.jpg",
  "https://randomuser.me/api/portraits/men/88.jpg",
  "https://randomuser.me/api/portraits/men/41.jpg",
  "https://randomuser.me/api/portraits/men/29.jpg",
];

const timeLabels = ["Há instantes", "Há 1 min", "Há 2 min", "Há 3 min", "Há 5 min"];

const SocialProofToast = () => {
  const indexRef = useRef(Math.floor(Math.random() * buyers.length));
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: "", city: "", avatar: "", time: "" });

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    const show = () => {
      const buyer = buyers[indexRef.current % buyers.length];
      const avatar = avatars[indexRef.current % avatars.length];
      const time = timeLabels[Math.floor(Math.random() * timeLabels.length)];
      indexRef.current++;
      setData({ name: buyer.name, city: buyer.city, avatar, time });
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    };

    const initialDelay = setTimeout(() => {
      show();
      interval = setInterval(show, 18000 + Math.random() * 12000);
    }, 8000 + Math.random() * 5000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
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
        {/* Avatar */}
        <img
          src={data.avatar}
          alt=""
          className="w-11 h-11 rounded-full object-cover flex-shrink-0 border-2 border-gray-100"
        />
        {/* Text */}
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-[#1a1a1a] text-[14px] font-bold leading-tight">
            {data.name} de {data.city}
          </span>
          <span className="text-[#444] text-[13px]">
            comprou o <span className="font-bold">MotoPlay Pro</span>
          </span>
          <span className="text-[#22C55E] text-[12px] font-medium">{data.time}</span>
        </div>
        {/* Close */}
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
