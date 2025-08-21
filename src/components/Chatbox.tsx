"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [messages, setMessages] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setIsRegistered(true);
      setMessages([
        `Xin chào ${formData.name}! 👋`,
        "Cảm ơn bạn đã để lại thông tin, tôi có thể giúp gì cho bạn?",
      ]);
    }
  };

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.message as HTMLInputElement;

    if (input.value.trim() === "") return;

    setMessages([...messages, `Bạn: ${input.value}`]);
    input.value = "";

    setTimeout(() => {
      setMessages((prev) => [...prev, "Bot 🤖: Đây là phản hồi mẫu từ hệ thống."]);
    }, 500);
  };

  return (
    <div>
      {/* Nút mở chatbox */}
      <div className="fixed right-4 bottom-4 flex flex-col items-center z-50">
      {/* Bubble nhắc nhở */}
      <div className="mb-2 bg-white shadow-md text-sm px-3 py-1 rounded-full border border-gray-200 animate-bounce">
        💡 Chat trực tiếp với chúng tôi
      </div>

      {/* Icon chat */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition"
      >
        💬
      </div>
    </div>

      {/* Popup chatbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed right-4 bottom-20 w-80 bg-white shadow-2xl rounded-2xl overflow-hidden z-50"
          >
            <div className="bg-blue-600 text-white p-3 font-semibold">
              Hỗ trợ trực tuyến
            </div>

            {!isRegistered ? (
              <form onSubmit={handleSubmit} className="p-4 space-y-3">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full border rounded-lg p-2"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  className="w-full border rounded-lg p-2"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Bắt đầu chat
                </button>
              </form>
            ) : (
              <div className="flex flex-col h-96">
                <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`p-2 rounded-lg ${
                        msg.startsWith("Bạn")
                          ? "bg-blue-100 text-right"
                          : "bg-gray-100 text-left"
                      }`}
                    >
                      {msg}
                    </div>
                  ))}
                </div>
                <form
                  onSubmit={handleSendMessage}
                  className="flex border-t p-2 gap-2"
                >
                  <input
                    type="text"
                    name="message"
                    placeholder="Nhập tin nhắn..."
                    className="flex-1 border rounded-lg p-2"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-3 rounded-lg hover:bg-blue-700 transition"
                  >
                    Gửi
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
