"use client";
import { useState } from "react";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [messages, setMessages] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setIsRegistered(true);
      setMessages([
        `Xin chào ${formData.name}! 👋`,
        "Cảm ơn bạn đã để lại thông tin, tôi có thể giúp gì cho bạn?"
      ]);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const input = (e.target as any).message.value.trim();
    if (!input) return;
    setMessages([...messages, `Bạn: ${input}`]);
    (e.target as any).reset();
    // TODO: Ở đây bạn có thể call API AI hoặc backend để trả lời
    setTimeout(() => {
      setMessages(prev => [...prev, "Bot 🤖: Đây là phản hồi mẫu từ hệ thống."]);
    }, 500);
  };

  return (
    <div>
      {/* Nút mở chatbox */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 bottom-4 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition z-50"
      >
        💬
      </div>

      {/* Popup chatbox */}
      {isOpen && (
        <div className="fixed right-4 bottom-20 w-80 bg-white shadow-2xl rounded-2xl overflow-hidden z-50">
          <div className="bg-blue-600 text-white p-3 font-semibold">
            Hỗ trợ trực tuyến
          </div>

          {!isRegistered ? (
            // Form nhập thông tin
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
            // Chat UI
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
        </div>
      )}
    </div>
  );
}
