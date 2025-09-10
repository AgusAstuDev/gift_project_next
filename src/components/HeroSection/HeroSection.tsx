import style from "./HeroSection.module.css";
import SwiperAlbumCards from "./SwiperAlbumCards";

export default function HeroSection() {
  return (
    <div className={style.heroContainer}>
      <h1>¡ Muy Feliz Cumpleaños mi Bebé !</h1>
      <SwiperAlbumCards />
      <p className={style.heroParagraph}>
        Esto no es un regalo cualquiera… es el comienzo de un plan secreto.
        ¿Querés descubrirlo? Solo tenés que armarlo a tu manera.
      </p>
      <div
        className={style.downArrow}
        onClick={() => {
          document
            .getElementById("next-section")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14M12 19l-7-7M12 19l7-7"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p style={{ fontSize: "28px", marginTop: "3px" }}>🎁</p>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14M12 19l-7-7M12 19l7-7"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
