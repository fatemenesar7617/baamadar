"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const banners = [
  { src: "/banners/banerred.jpg", alt: "بنر1" },
  { src: "/banners/baner2.jpg", alt: "بنر2" },
  { src: "/banners/baner3.jpg", alt: "بنر3" },
];

export default function Banner() {
  return (
    <section className="px-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="rounded-2xl"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <img
              src={banner.src}
              alt={banner.alt}
              className="w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
