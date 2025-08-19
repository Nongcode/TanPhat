"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function IndustryPage() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 fade-in-section opacity-0 transition-opacity duration-1000">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="/images/lvhd-1.jpg"
            alt="Ngành Tự động hóa"
            className="rounded-2xl shadow-2xl"
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Tự động hóa – Ngành của tương lai
            </h2> <br />
            <p className="text-gray-600 leading-relaxed mb-6">
              Tự động hóa đang thay đổi cách chúng ta sống, học tập và
              làm việc. Ngành công nghiệp chế biến, chế tạo là động lực tăng trưởng của nền kinh tế, 
              Etek tự hào đồng hành cùng các nhà máy sản xuất tại Việt Nam để ứng dụng các giải pháp tự động hóa 
              nhằm nâng cao hiệu quả sản xuất và tăng lợi thế cạnh tranh của doanh nghiệp.
            </p> <br />
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:bg-indigo-700 transition">
              Tìm hiểu thêm
            </button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20 fade-in-section opacity-0 transition-opacity duration-1000">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Vì sao nên chọn Tân Phát ETEK?
          </h2> <br />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "19+",
                desc: "Năm kinh nghiệm trong ngành",
                icon: "🎖️",
              },
              {
                title: "Top 500",
                desc: "Doanh nghiệp tăng trưởng nhanh nhất Việt Nam.",
                icon: "🌍",
              },
              {
                title: "230+",
                desc: "Nhân sự được học hỏi, cập nhật công nghệ mới.",
                icon: "🚀",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center border border-gray-100 hover:shadow-2xl"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
            {/* Call to Action */}
        <section className="relative h-[700px] py-20 bg-[url('/images/poster.png')] bg-cover bg-center text-white fade-in-section opacity-0 transition-opacity duration-1000">
            <div className="absolute inset-0 bg-black/50"></div> {/* lớp overlay làm ảnh dễ đọc chữ */}
            
            <div className="relative max-w-4xl mx-auto text-center px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Giới thiệu về ngành làm việc
                </h2>
                <p className="text-lg md:text-xl leading-relaxed">
                Ngành của chúng tôi luôn tiên phong trong việc áp dụng công nghệ hiện đại,
                sáng tạo trong giải pháp và mang đến giá trị bền vững cho khách hàng.
                </p>
            </div>
      </section>

      {/* Showcase / Career Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 fade-in-section opacity-0 transition-opacity duration-1000">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                Danh mục sản phẩm đa dạng
            </h2>
            <br />
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { name: "Thiết bị nâng hạ", image: "/images/tbnh.webp", slug: "thiet-bi-nang-ha" },
                    { name: "Thiết bị kiểm tra xe xuất xưởng", image: "/images/tbktx.webp", slug: "thiet-bi-kiem-tra-xe" },
                    { name: "Thiết bị đào tạo", image: "/images/tbdt.jpg", slug: "thiet-bi-dao-tao" },
                    { name: "Thiết bị bảo vệ môi trường", image: "/images/bvmt.jpg", slug: "thiet-bi-bao-ve-moi-truong" },
                    { name: "Thiết bị dây chuyển sơn", image: "/images/tbdcs.jpg", slug: "thiet-bi-day-chuyen-son" },
                    { name: "Thiết bị tự động hóa", image: "/images/tdh.jpg", slug: "thiet-bi-tu-dong-hoa" },
                ].map((career, i) => (
                    <Link key={i} href={`/product`}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                    >
                        <img
                        src={career.image}
                        alt={career.name}
                        className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                        <p className="text-white text-lg font-semibold">{career.name}</p>
                        </div>
                    </motion.div>
                    </Link>
                ))}
            </div>
        </section>
        <section className="relative bg-gray-100 text-gray-800 py-16 fade-in-section opacity-0 transition-opacity duration-1000">
            <div className="max-w-4xl mx-auto text-center px-6">
                <h2 className="text-3xl font-bold mb-4">Liên hệ ngay với chúng tôi</h2> <br />
                <p className="mb-6 text-lg">
                Hãy để lại thông tin, đội ngũ của chúng tôi sẽ hỗ trợ bạn nhanh chóng.
                </p> <br />
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                    href="tel:+84987654321"
                    className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
                >
                    📞 Gọi ngay
                </a>
                <a
                    href="/contact"
                    className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-xl shadow hover:bg-yellow-300 transition"
                >
                    ✉️ Gửi tin nhắn
                </a>
                </div>
            </div>
        </section>
    </div>
  );
}
