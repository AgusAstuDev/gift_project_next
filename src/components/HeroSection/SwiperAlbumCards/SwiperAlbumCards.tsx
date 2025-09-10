import { EffectCards, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import style from "./SwiperAlbumCards.module.css";

import Image from "next/image";

import image1 from "@/../public/images/album/IMG_0414.webp";
import image2 from "@/../public/images/album/IMG_0430.webp";
import image3 from "@/../public/images/album/IMG_0634.webp";
import image4 from "@/../public/images/album/IMG_0646.webp";
import image5 from "@/../public/images/album/IMG_0680.webp";
import image6 from "@/../public/images/album/IMG_0301.webp";
import image7 from "@/../public/images/album/IMG_0302.webp";
import image8 from "@/../public/images/album/IMG_0303.webp";
import image10 from "@/../public/images/album/IMG_0305.webp";
import image11 from "@/../public/images/album/IMG_0306.webp";
import image12 from "@/../public/images/album/IMG_0307.webp";
import image13 from "@/../public/images/album/IMG_0308.webp";

const images = [
  { src: image1, alt: "Imagen 1" },
  { src: image6, alt: "Imagen 6" },
  { src: image13, alt: "Imagen 13" },
  { src: image2, alt: "Imagen 2" },
  { src: image8, alt: "Imagen 8" },
  { src: image3, alt: "Imagen 3" },
  { src: image10, alt: "Imagen 10" },
  { src: image4, alt: "Imagen 4" },
  { src: image12, alt: "Imagen 12" },
  { src: image5, alt: "Imagen 5" },
  { src: image7, alt: "Imagen 7" },
  { src: image11, alt: "Imagen 11" },
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
          delay: 5000,
          disableOnInteraction: true,
          stopOnLastSlide: true,
        }}
        cardsEffect={{ perSlideOffset: 15 }}
        speed={800}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <Image src={img.src} alt={img.alt} width={400} height={600} />
          </SwiperSlide>
        ))}
      </Swiper>
      <p style={{ fontSize: "15px" }}>
        ❤️ Cada foto es un pedacito de nuestra historia ❤️
      </p>
    </section>
  );
}
