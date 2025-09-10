import { EffectCards, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import style from "./SwiperAlbumCards.module.css";

import Image from "next/image";

import image1 from "../../../public/images/album/IMG_0414.webp";
import image2 from "../../../public/images/album/IMG_0430.webp";
import image3 from "../../../public/images/album/IMG_0634.webp";
import image4 from "../../../public/images/album/IMG_0646.webp";
import image5 from "../../../public/images/album/IMG_0680.webp";

const images = [
  { src: image1, alt: "Imagen 1" },
  { src: image2, alt: "Imagen 2" },
  { src: image3, alt: "Imagen 3" },
  { src: image4, alt: "Imagen 4" },
  { src: image5, alt: "Imagen 5" },
];

export default function SwiperAlbumCards() {
  return (
    <section className={style.swiperSection}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[Autoplay, EffectCards]}
        className="mySwiper"
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <Image src={img.src} alt={img.alt} width={400} height={600} />
          </SwiperSlide>
        ))}
      </Swiper>
      <p>❤️ Cada foto es un pedacito de nuestra historia ❤️</p>
    </section>
  );
}
