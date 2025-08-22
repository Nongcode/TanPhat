"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef} from "react";

export default function Header() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (ticker) {
      const content = ticker.innerHTML;
      ticker.innerHTML += content; // nhân đôi nội dung để cuộn liên tục
    }
  }, []);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200" style={{marginBottom: 10}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                <Image src="/images/logo1.jpg" alt="MyWebsite" width={150} height={150} />
              </Link>
            </div>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-normal transition-colors">
                Trang chủ
              </Link>         
              <div className="relative group">
                {/* Cấp 1 */}
                <button className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-normal transition-colors">
                  Lĩnh vực hoạt động
                </button>

                {/* Menu cấp 2 */}
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md z-10">
                  <ul className="min-w-[300px]">
                    
                    {/* Vận tải */}
                    <li className="relative group">
                      <button className="w-full text-left px-4 py-2 hover:bg-indigo-100" >                                 
                        <Link href="/industry" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-normal transition-colors">
                          Thiết bị sửa chữa bảo dưỡng
                        </Link>
                      </button>
                    </li>
                    <li className="relative group">
                      <button className="w-full text-left px-4 py-2 hover:bg-indigo-100" >                                 
                        <Link href="/industry" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-normal transition-colors">
                          Thiết bị vật tư tự động
                        </Link>
                      </button>
                    </li>
                    <li className="relative group">
                      <button className="w-full text-left px-4 py-2 hover:bg-indigo-100" >                                 
                        <Link href="/industry" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-normal transition-colors">
                          Thiết bị tự động hóa
                        </Link>
                      </button>
                    </li>
                    <li className="relative group">
                      <button className="w-full text-left px-4 py-2 hover:bg-indigo-100" >                                 
                        <Link href="/industry" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-normal transition-colors">
                          Phần mềm quản trị
                        </Link>
                      </button>
                    </li>
                    <li className="relative group">
                      <button className="w-full text-left px-4 py-2 hover:bg-indigo-100" >                                 
                        <Link href="/industry" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-normal transition-colors">
                          Thiết bị đăng kiểm
                        </Link>
                      </button>
                    </li>
                    <li className="relative group">
                      <button className="w-full text-left px-4 py-2 hover:bg-indigo-100" >                                 
                        <Link href="/industry" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-normal transition-colors">
                          Thiết bị vật tư làm sạch
                        </Link>
                      </button>
                    </li>
                    <li className="relative group">
                      <button className="w-full text-left px-4 py-2 hover:bg-indigo-100" >                                 
                        <Link href="/industry" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-normal transition-colors">
                          Thiết bị dạy nghề
                        </Link>
                      </button>
                    </li>
                    <li className="relative group">
                      <button className="w-full text-left px-4 py-2 hover:bg-indigo-100" >                                 
                        <Link href="/industry" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-normal transition-colors">
                          Thiết bị bảo vệ môi trường
                        </Link>
                      </button>
                    </li>
                    <li className="relative group">
                      <button className="w-full text-left px-4 py-2 hover:bg-indigo-100" >                                 
                        <Link href="/industry" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-normal transition-colors">
                          Thiết bị đào tạo kỹ thuật
                        </Link>
                      </button>
                    </li>
                    <li className="relative group">
                      <button className="w-full text-left px-4 py-2 hover:bg-indigo-100" >                                 
                        <Link href="/industry" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-normal transition-colors">
                          Thiết bị ngành nhiệt và hơi nhiệt
                        </Link>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <Link href="/article" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-normal transition-colors">
                Tin tức
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-normal transition-colors">
                Về chúng tôi
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-normal transition-colors">
                Liên hệ
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="w-full bg-blue-400 text-white overflow-hidden">
        <div
          ref={tickerRef}
          className="whitespace-nowrap flex animate-scroll px-6 py-2 text-sm"
        >
          <span className="mx-8">
            🎉 Chào mừng bạn đến với Tân Phát Etek - Hội tụ tinh hoa - Tiên phong giải pháp!
          </span>
          <span className="mx-8">
            🚀 Ưu đãi đặc biệt: Giảm giá 20% cho sản phẩm mới trong tháng này!
          </span>
          <span className="mx-8">
            📢 Liên hệ ngay với chúng tôi để được tư vấn chi tiết.
          </span>
        </div>
      </div>

      {/* CSS cho animation */}
      <style jsx>{`
        .animate-scroll {
          display: inline-flex;
          animation: scroll-left 15s linear infinite;
        }
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </header>
  );
}
