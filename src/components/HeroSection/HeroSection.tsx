import style from "./HeroSection.module.css";
import SwiperAlbumCards from "./SwiperAlbumCards/SwiperAlbumCards";
import ArrowsScrollButton from "../Commons/ArrowsScrollButton/ArrowsScrollButton";
import Image from "next/image";
import garlandImage from "@/../public/images/animate/garland.png";

export default function HeroSection() {
  return (
    <section id="hero-section" className={style.heroContainer}>
      <h1>¡ Muy Feliz Cumpleaños mi Bebé !</h1>
      <SwiperAlbumCards />
      <p className={style.heroParagraph}>
        Esto no es un{" "}
        <span style={{ textDecoration: "underline" }}>regalo</span> cualquiera.
        No se abre con papel, se abre con tu elección.
      </p>
      <ArrowsScrollButton option="gift" targetId="first-section" />
      <div className={style.garlandImage}>
        <Image src={garlandImage} alt="Garland Image" />
      </div>
    </section>
  );
}
