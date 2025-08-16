"use client";

import FeaturedNewsSlider from "@/components/FeaturedNewsSlider";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import "@/styles/home.css";

const article = {
  title: "Tân Phát ETEK tiếp tục mở rộng thị trường quốc tế với dự án tại nhà máy VinFast Ấn Độ",
  author: "Nguyễn Văn A",
  date: "16/08/2025",
  cover: "/images/tp-vf.jpg",
  content: `
  Sự kiện VinFast khánh thành nhà máy sản xuất xe điện tại Thoothukudi, Tamil Nadu, Ấn Độ 
  không chỉ là một dấu mốc lịch sử cho ngành công nghiệp ô tô Việt Nam mà còn là một cột mốc đáng nhớ với Tân Phát ETEK.
   Với vai trò là nhà cung cấp dây chuyền sơn ô tô, Tân Phát ETEK đã chính thức mang công nghệ Việt vươn ra thế giới, khẳng định mạnh mẽ 
   chiến lược "Go Global" của mình. 
  `,
  tags: ["#Vinfast", "#TanPhatETEK", "#HaNoi"],
};

export default function ArticlePage() {
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
    <section className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* MAIN ARTICLE */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 bg-white shadow-xl rounded-2xl overflow-hidden"
        >
          {/* Hero image */}
          <div className="relative w-full h-72 lg:h-96">
            <Image
              src={article.cover}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">{article.title}</h1> <br />
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>✍️ {article.author}</span>
              <span>📅 {article.date}</span>
            </div>

            {/* Nội dung Markdown giả */}
            <div className="prose max-w-none prose-indigo">
              {article.content.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            {/* Tags */}
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div className="flex flex-wrap gap-2 pt-4">
                {article.tags.map((tag) => (
                    <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-indigo-100 text-indigo-600 rounded-full"
                    >
                    #{tag}
                    </span>
                ))}
                </div>
                <div>
                    <button
                        className="
                        bg-gray-200 
                        text-gray-700 
                        font-medium
                        px-4 py-2 
                        rounded-lg 
                        mt-2
                        transition-all 
                        duration-300 
                        ease-in-out
                        hover:bg-indigo-500 
                        hover:text-white 
                        hover:scale-105 
                        hover:shadow-lg
                        "
                    >
                        Xem chi tiết
                    </button>
                </div>
            </div>
          </div>
        </motion.article>

        {/* SIDEBAR */}
        <motion.aside
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-6"
        >
            <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4">Danh mục tin tức</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                Tin tức tập đoàn
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                Tin tức mới nhất
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                Tin tức trong và ngoài nước
              </span>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4" style={{marginBottom:10}}>Bài viết mới</h3>
            <ul className="space-y-4">
                <li className="flex items-start space-x-4 cursor-pointer group">
                <img
                    src="/images/tintuc.jpg"
                    alt="Next.js 14"
                    className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                    <h4 className="text-indigo-600 font-semibold group-hover:underline">
                    Hướng dẫn Next.js 14
                    </h4>
                    <p className="text-gray-600 text-sm">
                    Giới thiệu các tính năng mới và cách triển khai Next.js 14 hiệu quả.
                    </p>
                </div>
                </li>

                <li className="flex items-start space-x-4 cursor-pointer group">
                <img
                    src="/images/tintuc5.jpg"
                    alt="SEO React"
                    className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                    <h4 className="text-indigo-600 font-semibold group-hover:underline">
                    Tối ưu SEO với React
                    </h4>
                    <p className="text-gray-600 text-sm">
                    Các kỹ thuật giúp cải thiện SEO khi làm việc với React và Next.js.
                    </p>
                </div>
                </li>

                <li className="flex items-start space-x-4 cursor-pointer group">
                <img
                    src="/images/tintuc4.webp"
                    alt="TailwindCSS"
                    className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                    <h4 className="text-indigo-600 font-semibold group-hover:underline">
                    Sử dụng TailwindCSS hiệu quả
                    </h4>
                    <p className="text-gray-600 text-sm">
                    Cách tổ chức class và tối ưu hiệu suất khi dùng TailwindCSS.
                    </p>
                </div>
                </li>
                <li className="flex items-start space-x-4 cursor-pointer group">
                <img
                    src="/images/tintuc4.webp"
                    alt="TailwindCSS"
                    className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                    <h4 className="text-indigo-600 font-semibold group-hover:underline">
                    Sử dụng TailwindCSS hiệu quả
                    </h4>
                    <p className="text-gray-600 text-sm">
                    Cách tổ chức class và tối ưu hiệu suất khi dùng TailwindCSS.
                    </p>
                </div>
                </li>
            </ul>
            </div>
        </motion.aside>
      </div>
    </section>

    <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center" style={{marginBottom:20}}>
                Tin tức nổi bật của tập đoàn
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 fade-in-section">
            {/* Item 1 */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer ">
                <img
                src="/images/t1.jpg"
                alt="Tin tức 1"
                className="w-full h-40 object-cover rounded-lg "
                />
                <h4 className="mt-3 font-semibold text-indigo-600 hover:underline" style={{margin:5}}>
                ETEK tham gia triển lãm thiết bị giáo dục quốc tế WORLDDIDAC ASIA 2025 – HANGZHOU
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                    14/08/2025
                </p>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer">
                <img
                src="/images/t2.jpg"
                alt="Tin tức 2"
                className="w-full h-40 object-cover rounded-lg"
                />
                <h4 className="mt-3 font-semibold text-indigo-600 hover:underline" style={{margin:5}}>
                Tân Phát ETEK chia sẻ thực tiễn ứng dụng AI trong tự động hóa tại hội thảo VME 2025
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                    14/08/2025
                </p>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer">
                <img
                src="/images/t3.jpg"
                alt="Tin tức 3"
                className="w-full h-40 object-cover rounded-lg"
                />
                <h4 className="mt-3 font-semibold text-indigo-600 hover:underline" style={{margin:5}}>
                ETEK tham gia hội thảo đào tạo nhân lực robot & AI trong tự động hóa tại Đại học Bách Khoa
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                14/08/2025
                </p>
            </div>

            {/* Item 4 */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer">
                <img
                src="/images/t4.jpg"
                alt="Tin tức 4"
                className="w-full h-40 object-cover rounded-lg"
                />
                <h4 className="mt-3 font-semibold text-indigo-600 hover:underline" style={{margin:5}}>
                ETEK tham gia triển lãm VME 2025 – Giải pháp tự động hóa toàn diện cho ngành điện- điện tử
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                14/08/2025
                </p>
            </div>
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer">
                <img
                src="/images/t5.jpg"
                alt="Tin tức 5"
                className="w-full h-40 object-cover rounded-lg"
                />
                <h4 className="mt-3 font-semibold text-indigo-600 hover:underline" style={{margin:5}}>
                Tân Phát ETEK - cống hiến từ tâm, dẫn lỗi bằng trí tuệ
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                14/08/2025
                </p>
            </div>
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer">
                <img
                src="/images/t6.jpg"
                alt="Tin tức 6"
                className="w-full h-40 object-cover rounded-lg"
                />
                <h4 className="mt-3 font-semibold text-indigo-600 hover:underline" style={{margin:5}}>
                Khóa học hè Tân Phát ETEK Kids 2025: Hành trình trưởng thành và yêu thương
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                14/08/2025
                </p>
            </div>
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer">
                <img
                src="/images/t7.jpg"
                alt="Tin tức 7"
                className="w-full h-40 object-cover rounded-lg"
                />
                <h4 className="mt-3 font-semibold text-indigo-600 hover:underline" style={{margin:5}}>
                ETEK tham gia Talk Show đặc biệt chưa từng có trên truyền hình quốc gia
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                14/08/2025
                </p>
            </div>
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer">
                <img
                src="/images/t8.jpg"
                alt="Tin tức 8"
                className="w-full h-40 object-cover rounded-lg"
                />
                <h4 className="mt-3 font-semibold text-indigo-600 hover:underline" style={{margin:5}}>
                ETEK mở rộng hợp tác – nâng tầm năng lực sản xuất & công nghệ
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                14/08/2025
                </p>
            </div>
            </div>
        </div>
    </section>
    <FeaturedNewsSlider/>
    </>
  );
}
