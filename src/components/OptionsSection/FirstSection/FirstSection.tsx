import ArrowsScrollButton from "@/components/Commons/ArrowsScrollButton/ArrowsScrollButton";
import style from "./FirstSection.module.css";
import { useGift } from "@/context/GiftContext";

export default function FirstSection() {
  const { gift, setDate } = useGift();
  return (
    <div id="first-section" className={style.firstSectionContainer}>
      <ArrowsScrollButton option="up" targetId="hero-section" />
      <p>
        <strong>¡ Ahora viene la parte divertida !</strong>
      </p>
      <div>
        <p>Quiero que armes tu propio regalo 💝</p>
        <p>
          Primero elegí el <strong>finde</strong> que más te guste.
        </p>
      </div>
      <div className={style.optionsContainer}>
        <label>
          <input
            type="checkbox"
            checked={gift.date === "Sábado 20/09 - Domingo 21/09"}
            onChange={() => setDate("Sábado 20/09 - Domingo 21/09")}
          />
          <strong>Finde 1:</strong> Sábado 20/09 - Domingo 21/09
        </label>
        <label>
          <input
            type="checkbox"
            checked={gift.date === "Sábado 27/09 - Domingo 28/09"}
            onChange={() => setDate("Sábado 27/09 - Domingo 28/09")}
          />
          <strong>Finde 2:</strong> Sábado 27/09 - Domingo 28/09
        </label>
        <label>
          <input
            type="checkbox"
            checked={gift.date === "Sábado 04/10 - Domingo 05/10"}
            onChange={() => setDate("Sábado 04/10 - Domingo 05/10")}
          />
          <strong>Finde 3:</strong> Sábado 04/10 - Domingo 05/10
        </label>
        <label>
          <input
            type="checkbox"
            checked={gift.date === "Sábado 11/10 - Domingo 12/10"}
            onChange={() => setDate("Sábado 11/10 - Domingo 12/10")}
          />
          <strong>Finde 4:</strong> Sábado 11/10 - Domingo 12/10
        </label>
      </div>
      <div className={gift.date ? "fadeIn" : "fadeOut"}>
        <ArrowsScrollButton option="down" targetId="second-section" />
      </div>
    </div>
  );
}
