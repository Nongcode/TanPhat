import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
              <Link href="/" className="text-2xl font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                <Image src="/images/logo1.jpg" alt="MyWebsite" width={150} height={150} />
              </Link>
              <br />
            <p className="text-grey-300 text-base font-normal my-10">Trụ sở Hà Nội</p>
            <p className="text-gray-400 text-base font-normal my-10">
               Địa chỉ: 189 - Phan Trọng Tuệ - Thanh Liệt - Hà Nội <br />ĐT: 02433 916 161
            </p>
            <p className="text-grey-300 text-base font-normal my-10">Chi nhánh Hải Phòng</p>
            <p className="text-gray-400 text-base font-normal my-10">
              Địa chỉ: TDT Phấn Dũng - P.Hưng Đạo - Hải Phòng <br />ĐT: 02253 599 865
            </p>
            <p className="text-grey-300 text-base font-normal my-10">Chi nhánh miền Trung</p>
            <p className="text-gray-400 text-base font-normal my-10">
              Địa chỉ: Km2, số 9, Đại lộ Vinh - Cửa Lò - Nghi Phú - Nghệ An <br />ĐT: 02383 929 668 
            </p>
            <p className="text-grey-300 text-base font-normal my-10">Công Ty TNHH Thiết Bị Tân Phát Sài Gòn</p>
            <p className="text-gray-400 text-base font-normal my-10">
              Địa chỉ: Số 1 Lê Đức Thọ - P.Tân Thới Hiệp - TP.HCM<br />ĐT: 02862 987 987
            </p>
            <br />
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>           
          </div>
          <div className="xl:col-span-2 flex flex-col gap-8">
            {/* Grid 2 hàng 2 cột bản đồ */}
            <div className="grid grid-cols-2 gap-4">
              <iframe
                src="https://www.google.com/maps?q=189+Phan+Trọng+Tuệ,+Thanh+Liệt,+Hà+Nội&output=embed" // Link Google Maps Hà Nội
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
              <iframe
                src="https://www.google.com/maps?q=TDT+Phấn+Dũng,+Phường+Hưng+Đạo,+Hải+Phòng&output=embed" // Link Google Maps Hải Phòng
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
              <iframe
                src="https://www.google.com/maps?q=Km2,+số+9,+Đại+lộ+Vinh,+Cửa+Lò,+Nghi+Phú,+Nghệ+An&output=embed" // Link Google Maps Nghệ An
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
              <iframe
                src="https://www.google.com/maps?q=Số+1+Lê+Đức+Thọ,+P.Tân+Thới+Hiệp,+TP.HCM&output=embed" // Link Google Maps TP.HCM
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>

            {/* Thông tin về chúng tôi và điều khoản */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-grey-400 tracking-wider uppercase">Về chúng tôi</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-gray-400 text-base hover:text-black">Lịch sử hình thành</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-black">Giới thiệu</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-black">Thông tin tập đoàn</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-black">Thông tin tuyển dụng</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-grey-400 tracking-wider uppercase">Điều khoản và dịch vụ</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-300 hover:text-black">Chính sách bán hàng</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-black">Chính sách đổi - trả</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-black">Chính sách bảo hành</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-black">Chính sách vận chuyển</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-grey-400 tracking-wider uppercase">Điều khoản và dịch vụ</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-300 hover:text-black">Chính sách bán hàng</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-black">Chính sách đổi - trả</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-black">Chính sách bảo hành</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-black">Chính sách vận chuyển</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center font-normal">
            &copy; 2025 Phát triển bởi Tân Phát ETEK. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
