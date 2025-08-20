import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import ChatBox from "@/components/Chatbox";

export const metadata: Metadata = {
  title: "MyWebsite - Giải pháp công nghệ hiện đại",
  description: "Chúng tôi cung cấp các giải pháp công nghệ hiện đại và dịch vụ chất lượng cao để đáp ứng mọi nhu cầu của bạn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative">
          <Header />
          <HeroSlider />
          <main>{children}</main>
          <Footer />
          <ChatBox/>

          {/* Icon nổi bên phải màn hình */}
          <div className="fixed left-4 bottom-4 flex flex-col gap-3 z-50">
            <a
              href="tel:0961693381"
              className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition"
            >
              <img src="/images/phone.png" alt="Gọi điện" className="w-7 h-7" />
            </a>
            <a
              href="https://zalo.me/0961693381"
              target="_blank"
              className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center shadow-lg hover:scale-110 transition"
            >
              <img src="/images/zalo.png" alt="Zalo" className="w-7 h-7" />
            </a>
            <a
              href="https://m.me/yourpageid"
              target="_blank"
              className="w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center shadow-lg hover:scale-110 transition"
            >
              <img src="/images/fb-messenger.png" alt="Messenger" className="w-7 h-7" />
            </a>
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg hover:scale-110 transition"
            >
              <img src="/images/facebook.png" alt="Facebook" className="w-7 h-7" />
            </a>
            <a
              href="https://www.youtube.com/channel/yourchannel"
              target="_blank"
              className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg hover:scale-110 transition"
            >
              <img src="/images/youtube.png" alt="YouTube" className="w-7 h-7" />
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
