"use client";
import "@/styles/home.css";
import Image from "next/image";
import { useEffect } from "react";

import FeaturedNewsSlider from "@/components/FeaturedNewsSlider";
import VideoSection from "@/components/VideoSection";

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
  return (
    <>
      {/* Features Section */}
      <section className="py-16"style={{
              backgroundImage: "url('/images/back-group1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center", marginTop: 20, marginBottom: 20
            }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Các công ty thành viên
            </h2>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">          
              {/* Ảnh 1 */}
              <div
                className=" fade-in-section rounded-lg h-64 shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundImage: "url('/images/etek.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              ></div>

              {/* Ảnh 2 */}
              <div
                className=" fade-in-section rounded-lg h-64 shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundImage: "url('/images/etek-green.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              ></div>

              {/* Ảnh 3 */}
              <div
                className=" fade-in-section rounded-lg h-64 shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundImage: "url('/images/etek-power.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              ></div>

            </div>
          </div>

        </div>
      </section>    

      {/* CTA Section */}
      <section className="cta-section">              
        <div className="bg-white py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <div className="bg-white text-4xl" style={{display: "flex", justifyContent: "center", marginBottom: 15}}>
            <h2>Lĩnh vực hoạt động</h2>
            
          </div> 
          <a href="#" style={{display: "flex", justifyContent:"center", color:"green", fontSize: 20}}>Xem tất cả</a>
          <div className="fade-in-section max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
          
          <div className="fade-in-section max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
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

          <div className="fade-in-section max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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

          <div className="fade-in-section max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
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


          <div className="fade-in-section max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
                  className="rounded-xl shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div> <br />
          <Image src="/images/htst.png" alt="hệ thống sinh thái" className="mx-auto fade-in-section"   width={1200} 
  height={500} /> <br />
           <Image src="/images/kttp.png" alt="hệ thống sinh thái" className="mx-auto fade-in-section"   width={1200} 
  height={500} />

          <VideoSection/>
          <FeaturedNewsSlider/>
        </div>       
      </section>     
    </>
  );
}
