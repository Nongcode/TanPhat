import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";

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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <Header />
          <HeroSlider />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
