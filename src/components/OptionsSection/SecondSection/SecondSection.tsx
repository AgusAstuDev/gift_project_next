import ArrowsScrollButton from "@/components/Commons/ArrowsScrollButton/ArrowsScrollButton";
import style from "./SecondSection.module.css";
import { useGift } from "@/context/GiftContext";

export default function SecondSection() {
  const { gift, setPlace } = useGift();
  return (
    <div id="second-section" className={style.secondSectionContainer}>
      <ArrowsScrollButton option="up" targetId="first-section" />
      <p>
        Ahora viene la parte divertida: quiero que armes tu propio regalo 💝.
        Primero elegí el finde que más te guste, y después vamos a elegir juntos
        el lugar perfecto para disfrutarlo.
      </p>
      <div>
        <label>
          <input
            type="checkbox"
            checked={gift.place === "Lugar 1"}
            onChange={() => setPlace("Lugar 1")}
          />
          Lugar 1
        </label>
        <label>
          <input
            type="checkbox"
            checked={gift.place === "Lugar 2"}
            onChange={() => setPlace("Lugar 2")}
          />
          Lugar 2
        </label>
      </div>
      <div className={gift.place ? "fadeIn" : "fadeOut"}>
        <ArrowsScrollButton option="down" targetId="third-section" />
      </div>
    </div>
  );
}
