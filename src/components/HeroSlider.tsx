"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function BannerSlider() {
  const banners = [
    "/images/banner1-2025.png",
    "/images/banner-2.webp",
    "/images/banner-3.webp",
  ];

  return (
    <div className="relative w-full">
      {/* Slider background */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="absolute inset-0 w-full h-full"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${banner})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Khối bo tròn đè lên banner */}
      <div className="relative z-10 -mt-16">
        <div className="rounded-t-[100px] shadow-lg px-8 py-12 text-center" style={{ backgroundImage: "url('/images/bgnew.jpg')" }}>
          {/* Tiêu đề */}
          <h2 className="text-white text-3xl mb-2 tracking-wide ">
            CHÀO MỪNG BẠN ĐẾN VỚI
          </h2>
          <h1 className="text-white font-bold text-4xl mb-10">
            TÂN PHÁT ETEK <br />
            Hội tụ tinh hoa - Tiên phong giải pháp
          </h1> <br />

          {/* Grid menu 3 item */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-white transform hover:scale-105 transition duration-300">
              <img src="/images/etek.png" alt="icon1" className="h-32 mb-4 drop-shadow-lg rounded-full" />
              <span className="text-lg font-semibold">ETEK</span>
            </div>

            <div className="flex flex-col items-center text-white transform hover:scale-105 transition duration-300">
              <img src="/images/etek-power.jpg" alt="icon2" className="h-32 mb-4 drop-shadow-lg rounded-full" />
              <span className="text-lg font-semibold">ETEK POWER</span>
            </div>

            <div className="flex flex-col items-center text-white transform hover:scale-105 transition duration-300">
              <img src="/images/etek-green.jpg" alt="icon3" className="h-32 mb-4 drop-shadow-lg rounded-full" />
              <span className="text-lg font-semibold">ETEK GREEN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
