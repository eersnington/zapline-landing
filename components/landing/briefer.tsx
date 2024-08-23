import React from "react";

const VideoFrame: React.FC = () => (
  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
    <div className="text-6xl">▶️</div>
  </div>
);

const TextColumn: React.FC = () => (
  <div className="w-full h-full bg-purple-100 rounded-lg p-6 flex flex-col justify-between">
    <h2 className="text-2xl font-bold mb-4">AI-Powered Support</h2>
    <ul className="space-y-4">
      <li className="flex items-center">
        <span className="text-xl mr-2">⚡</span>
        <p className="text-sm">Send personalized responses in &lt;1min</p>
      </li>
      <li className="flex items-center">
        <span className="text-xl mr-2">🎙️</span>
        <p className="text-sm">Replicate your brand voice and processes</p>
      </li>
      <li className="flex items-center">
        <span className="text-xl mr-2">📈</span>
        <p className="text-sm">Review and coach AI to improve accuracy</p>
      </li>
      <li className="flex items-center">
        <span className="text-xl mr-2">✅</span>
        <p className="text-sm">Use pre-built Actions for full resolutions</p>
      </li>
    </ul>
  </div>
);

export const Briefer: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-16 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 h-[32rem]">
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