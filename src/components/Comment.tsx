"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    content:
      "Dễ dàng theo dõi các số liệu, báo cáo ngay trên điện thoại là điều tuyệt vời mà chỉ có HRM ETEK mang lại",
    name: "Chị Đỗ Thị Tuyết Mai",
    role: "TRƯỞNG PHÒNG HÀNH CHÍNH",
    avatar: "/images/kh1.webp",
  },
  {
    id: 2,
    content:
      "Nhờ áp dụng phần mềm Eteksofts HRM thực sự giúp công việc của tôi nhẹ nhàng hơn rất nhiều.",
    name: "Chị Phạm Phương Oanh",
    role: "CHUYÊN VIÊN NHÂN SỰ - CÔNG TY THƯƠNG MẠI 686",
    avatar: "/images/kh2.webp",
  },
  {
    id: 3,
    content:
      "Tôi thật sự thích hệ thống báo cáo đa dạng, thiết thực dựa theo dữ liệu thực tế. Giao diện thân thiện, dễ sử dụng.",
    name: "Anh Ngô Cao Vinh",
    role: "GIÁM ĐỐC - CÔNG TY WETEK",
    avatar: "/images/kh1.webp",
  },
  {
    id: 4,
    content:
      "Tôi thật sự thích hệ thống báo cáo đa dạng, thiết thực dựa theo dữ liệu thực tế. Giao diện thân thiện, dễ sử dụng.",
    name: "Anh Ngô Cao Vinh",
    role: "GIÁM ĐỐC - CÔNG TY WETEK",
    avatar: "/images/kh2.webp",
  },
  {
    id: 5,
    content:
      "Tôi thật sự thích hệ thống báo cáo đa dạng, thiết thực dựa theo dữ liệu thực tế. Giao diện thân thiện, dễ sử dụng.",
    name: "Anh Ngô Cao Vinh",
    role: "GIÁM ĐỐC - CÔNG TY WETEK",
    avatar: "/images/kh2.webp",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16" style={{ backgroundImage: "url('/images/bgnew1.jpg')" }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-700 mb-12">
          Khách hàng và đối tác nói về chúng tôi
        </h2> <br />

        <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
            centeredSlides={true}   // 🔥 đảm bảo slide active luôn ở giữa
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            >
            {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                <div className="slide-item bg-white p-6 rounded-xl shadow-lg relative h-full flex flex-col justify-between transition-all duration-500 ease-in-out">
                    {/* Nội dung */}
                    <p className="text-gray-700 italic mb-6 relative">
                    <span className="text-4xl text-blue-600 absolute -top-4 -left-2"></span>
                    {item.content}
                    </p>

                    {/* Avatar + Info */}
                    <div className="flex items-center gap-3 mt-12">
                    <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                    />
                    <div>
                        <p className="font-semibold text-blue-700">{item.name}</p>
                        <p className="text-xs text-gray-500 uppercase">{item.role}</p>
                    </div>
                    </div>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
      </div>
    </section>
  );
}
