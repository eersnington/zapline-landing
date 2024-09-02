import React from "react";

const VideoFrame: React.FC = () => (
  <div className="w-full h-0 pb-[62.5%] relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="/zap2.0-demo-vod-final.mp4"
      muted
      autoPlay
      loop
      controls
    />
  </div>
);

const TextColumn: React.FC = () => (
  <div className="w-full h-full bg-white rounded-2xl p-8 flex flex-col justify-between shadow-lg border border-gray-200">
    <h2 className="text-3xl font-bold mb-6 text-black">AI-Powered Support</h2>
  </div>
);

export const Briefer: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-24 px-4">
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-8">
        <div className="w-full md:w-2/3">
          <VideoFrame />
        </div>
        <div className="w-full md:w-1/3">
          <TextColumn />
        </div>
      </div>
    </div>
  );
};

export default Briefer;
