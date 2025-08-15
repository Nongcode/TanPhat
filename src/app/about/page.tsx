"use client";

import { useEffect } from "react";
import Image from "next/image";
import "@/styles/home.css"; // chứa hiệu ứng fade-in-section

export default function AboutPage() {
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
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in-section">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Lịch sử hình thành và phát triển của Tân Phát ETEK
          </h2>
        </div>

        <div className="fade-in-section">
          <Image
            src="/images/lsht.png"
            alt="Lịch sử hình thành"
            width={800}
            height={500}
            className="mx-auto"
          />
          <br />
          <p className="text-lg leading-relaxed">
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
        </div>

        <br />

        <div className="fade-in-section">
          <Image
            src="/images/htst.png"
            alt="Hệ thống"
            width={800}
            height={500}
            className="mx-auto"
          />
          <br />
          <p className="text-lg leading-relaxed">
            Với mạng lưới phân phối trải rộng khắp 63 tỉnh thành, Tân Phát Etek tự
            hào mang đến những sản phẩm và dịch vụ chất lượng cao đến tận tay quý
            khách hàng trên toàn quốc. Chúng tôi cũng cam kết mang đến những trải
            nghiệm dịch vụ tốt nhất cho quý khách hàng cùng với đội ngũ nhân viên
            chuyên nghiệp luôn sẵn sàng tư vấn và hỗ trợ khách hàng tại mọi miền
            đất nước. Không dừng lại ở thị trường nội địa, với các dòng sản phẩm
            chủ lực và giải pháp trang thiết bị đa dạng cho dây chuyền lắp ráp sản
            xuất và đào tạo kỹ thuật, Tân Phát Etek đã và đang khẳng định vị thế
            trên thị trường quốc tế, đáp ứng nhu cầu của khách hàng tại nhiều quốc
            gia như Ấn Độ, Ả Rập Xê Út, Angola, Campuchia, Lào, ...
            Sứ mệnh của chúng tôi là &quot;Trao đi giá trị giải pháp công nghệ và kỹ
            thuật hiện đại - phù hợp vào sản xuất kinh doanh cho khách hàng để làm
            chủ kinh doanh của chính mình&quot;. Tầm nhìn của chúng tôi là &quot;Trở
            thành tập đoàn hàng đầu Việt Nam trong lĩnh vực công nghệ, tự động
            hoá, thiết bị phụ trợ cho công nghiệp, bảo dưỡng và sửa chữa ô tô, góp
            phần kiến tạo giá trị tốt đẹp cho xã hội&quot;.
          </p>
        </div>

        <br />

        <div className="fade-in-section">
          <Image
            src="/images/lvhd.png"
            alt="Lĩnh vực hoạt động"
            width={800}
            height={500}
            className="mx-auto"
          />
          <br />
          <p className="text-lg leading-relaxed">
            Với những đóng góp tích cực vào sự phát triển kinh tế - xã hội,
            Tân Phát Etek vinh dự được Nhà nước và thành phố trao tặng nhiều giải
            thưởng danh giá. Những phần thưởng này không chỉ là sự ghi nhận xứng
            đáng cho những nỗ lực không ngừng nghỉ của chúng tôi mà còn là nguồn
            động viên to lớn, tiếp thêm sức mạnh để Tân Phát Etek không ngừng đổi
            mới và vươn xa hơn nữa. Những giải thưởng mà Tân Phát Etek đạt được là
            niềm tự hào của toàn thể cán bộ công nhân viên công ty. Chúng tôi cam
            kết sẽ luôn đồng hành cùng khách hàng, đối tác và cộng đồng, tạo ra
            những giá trị bền vững cho xã hội.
          </p>
        </div>

        <br />

        <div className="fade-in-section">
          <Image
            src="/images/gt.png"
            alt="Giá trị"
            width={800}
            height={500}
            className="mx-auto"
          />
          <br />
          <Image
            src="/images/kttp.png"
            alt="Kết thúc"
            width={800}
            height={500}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
