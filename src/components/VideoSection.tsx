"use client";
import { useState } from "react";

export default function VideoSection() {
  const videos = [
    {
        id: 1,
        title: "Máy ra vào lốp ô tô tự động",
        url: "https://www.youtube.com/embed/ZJmKA80Y1Aw",
        thumbnail: "/images/video5.webp",
    },
    {
        id: 2,
        title: "Máy nạp gas điều hòa ô tô tự động",
        url: "https://www.youtube.com/embed/VqtfXUMWKMw",
        thumbnail: "/images/video6.webp",
    },

    {
      id: 3,
      title: "Máy hút bụi khô - ướt IPC Yesplay 515",
      url: "https://www.youtube.com/embed/5HvFvzKWL8c",
      thumbnail: "/images/video3.webp",
    },
    {
      id: 4,
      title: "Hướng dẫn sử dụng máy nén khí FIAC Newsilver 20",
      url: "https://www.youtube.com/embed/2Sjp0bA2OdQ",
      thumbnail: "/images/video4.webp",
    },
    
    {
        id: 5,
        title: "Tân Phát Etek giao lô hàng đầu tiên cho Vinfast Hà Tĩnh",
        url: "https://www.youtube.com/embed/aUvcoRJ-xnE",
        thumbnail: "/images/video1.webp",
      },
      {
        id: 6,
        title: "GIỚI THIỆU TÂN PHÁT ETEK - Kỷ niệm 20 năm thành lập",
        url: "https://www.youtube.com/embed/ORv9zupc-qQ",
        thumbnail: "/images/video2.webp",
      },
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <section className="py-16 bg-gray-50 fade-in-section opacity-0 transition-opacity duration-1000">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Video
          <span className="block w-16 h-1 bg-red-500 mx-auto mt-2"></span>
        </h2> <br />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video chính */}
          <div className="lg:col-span-2">
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src={currentVideo.url}
                title={currentVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Danh sách video có scroll */}
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => setCurrentVideo(video)}
                className={`flex items-center gap-3 p-2 cursor-pointer rounded-lg transition ${
                  currentVideo.id === video.id
                    ? "bg-gray-200"
                    : "hover:bg-gray-100"
                }`}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-24 h-16 object-cover rounded-md"
                />
                <p className="text-sm font-medium">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
