"use client";
import { motion } from "framer-motion";
import HeroSlider from "@/components/HeroSlider";
import { useEffect } from "react"; 
import "@/styles/home.css";
import Image from "next/image";
import FeaturedNewsSlider from "@/components/FeaturedNewsSlider";


export default function About() {
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

  const coreValues = [
    "Nhân - Lễ - Nghĩa - Trí - Tín",
    "Bản thân - Gia đình - Tổ chức - Xã hội",
    "Tận tâm - Tận tình - Chu đáo",
    "Chất lượng dịch vụ hàng đầu",
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSlider />

      {/* Content Section */}
      <section className="bg-white py-10 px-6 fade-in-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="px-4 md:px-8">
            {/* Quote */}
            <div className="bg-gray-100 p-6 rounded-md mb-6">
              <p className="text-xl md:text-2xl italic font-medium text-gray-800">
                <span className="text-3xl text-blue-600">&quot;</span>
                Hội tụ tinh hoa - Tiên phong giải pháp.
                <span className="text-3xl text-blue-600">&quot;</span>
              </p>
            </div>

            {/* Description */}
            <div className="text-gray-700 space-y-4 text-justify leading-relaxed">
              <p>
                Tôi là <strong>Nguyễn Minh Tân</strong>, hiện đang là tổng giám đốc Tân Phát ETEK, tôi đã không
                ngừng học hỏi và phát triển bản thân qua nhiều dự án khác nhau.
              </p>
              <p>
                Với mong muốn đội ngũ quản lý của ETEK hãy phát huy hơn nữa sứ mệnh chia sẻ, đào tạo những kiến thức,
                kinh nghiệm của mình, đặc biệt về công nghệ và kỹ thuật cho các thế hệ kế cận của công ty,
                giữ vững thế mạnh là đào tạo, góp phần phát triển bền vững cho doanh nghiệp.
              </p>
              <p>
                Tôi tin rằng giá trị cốt lõi của sự nghiệp nằm ở sự kiên định, sáng tạo
                và trách nhiệm với cộng đồng.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/tgd.jpg"
              alt="Ảnh cá nhân"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="mt-6 text-center md:text-left">
              <p className="font-semibold">Tổng Giám đốc Tân Phát ETEK</p>
              <p className="text-gray-700 font-bold text-lg">Ông Nguyễn Minh Tân</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 px-6 fade-in-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/7.jpg"
              alt="Ảnh cá nhân"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="mt-6 text-center md:text-left">
              <p className="font-semibold">Chủ tịch HĐQT Tân Phát ETEK</p>
              <p className="text-gray-700 font-bold text-lg">Ông Nguyễn Trung Phong</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="px-4 md:px-8">
            {/* Quote */}
            <div className="bg-gray-100 p-6 rounded-md mb-6">
              <p className="text-xl md:text-2xl italic font-medium text-gray-800">
                <span className="text-3xl text-blue-600">&quot;</span>
                Hội tụ tinh hoa - Tiên phong giải pháp.
                <span className="text-3xl text-blue-600">&quot;</span>
              </p>
            </div>

            {/* Description */}
            <div className="text-gray-700 space-y-4 text-justify leading-relaxed">
              <p>
                Tôi là <strong>Nguyễn Trung Phong</strong>, hiện đang là Chủ tịch HĐQT Tân Phát ETEK, tôi đã không
                ngừng học hỏi và phát triển bản thân qua nhiều dự án khác nhau.
              </p>
              <p>
                Với mong muốn đội ngũ quản lý của ETEK hãy phát huy hơn nữa sứ mệnh chia sẻ, đào tạo những kiến thức,
                kinh nghiệm của mình, đặc biệt về công nghệ và kỹ thuật cho các thế hệ kế cận của công ty,
                giữ vững thế mạnh là đào tạo, góp phần phát triển bền vững cho doanh nghiệp.
              </p>
              <p>
                Tôi tin rằng giá trị cốt lõi của sự nghiệp nằm ở sự kiên định, sáng tạo
                và trách nhiệm với cộng đồng.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl font-semibold text-gray-900"
              >
                Sứ mệnh của chúng tôi
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lg text-gray-600 font-normal"
              >
                Chúng tôi cam kết mang đến những giải pháp công nghệ hiện đại,
                sáng tạo và hiệu quả cho doanh nghiệp. Mục tiêu của chúng tôi là
                giúp khách hàng tối ưu hóa quy trình kinh doanh thông qua công
                nghệ.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-lg text-gray-600 font-normal"
              >
                Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi tự tin có thể
                đáp ứng mọi yêu cầu từ đơn giản đến phức tạp.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex space-x-8 pt-4"
              >
                <div className="text-center">
                  <div className="text-3xl font-semibold text-indigo-600">
                    50+
                  </div>
                  <div className="text-sm text-gray-500">Dự án hoàn thành</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-indigo-600">
                    30000+
                  </div>
                  <div className="text-sm text-gray-500">
                    Khách hàng hài lòng
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-indigo-600">
                    30+
                  </div>
                  <div className="text-sm text-gray-500">Năm kinh nghiệm</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-gray-100 rounded-lg p-8"
            >
              <motion.h3
                variants={fadeUp}
                className="text-2xl font-semibold text-gray-900 mb-6"
              >
                Giá trị cốt lõi <br />
                <span className="text-indigo-600">
                  Hội tụ tinh hoa - Tiên phong giải pháp
                </span>
              </motion.h3>
              <ul className="space-y-4">
                {coreValues.map((value, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    className="flex items-start"
                  >
                    <svg
                      className="h-6 w-6 text-indigo-600 mt-1 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600 font-normal">{value}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Lịch sử hình thành và phát triển của Tân Phát ETEK
            </h2>
          </div>
          <Image src="/images/lsht.png" alt="lịch sử hình thành" className="mx-auto fade-in-section"   width={1200} 
  height={500} /> <br />
          <p className="text-lg leading-relaxed fade-in-section">
            Hoạt động từ năm 1995 với tư cách là đại diện cho một số hãng thiết
            bị nổi tiếng của Châu Âu tại Việt Nam. Lấy ngành công nghiệp ô tô làm
            cốt lõi, bằng năng lực và uy tín, giờ đây chúng tôi là đơn vị dẫn đầu
            trong nhiều lĩnh vực bao gồm: Giải pháp công nghệ thiết bị cho ngành
            bảo dưỡng, sửa chữa, kiểm định ô tô - xe máy; Giải pháp công nghệ
            thiết bị tự động hoá cho nhà máy; Giải pháp công nghệ thiết bị vật tư
            ngành nhiệt và hơi nhiệt; Giải pháp công nghệ thiết bị đào tạo kỹ
            thuật; Giải pháp công nghệ thiết bị tự động phục vụ cộng đồng; Giải
            pháp công nghệ và thiết bị bảo vệ môi trường; Giải pháp thiết bị vật
            tư làm sạch công nghiệp; Giải pháp quản trị doanh nghiệp ERP theo
            công nghệ 4.0.
          </p>
          <br />
          <Image src="/images/htst.png" alt="hệ thống sinh thái" className="mx-auto fade-in-section"   width={1200} 
  height={500} /> <br />
          <p className="text-lg leading-relaxed fade-in-section">
            Với mạng lưới phân phối trải rộng khắp 63 tỉnh thành, Tân Phát Etek tự
            hào mang đến những sản phẩm và dịch vụ chất lượng cao đến tận tay quý
            khách hàng trên toàn quốc. Chúng tôi cũng cam kết mang đến những trải
            nghiệm dịch vụ tốt nhất cho quý khách hàng cùng với đội ngũ nhân viên
            chuyên nghiệp luôn sẵn sàng tư vấn và hỗ trợ khách hàng tại mọi miền
            đất nước. Không dừng lại ở thị trường nội địa, 
            với các dòng sản phẩm chủ lực và giải pháp trang 
            thiết bị đa dạng cho dây chuyển lắp ráp sản xuất và đào tạo kỹ thuật, 
            Tân Phát Etek đã và đang khẳng định vị thế trên thị trường quốc tế, đáp ứng nhu 
            cầu của khách hàng tại nhiều quốc gia như Ấn Độ, Ả Rập Xê Út, Angola, Campuchia, Lào, ...
            Sứ mệnh của chúng tôi là 
            Trao đi giá trị giải pháp công nghệ và kỹ thuật hiện đại - phù hợp vào sản xuất kinh doanh cho 
            khách hàng để làm chủ kinh doanh của chính mình. Tầm nhìn của chúng tôi là Trở thành tập đoàn hàng đầu 
            Việt Nam trong lĩnh vực công nghệ, tự động hoá, 
            thiết bị phụ trợ cho công nghiệp, bảo dưỡng và sửa chữa ô tô, góp phần kiến tạo giá trị tốt đẹp cho xã hội.
          </p> <br />
          <Image src="/images/lvhd.png" alt="lĩnh vực hoạt động" className="mx-auto fade-in-section"   width={1200} 
  height={500} /> <br />

          <p className="text-lg leading-relaxed fade-in-section">
            Với những đóng góp tích cực vào sự phát triển kinh tế - xã hội, 
            Tân Phát Etek vinh dự được Nhà nước và thành phố trao tặng nhiều giải thưởng danh giá. 
            Những phần thưởng này không chỉ là sự ghi nhận xứng đáng cho những nỗ lực không ngừng nghỉ của chúng tôi mà còn là 
            nguồn động viên to lớn, tiếp thêm sức mạnh để Tân Phát Etek không ngừng đổi mới và vươn xa hơn nữa. Những giải thưởng mà 
            Tân Phát Etek đạt được là niềm tự hào của toàn thể cán bộ công nhân viên công ty. Chúng tôi cam kết sẽ luôn đồng hành cùng 
            khách hàng, đối tác và cộng đồng, tạo ra những giá trị bền vững cho xã hội.
          </p> <br />
          <Image src="/images/gt.png" alt="giải thưởng" className="fade-in-section"   width={1200} 
  height={500} /> <br />

          <Image src="/images/kttp.png" alt="khen thưởng" className="fade-in-section"   width={1200} 
  height={500} />
        </div>
      </section>
      <FeaturedNewsSlider/>
    </>
  );
}
