"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "@/styles/home.css";

const allProducts = Array.from({ length: 60 }, (_, i) => ({
  id: i + 1,
  name: `Sản phẩm ${i + 1}`,
  price: `${(Math.random() * 1000000).toFixed(0)} đ`,
  image: `https://picsum.photos/300?random=${i + 1}`,
  sold: Math.floor(Math.random() * 1000), // số lượng bán (giả lập)
}));


type Product = {
    id: number;
    name: string;
    price: string;
    image: string;
    sold: number;
};
  
// Lấy ra 6 sản phẩm bán chạy nhất
const bestSellers = [...allProducts]
  .sort((a, b) => b.sold - a.sold)
  .slice(0, 12);

export default function ProductPage() {
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
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProductDetail, setSelectedProductDetail] = useState<Product | null>(null);


    const openModal = (product: Product) => {
        setSelectedProductDetail(product);
        setModalOpen(true);
    };  
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState("all");
  const productsPerPage = 20;

  // Lọc theo combo box
  const filteredProducts =
    selectedProduct === "all"
      ? allProducts
      : allProducts.filter((p) => p.name === selectedProduct);

  // Tính toán phân trang
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Danh sách sản phẩm
      </h2> <br />

      {/* Combo box lọc sản phẩm */}
      <div className="mb-6 flex justify-center">
        <select
          value={selectedProduct}
          onChange={(e) => {
            setSelectedProduct(e.target.value);
            setCurrentPage(1);
          }}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:ring-2 focus:ring-blue-400"
        >
          <option value="all">-- Tất cả sản phẩm --</option>
          {allProducts.map((product) => (
            <option key={product.id} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
      </div>

      {/* 🔥 Sản phẩm bán chạy nhất */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4 text-red-600">
          🔥 Sản phẩm bán chạy
        </h3> <br />
        <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            navigation
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 6 },
            }}
            >
            {bestSellers.map((product) => (
                <SwiperSlide key={product.id}>
                <Link
                    href={`/products/${product.id}`}
                    className="bg-white rounded-xl shadow-md overflow-hidden block 
                            transition-all duration-300 ease-in-out
                            hover:scale-105 hover:ring-2 hover:ring-blue-400 hover:shadow-xl
                            focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover"
                    />
                    <div className="p-2 text-center">
                    <h4 className="text-sm font-medium truncate">{product.name}</h4>
                    <p className="text-red-500 font-bold text-sm">{product.price}</p>
                    </div>
                </Link>
                </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* Grid sản phẩm chính */}
      <h3 className="text-xl font-semibold mb-4 text-red-600">
        Danh sách sản phẩm 
      </h3> <br />
      {currentProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 fade-in-section">
          {currentProducts.map((product) => (         
            <div
            key={product.id}
            onClick={() => openModal(product)}
            className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-blue-400 hover:shadow-xl block"
            >
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-red-500 font-bold">{product.price}</p>
            </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-6">
          Không tìm thấy sản phẩm nào.
        </p>
      )}

      {/* Phân trang */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Trước
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-md ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Sau
          </button>
        </div>
      )}
      {modalOpen && selectedProductDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-6 relative">
            {/* Nút đóng */}
            <button
                onClick={() => setModalOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
            >
                &times;
            </button>

            {/* Cột trái: ảnh */}
            <div className="flex flex-col gap-4">
                <img
                src={selectedProductDetail.image}
                alt={selectedProductDetail.name}
                className="w-full h-64 object-cover rounded"
                />
                {/* Có thể thêm nhiều ảnh nếu có */}
            </div>

            {/* Cột phải: thông tin */}
            <div>
                <h2 className="text-2xl font-bold mb-4">{selectedProductDetail.name}</h2>
                <p className="text-red-500 text-xl font-semibold mb-2">
                {selectedProductDetail.price}
                </p>
                <p className="text-gray-700">
                Đây là mô tả chi tiết của sản phẩm. Bạn có thể tùy chỉnh nội dung này theo dữ liệu thực tế.
                </p>
            </div>
            </div>
        </div>
        )}
    </div>
  );
}
