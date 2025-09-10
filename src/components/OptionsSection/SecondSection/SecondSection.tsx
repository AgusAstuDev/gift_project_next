import ArrowsScrollButton from "@/components/Commons/ArrowsScrollButton/ArrowsScrollButton";
import style from "./SecondSection.module.css";
import { useGift } from "@/context/GiftContext";

export default function SecondSection() {
  const { gift, setPlace } = useGift();
  return (
    <div id="second-section" className={style.secondSectionContainer}>
      <ArrowsScrollButton option="up" targetId="first-section" />
      <p>
        <strong>💖 ¡Perfecto! 💖</strong>
      </p>
      <div>
        <p>Ahora contame…</p>
        <p>
          ¿Qué plan te tienta más para disfrutar el <strong>{gift.date}</strong>
          ?
        </p>
      </div>
      <div className={style.optionsContainer}>
        <label>
          <input
            type="checkbox"
            checked={gift.place === "Cabaña"}
            onChange={() => setPlace("Cabaña")}
          />
          Cabaña 🏡
        </label>
        <label>
          <input
            type="checkbox"
            checked={gift.place === "Bodega"}
            onChange={() => setPlace("Bodega")}
          />
          Bodega 🍷
        </label>
        <label>
          <input
            type="checkbox"
            checked={gift.place === "Hotel"}
            onChange={() => setPlace("Hotel")}
          />
          Hotel 🏨
        </label>
      </div>
      <div className={gift.place ? "fadeIn" : "fadeOut"}>
        <ArrowsScrollButton option="down" targetId="third-section" />
      </div>
    </div>
  );
}
