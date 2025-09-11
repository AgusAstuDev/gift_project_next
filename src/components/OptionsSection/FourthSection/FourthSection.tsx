import ArrowsScrollButton from "@/components/Commons/ArrowsScrollButton/ArrowsScrollButton";
import CreateGiftButton from "@/components/Commons/CreateGiftButton/CreateGiftButton";
import style from "./FourthSection.module.css";
import Image from "next/image";
import presentImage from "@/../public/images/animate/present.png";

export default function FourthSection() {
  return (
    <div id="fourth-section" className={style.FourthSectionContainer}>
      <ArrowsScrollButton option="up" targetId="third-section" />
      <div className={style.titleContainer}>
        <p>
          <strong>¡ Ya está listo tu regalo !</strong>
        </p>
        <div className={style.containerImage}>
          <Image src={presentImage} alt="fireworksImage Image" />
        </div>
        <div className={style.summaryContainer}>
          <p>Ahora podes reclamarlo</p>
          <CreateGiftButton />
        </div>
      </div>
    </div>
  );
}
