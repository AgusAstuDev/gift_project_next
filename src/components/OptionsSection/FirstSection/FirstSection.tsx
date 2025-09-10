import ArrowsScrollButton from "@/components/Commons/ArrowsScrollButton/ArrowsScrollButton";
import style from "./FirstSection.module.css";
import { useGift } from "@/context/GiftContext";

export default function FirstSection() {
  const { gift, setDate } = useGift();
  return (
    <div id="first-section" className={style.firstSectionContainer}>
      <ArrowsScrollButton option="up" targetId="hero-section" />
      <p>
        Ahora viene la parte divertida: quiero que armes tu propio regalo 💝.
        Primero elegí el finde que más te guste, y después vamos a elegir juntos
        el lugar perfecto para disfrutarlo.
      </p>
      <div>
        <label>
          <input
            type="checkbox"
            checked={gift.date === "Finde 1"}
            onChange={() => setDate("Finde 1")}
          />
          Finde 1
        </label>
        <label>
          <input
            type="checkbox"
            checked={gift.date === "Finde 2"}
            onChange={() => setDate("Finde 2")}
          />
          Finde 2
        </label>
      </div>
      <div className={gift.date ? "fadeIn" : "fadeOut"}>
        <ArrowsScrollButton option="down" targetId="second-section" />
      </div>
    </div>
  );
}
