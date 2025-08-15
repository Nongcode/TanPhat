"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { a } from "framer-motion/client";
import Link from "next/link";

const newsItems = [
  {
    title: "Hệ thống lọc khí và quạt hút phòng sơn",
    image: "/images/tintuc.webp",
    description: "Giải pháp tối ưu trong giải pháp dây chuyển bảo vệ sức khỏe công nhân",
    
  },
  {
    title: "Thiết bị đào tạo công nghiệp",
    image: "/images/tintuc2.webp",
    description: "Điện công nghiệp là một ngành then chốt trong lĩnh vực kỹ thuật. Đào tạo ngành này đòi hỏi sự kết hợp giữa lý thuyết và thực hành.",
  },
  {
    title: "Giải pháp xử lý khí thải sơn trong công nghiệp",
    image: "/images/tintuc3.webp",
    description: "Trong quá trình sơn phủ sản phẩm công nghiệp, khí thải phát sinh chứa nhiều loại bụi, mùi gây ô nhiễm.",
  },
  {
    title: "Dây chuyền sơn tĩnh điện Modular",
    image: "/images/tintuc4.webp",
    description: "Giải pháp dây chuyền sơn tĩnh điện modular ra đời nhằm giải quyết các vấn đề trên – vừa tiết kiệm chi phí vừa tối ưu hiệu suất,.",
  },
  {
    title: "ETEK tham gia hội thảo đào tạo nhân lực robot & AI",
    image: "/images/tintuc5.jpg",
    description: "Đây là sự kiện quy tụ các chuyên gia đầu ngành, doanh nghiệp công nghệ và cơ sở đào tạo hàng đầu với mục tiêu thúc đẩy phát triển nguồn nhân lực chất lượng cao cho cuộc cách mạng công nghiệp 4.0",
  },
];

export default function FeaturedNewsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-10 bg-white">
      <h2
        className="text-3xl font-bold text-center text-yellow-500 mb-6"
        style={{ marginBottom: 15 }}
      >
        Tin tức nổi bật
      </h2>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="px-4"
      >
        {newsItems.map((item, index) => {
          // Tính toán vị trí focus ở giữa
          const middleIndex = (activeIndex + 1) % newsItems.length;
          const isFocused = index === middleIndex;

          return (
            <SwiperSlide key={index}>            
                <Link href={`/news/${index}`} passHref>
                    <div
                    className={`rounded-lg overflow-hidden transition-all duration-500 cursor-pointer ${
                        isFocused ? "scale-105 shadow-2xl z-10" : "scale-95 opacity-60 blur-[1px]"
                    }`}
                    >
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-[500px] h-[200px] object-cover mx-auto"
                    />
                    <div className="p-4 bg-white">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                    </div>
                </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
