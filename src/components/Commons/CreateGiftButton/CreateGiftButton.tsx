import { useState, useEffect } from "react";
import { useGift } from "@/context/GiftContext";
import style from "./CreateGiftButton.module.css";

export default function CreateGiftButton() {
  const { gift } = useGift();
  const [waUrl, setWaUrl] = useState("");

  useEffect(() => {
    const createMessage = () => {
      let message = `Hola bebé 💖\n\n`;
      message += `✨ Ya tengo decidido el plan para mi cumpleaños, que lo celebraremos el finde del *${
        gift.date || "___"
      }*\n\n`;
      message += `📍 El lugar más adecuado para compartir este momento es en ${
        gift.place === "Hotel"
          ? "un hotel 🏨"
          : gift.place === "Cabaña"
          ? "una cabaña 🏡"
          : gift.place === "Bodega"
          ? "una bodega 🍷"
          : "___"
      }\n\n`;
      if (gift.note !== "") {
        message += `📝 Nota para que tengas en cuenta: "${gift.note}"\n\n`;
      }
      message += `¡No puedo esperar a disfrutarlo con vos! 🥰`;
      return encodeURIComponent(message);
    };

    const phoneNumber = "542615582331";
    setWaUrl(`https://wa.me/${phoneNumber}?text=${createMessage()}`);
  }, [gift]);

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={style.giftButton}
    >
      💌 Reclamar 💌
    </a>
  );
}
