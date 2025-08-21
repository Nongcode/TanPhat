"use client";

export default function AwardSection() {
  const awards = [
    {
      id: 1,
      img: "/images/hdcd1.webp",
      caption: "Tân Phát Etek tặng xe đạp tri ân người có công tại Hà Nội",
      link: "/tin-tuc/award1",
    },
    {
      id: 2,
      img: "/images/hdcd2.png",
      caption: "Nhận Kỷ niệm chương Công đoàn huyện Thanh Trì",
      link: "/tin-tuc/award2",
    },
    {
      id: 3,
      img: "/images/hdcd3.png",
      caption: "Đón nhận Cờ và Bằng khen của LĐLĐ huyện Thanh Trì",
      link: "/tin-tuc/award3",
    },
    {
      id: 4,
      img: "/images/hdcd4.png",
      caption:
        "Nhận Giấy khen Chủ tịch Công đoàn cơ sở xuất sắc tiêu biểu năm 2024 do LĐLĐ Huyện Thanh Trì trao tặng",
      link: "/tin-tuc/award4",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Bên trái: Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            HOẠT ĐỘNG CÔNG ĐOÀN
          </h2>
          <p className="text-gray-700 leading-relaxed">
          Với những đóng góp tích cực vào sự phát triển kinh tế - xã hội, Tân Phát Etek vinh dự được Nhà nước và thành phố trao tặng nhiều giải thưởng danh giá. 
          Những phần thưởng này không chỉ là sự ghi nhận xứng đáng cho những nỗ lực không ngừng nghỉ của chúng tôi mà còn là nguồn động viên to lớn, 
          tiếp thêm sức mạnh để Tân Phát Etek không ngừng đổi mới và vươn xa hơn nữa. Những giải thưởng mà Tân Phát Etek
           đạt được là niềm tự hào của toàn thể cán bộ công nhân viên công ty. Chúng tôi cam kết sẽ luôn đồng hành cùng khách hàng, đối tác và cộng đồng, 
           tạo ra những giá trị bền vững cho xã hội.
            Với tinh thần &quot;Đam mê - Đổi mới - Sáng tạo&quot;, Công đoàn Tân Phát Etek
            đã không ngừng nỗ lực trong việc phát huy vai trò, hoàn thành xuất
            sắc nhiệm vụ tại cơ sở. Ngoài ra, còn có những đóng góp tích cực vào
            phong trào thi đua cấp Huyện, cấp Thành phố và đã được ghi nhận qua
            loạt giải thưởng danh giá giúp Công ty nâng tầm giá trị thương hiệu.
            Tân Phát Etek luôn tâm niệm rằng, sự phát triển của doanh nghiệp gắn liền với sự thịnh vượng của cộng đồng. 
            Chính vì vậy, chúng tôi thường xuyên
            tham gia thực hiện các hoạt động thiện nguyện ý nghĩa nhằm chia sẻ khó khăn và mong muốn đóng góp một phần 
            nhỏ bé của mình để làm cho cuộc sống của mọi người trở nên tươi đẹp hơn.
          </p>
        </div>

        {/* Bên phải: Lưới ảnh */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {awards.map((award) => (
            <a
              key={award.id}
              href={award.link}
              className="block text-center group"
            >
              <img
                src={award.img}
                alt={award.caption}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <p className="mt-2 text-sm italic text-gray-600 group-hover:text-blue-600">
                {award.caption}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
