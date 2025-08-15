import Link from "next/link";
import Image from "next/image";

export default function Header() {
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
              <Link href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-normal transition-colors">
                Lĩnh vực hoạt động
              </Link>
              <Link href="/product" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-normal transition-colors">
                Sản phẩm
              </Link>
              <Link href="/article" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-normal transition-colors">
                Tin tức
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-normal transition-colors">
                Dịch vụ
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
    </header>
  );
}
