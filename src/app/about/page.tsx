export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-semibold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Về</span>
              <span className="block text-indigo-600">Chúng tôi</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl font-normal">
              Chúng tôi là đội ngũ chuyên gia công nghệ với nhiều năm kinh nghiệm trong lĩnh vực phát triển web và ứng dụng.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                Sứ mệnh của chúng tôi
              </h2>
              <p className="text-lg text-gray-600 font-normal mb-6">
                Chúng tôi cam kết mang đến những giải pháp công nghệ hiện đại, sáng tạo và hiệu quả cho doanh nghiệp. 
                Mục tiêu của chúng tôi là giúp khách hàng tối ưu hóa quy trình kinh doanh thông qua công nghệ.
              </p>
              <p className="text-lg text-gray-600 font-normal mb-6">
                Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi tự tin có thể đáp ứng mọi yêu cầu từ đơn giản đến phức tạp.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-semibold text-indigo-600">50+</div>
                  <div className="text-sm text-gray-500">Dự án hoàn thành</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-indigo-600">30+</div>
                  <div className="text-sm text-gray-500">Khách hàng hài lòng</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-indigo-600">5+</div>
                  <div className="text-sm text-gray-500">Năm kinh nghiệm</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Giá trị cốt lõi
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 font-normal">Chất lượng sản phẩm hàng đầu</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 font-normal">Dịch vụ khách hàng tận tâm</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 font-normal">Đổi mới và sáng tạo không ngừng</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 font-normal">Đảm bảo thời gian giao hàng</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Đội ngũ của chúng tôi
            </h2>
            <p className="text-lg text-gray-600 font-normal max-w-2xl mx-auto">
              Gặp gỡ những chuyên gia tài năng đang tạo nên sự khác biệt trong lĩnh vực công nghệ.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nguyễn Văn A</h3>
              <p className="text-indigo-600 font-normal">CEO & Founder</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trần Thị B</h3>
              <p className="text-indigo-600 font-normal">Lead Developer</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lê Văn C</h3>
              <p className="text-indigo-600 font-normal">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
