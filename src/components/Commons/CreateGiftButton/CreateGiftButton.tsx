import { useState, useEffect } from "react";
import { useGift } from "@/context/GiftContext";
import style from "./CreateGiftButton.module.css";

export default function CreateGiftButton() {
  const { gift } = useGift();
  const [waUrl, setWaUrl] = useState("");

  useEffect(() => {
    const createMessage = () => {
      let message = `Hola bebé 💖\n\n`;
      message += `✨ Ye tengo decidido el plan para mi cumpleaños, que lo celebraremos el finde *${
        gift.date || "___"
      }*\n`;
      message += `📍 El lugar en el que quiero compartir es: ${
        gift.place || "___"
      }\n`;
      if (gift.note !== "") {
        message += `📝 Nota para que tengas en cuenta: "${gift.note}"\n`;
      }
      message += `\n¡No puedo esperar a disfrutarlo con vos! 🥰`;
      return encodeURIComponent(message);
    };

    const phoneNumber = "542615582331"; // tu número con código de país
    setWaUrl(`https://wa.me/${phoneNumber}?text=${createMessage()}`);
  }, [gift]);

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={style.giftButton}
    >
      💌 Crear regalo 💌
    </a>
  );
}
