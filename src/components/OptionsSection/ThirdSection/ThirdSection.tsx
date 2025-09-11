import ArrowsScrollButton from "@/components/Commons/ArrowsScrollButton/ArrowsScrollButton";
import style from "./ThirdSection.module.css";
import { useGift } from "@/context/GiftContext";

export default function ThirdSection() {
  const { gift, setNote } = useGift();
  return (
    <div id="third-section" className={style.thirdSectionContainer}>
      <ArrowsScrollButton option="up" targetId="second-section" />
      <p>
        <strong>💫 ¡Todo casi listo! 💫</strong>
      </p>
      <div className={style.summaryContainer}>
        <div>
          <p>Entonces quedamos para el finde</p>
          <p>
            <strong>{gift.date}</strong>
          </p>
        </div>
        <div>
          {gift.place === "Hotel" && (
            <>
              <p>Para disfrutar en un</p>
              <p>
                <strong>Hotel romántico</strong> 🏨
              </p>
            </>
          )}
          {gift.place === "Cabaña" && (
            <>
              <p>Para disfrutar de una</p>
              <p>
                <strong>Cabaña + abrazos + relax</strong> 🏡
              </p>
            </>
          )}
          {gift.place === "Bodega" && (
            <>
              <p>Para disfrutar de</p>
              <p>
                <strong>Vinos, risas y mucho amor</strong> 🍷
              </p>
            </>
          )}
        </div>
      </div>
      <div className={style.optionsContainer}>
        <p>¿Querés dejarme algún comentario o detalle extra? ✍️</p>
        <textarea
          className="w-full border rounded-lg p-2"
          placeholder="Ej: Me encantaría que vayamos después de almorzar ❤️"
          value={gift.note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <ArrowsScrollButton option="down" targetId="fourth-section" />
    </div>
  );
}
