import ArrowsScrollButton from "@/components/Commons/ArrowsScrollButton/ArrowsScrollButton";
import style from "./FirstSection.module.css";
import { useGift } from "@/context/GiftContext";
import Image from "next/image";
import fireworksImage from "@/../public/images/animate/fireworks.png";

export default function FirstSection() {
  const { gift, setDate } = useGift();
  return (
    <div id="first-section" className={style.firstSectionContainer}>
      <ArrowsScrollButton option="up" targetId="hero-section" />
      <div className={style.titleContainer}>
        <p>
          <strong>¡ Ahora viene la parte divertida !</strong>
        </p>
        <div className={style.containerImage}>
          <Image src={fireworksImage} alt="fireworksImage Image" />
        </div>
      </div>
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
            checked={gift.date === "Sábado 04/10 - Domingo 05/10"}
            onChange={() => setDate("Sábado 04/10 - Domingo 05/10")}
          />
          <strong>Finde 1:</strong> Sábado 04/10 - Domingo 05/10
        </label>
        <label>
          <input
            type="checkbox"
            checked={gift.date === "Sábado 11/10 - Domingo 12/10"}
            onChange={() => setDate("Sábado 11/10 - Domingo 12/10")}
          />
          <strong>Finde 2:</strong> Sábado 11/10 - Domingo 12/10
        </label>
        <label>
          <input
            type="checkbox"
            checked={gift.date === "Sábado 18/10 - Domingo 19/10"}
            onChange={() => setDate("Sábado 18/10 - Domingo 19/10")}
          />
          <strong>Finde 3:</strong> Sábado 18/10 - Domingo 19/10
        </label>
        <label>
          <input
            type="checkbox"
            checked={gift.date === "Sábado 25/10 - Domingo 26/10"}
            onChange={() => setDate("Sábado 25/10 - Domingo 26/10")}
          />
          <strong>Finde 4:</strong> Sábado 25/10 - Domingo 26/10
        </label>
        <label>
          <input
            type="checkbox"
            checked={gift.date === "Sábado 01/11 - Domingo 02/11"}
            onChange={() => setDate("Sábado 01/11 - Domingo 02/11")}
          />
          <strong>Finde 5:</strong> Sábado 01/11 - Domingo 02/11
        </label>
      </div>
      <div className={gift.date ? "fadeIn" : "fadeOut"}>
        <ArrowsScrollButton option="down" targetId="second-section" />
      </div>
    </div>
  );
}
