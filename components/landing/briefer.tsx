import React from "react";

const VideoFrame: React.FC = () => (
  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-200">
    <div className="text-8xl text-[#E1FF41]">▶️</div>
  </div>
);

const TextColumn: React.FC = () => (
  <div className="w-full h-full bg-white rounded-2xl p-8 flex flex-col justify-between shadow-lg border border-gray-200">
    <h2 className="text-3xl font-bold mb-6 text-black">AI-Powered Support</h2>
    <ul className="space-y-6">
      {[1, 2, 3, 4].map((item) => (
        <li key={item} className="flex items-center">
          <span className="text-2xl mr-4 text-[#E1FF41] bg-black rounded-full p-2">
            {item}
          </span>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </li>
      ))}
    </ul>
  </div>
);

export const Briefer: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-24 px-4">
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 h-[36rem]">
        <div className="w-full md:w-2/3 h-full">
          <VideoFrame />
        </div>
        <div className="w-full md:w-1/3 h-full">
          <TextColumn />
        </div>
      </div>
    </div>
  );
};

export default Briefer;
