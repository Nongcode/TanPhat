"use client";

export default function BannerVideo() {
  return (
    <div className="w-full">
      {/* Video background */}
      <div className="relative w-full h-[850px] overflow-hidden">
        <video
          src="/images/etek-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Khối riêng phía dưới video */}      
    </div>
  );
}
