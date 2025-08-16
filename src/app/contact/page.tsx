"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone:"",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã liên hệ! 🚀");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-50 flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-indigo-700">Liên hệ với chúng tôi <br /> Tập đoàn Tân Phát ETEK <br /></h2>
          <p className="text-gray-600">
            Chúng tôi luôn sẵn sàng hợp tác và lắng nghe những ý kiến, dự án hay câu hỏi của bạn. Đó là vinh dự của chúng tôi. <br />
            Hãy liên hệ với chúng tôi ! 📩
          </p> <br />
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600">
                📍
              </span>
              <p className="text-gray-700">189 Phan Trọng Tuệ, Thanh Liệt, Hà Nội, Việt Nam</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600">
                📞
              </span>
              <p className="text-gray-700">+84 123 456 789</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600">
                ✉️
              </span>
              <p className="text-gray-700">tanphat@gmail.com</p>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">Họ và tên</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Nhập tên của bạn"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Số điện thoại</label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Nhập số điện thoại của bạn"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Nhập email của bạn"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Tin nhắn</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Nội dung tin nhắn..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium shadow-lg hover:bg-indigo-700 transition"
          >
            Gửi liên hệ
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
