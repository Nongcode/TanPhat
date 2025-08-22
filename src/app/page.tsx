"use client";
import "@/styles/home.css";
import Image from "next/image";
import { useEffect } from "react";

import FeaturedNewsSlider from "@/components/FeaturedNewsSlider";
import VideoSection from "@/components/VideoSection";
import Comment from "@/components/Comment";
import AwardSection from "@/components/AwardSection";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, { threshold: 0.1 });

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  const partners = [
    { id: 1, logo: "/images/dt1.jpg", alt: "ETEK POWER" },
    { id: 2, logo: "/images/dt2.webp", alt: "WETEK" },
    { id: 3, logo: "/images/dt4.webp", alt: "DUCLOCSON" },
    { id: 4, logo: "/images/dt3.png", alt: "ETEK GREEN" },
  ];
  const items = [
    { src: "/images/tpetek.jpg", title: "TÂN PHÁT ETEK" },
    { src: "/images/etek.png", title: "ETEK", href: "https://etek.com.vn/"},
    { src: "/images/etek-power.jpg", title: "ETEK POWER", href: "https://etekpower.vn/" },
    { src: "/images/etek-green.jpg", title: "ETEK GREEN", href:"https://etekgreen.vn/" },
  ];

  return (
    <>

      {/* CTA Section */}
      <section className="cta-section"> 
      <div
        className="w-full shadow-lg px-8 py-12 text-center mt-0"
        style={{ backgroundImage: "url('/images/bgnew.jpg')" }}
      >
        <h2 className="text-white text-3xl mb-2 tracking-wide">
          CHÀO MỪNG BẠN ĐẾN VỚI
        </h2>
        <h1 className="text-white font-bold text-4xl mb-10">
          TÂN PHÁT ETEK <br />
          Hội tụ tinh hoa - Tiên phong giải pháp
        </h1>

        <div className=" py-10">
          <h2 className="text-center text-3xl font-bold mb-8 text-white">
            Hệ sinh thái Tân Phát ETEK
          </h2> <br />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {items.map((item, i) => (
              <Link 
                key={i} 
                href={item.href ?? "#"} 
                target="_blank" // nếu muốn mở tab mới
                className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
              >
                <div className="w-28 h-28 rounded-full shadow-md overflow-hidden bg-white flex items-center justify-center ">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={112}
                    height={112}
                    className="object-contain"
                  />
                </div> <br />
                <p className="mt-3 text-sm font-medium text-white text-center">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>       
        
        <div className="bg-white py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <div className="bg-white text-4xl" style={{display: "flex", justifyContent: "center", marginBottom: 15}}>
            <h2>Lĩnh vực hoạt động</h2> 
          </div> 
          <a href="#" style={{display: "flex", justifyContent:"center", color:"green", fontSize: 20}}>Xem tất cả</a> <br />
          <div className="fade-in-section w-full px-[85px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Phần nội dung bên trái */}
            <div className="text-left">
              <h2 className="text-4xl font-bold text-yellow-400 mb-6">
                Phần mềm Quản trị doanh nghiệp 4.0 (ETEK SOFTS)
              </h2>
              <p className="text-gray-700 mb-6">
                Trải qua quá trình rèn luyện và phát triển, ETEK SOFTS đã từng bước khẳng định và giữ vững vị thế, 
                uy tín chất lượng phần mềm hàng đầu, làm hài lòng hàng triệu khách hàng.
              </p>
              <p className="text-gray-700 mb-6 font-medium">
                Một số sản phẩm nổi bật của ETEK SOFTS:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✔</span> Quản trị nhân sự (HRM ETEK SOFTS)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✔</span> Quản trị doanh nghiệp (ERP)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✔</span> Quản lý bệnh viện (SGIS HOSPITAL MANAGER)
                </li>
              </ul>
              <a
                href="#"
                className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-white font-semibold rounded hover:bg-yellow-500 transition"
              >
                Xem chi tiết
              </a>
            </div>

            {/* Phần hình ảnh bên phải */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/images/cntt.jpeg" // Thay bằng đường dẫn ảnh của bạn
                  alt="Xe VIP"
                  className="rounded-xl shadow-lg max-w-full h-auto"
                />
                {/* Bạn có thể thêm sticker LOVE như trong ảnh */}
              </div>
            </div>
          </div>
          
          <div className="fade-in-section w-full px-[85px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Phần hình ảnh bên trái */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src="/images/dk.jpg"
                  alt="Xe VIP"
                  className="rounded-xl shadow-lg max-w-full h-auto"
                />
              </div>
            </div>

            {/* Phần nội dung bên phải */}
            <div className="text-left">
              <h2 className="text-4xl font-bold text-yellow-400 mb-6">
                Thiết bị đăng kiểm
              </h2>
              <p className="text-gray-700 mb-6">
                Trải qua nhiều năm phát triển đổi mới, Sản phẩm thiết bị đăng kiểm đã từng bước khẳng định và giữ vững vị thế
              </p>
              <p className="text-gray-700 mb-6 font-medium">
                Một số danh mục sản phẩm tiêu biểu:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✔</span> Dây chuyền cho xe con 4 tấn 
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✔</span> Dây chuyền cho xe tải nhẹ 13 tấn 
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✔</span> Dây chuyền cho xe tải 20 tấn 
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✔</span> Thiết bị hiệu chuẩn chuyên dụng
                </li>
              </ul>
              <a
                href="#"
                className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-white font-semibold rounded hover:bg-yellow-500 transition"
              >
                Xem chi tiết
              </a>
            </div>
          </div>
          <br />

          <div className="fade-in-section w-full px-[85px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Phần nội dung bên trái */}
            <div className="text-left">
              <h2 className="text-4xl font-bold text-yellow-400 mb-6">
                Thiết bị vật tư tự động phục vụ cộng đồng
              </h2>
              <p className="text-gray-700 mb-6">
                Trải qua quá trình không ngừng học hỏi và phát triển, ETEK đã từng bước khẳng định và giữ vững vị thế, 
                uy tín chất lượng hàng đầu, làm hài lòng hàng triệu khách hàng.
              </p>
              <p className="text-gray-700 mb-6 font-medium">
                Một số giải pháp tự động nổi bật của ETEK:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✔</span> Công nghiệp
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✔</span> Thiết bị đào tạo chuyên ngành
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✔</span> Dân sinh
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✔</span> Hệ sinh thái ETEK
                </li>
              </ul>
              <a
                href="#"
                className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-white font-semibold rounded hover:bg-yellow-500 transition"
              >
                Xem chi tiết
              </a>
            </div>

            {/* Phần hình ảnh bên phải */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/images/tdhcd.jpg" // Thay bằng đường dẫn ảnh của bạn
                  alt="Xe VIP"
                  className="rounded-xl shadow-lg max-w-full h-auto"
                />
                {/* Bạn có thể thêm sticker LOVE như trong ảnh */}
              </div>
            </div>
          </div>
                <br />

          <div className="fade-in-section w-full px-[85px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Phần hình ảnh bên trái */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src="/images/tdh.jpg"
                  alt="Xe VIP"
                  className="rounded-xl shadow-lg max-w-full h-auto"
                />
              </div>
            </div>

            {/* Phần nội dung bên phải */}
            <div className="text-left">
              <h2 className="text-4xl font-bold text-yellow-400 mb-6">
                Thiết bị ngành nhiệt và hơi nhiệt
              </h2>
              <p className="text-gray-700 mb-6">
                Trải qua quá trình phát triển đổi mới, các thiết bị nhiệt và hơi nhiệt đã từng bước khẳng định và giữ vững vị thế
                hàng đầu đối với hàng triệu khách hàng
              </p>
              <p className="text-gray-700 mb-6 font-medium">
                Một số danh mục tiêu biểu:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✔</span> Thiết bị tản nhiệt
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✔</span> Hệ thống đường ống
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✔</span> Vật tư thiết bị phụ trợ
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✔</span> Bảo dưỡng, sửa chữa, thay thế lò hơi
                </li>
              </ul>
              <a
                href="#"
                className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-white font-semibold rounded hover:bg-yellow-500 transition"
              >
                Xem chi tiết
              </a>
            </div>
          </div>
          <br />


          <div className="fade-in-section w-full px-[85px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Phần nội dung bên trái */}
            <div className="text-left">
              <h2 className="text-4xl font-bold text-yellow-400 mb-6">
                Thiết bị bảo vệ môi trường
              </h2>
              <p className="text-gray-700 mb-6">
                Trải qua quá trình không ngừng học hỏi và phát triển, ETEK GREEN đã từng bước khẳng định và giữ vững vị thế, 
                uy tín chất lượng hàng đầu, làm hài lòng hàng triệu khách hàng.
              </p>
              <p className="text-gray-700 mb-6 font-medium">
                Một số danh mục của ETEK GREEN:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✔</span> Thiết bị phụ trợ cho công nghiệp
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✔</span> Thiết bị dây chuyền sơn
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✔</span> Thiết bị đào tạo kỹ thuật
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✔</span> Thiết bị xử lý môi trường
                </li>
              </ul>
              <a
                href="#"
                className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-white font-semibold rounded hover:bg-yellow-500 transition"
              >
                Xem chi tiết
              </a>
            </div>

            {/* Phần hình ảnh bên phải */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/images/bvmt.jpg" // Thay bằng đường dẫn ảnh của bạn
                  alt="Xe VIP"
                  className="rounded-xl shadow-lg max-w-full h-[400px]"
                />
              </div>
            </div>
          </div> <br />
          <Image src="/images/htst.png" alt="hệ thống sinh thái" className="mx-auto fade-in-section"   width={1200} 
  height={500} /> <br />
          <div className="fade-in-section">
          <AwardSection/>
          </div>
           
          <div className="fade-in-section">
          <Comment/>
          </div>
          
          <VideoSection/>
          <FeaturedNewsSlider/>
          <section className="py-16 bg-white fade-in-section" style={{marginBottom:0}}> 
            <div className="max-w-6xl mx-auto px-4 text-center">
              {/* Tiêu đề */}
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                Đối tác
              </h2>
              <div className="w-12 h-1 bg-red-600 mx-auto mt-3 mb-12"></div>

              {/* Logo đối tác */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                {partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="flex items-center justify-center w-40 h-20" // khung chuẩn cho logo
                  >
                    <img
                      src={partner.logo}
                      alt={partner.alt}
                      className="max-h-16 object-contain" // luôn giữ tỉ lệ, không méo
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>       
      </section>     
    </>
  );
}
