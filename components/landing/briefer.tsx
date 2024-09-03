import React from "react";
import { ThumbsUp, ThumbsDown, Tag, Package, RotateCcw } from "lucide-react";

const VideoFrame: React.FC = () => (
  <div className="w-full h-0 pb-[67.5%] relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
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
    <div>
      <h2 className="text-3xl font-bold mb-6 text-black">
        Voice Agent&apos;s Response
      </h2>
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-600 mb-2 flex items-center">
            <Package className="w-4 h-4 mr-2" /> DATA FETCHED
          </h4>
          <div className="flex justify-between items-center">
            <span className="text-black font-medium">Order Status</span>
            <div className="space-x-2">
              <button className="text-green-500 hover:text-green-600">
                <ThumbsUp className="w-5 h-5" />
              </button>
              <button className="text-red-500 hover:text-red-600">
                <ThumbsDown className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-black font-medium">Tracking Link</span>
            <div className="space-x-2">
              <button className="text-green-500 hover:text-green-600">
                <ThumbsUp className="w-5 h-5" />
              </button>
              <button className="text-red-500 hover:text-red-600">
                <ThumbsDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-600 mb-2 flex items-center">
            <RotateCcw className="w-4 h-4 mr-2" /> INSTRUCTION
          </h4>
          <div className="flex justify-between items-center">
            <span className="text-black font-medium">WISMO Action</span>
            <div className="space-x-2">
              <button className="text-green-500 hover:text-green-600">
                <ThumbsUp className="w-5 h-5" />
              </button>
              <button className="text-red-500 hover:text-red-600">
                <ThumbsDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-600 mb-2 flex items-center">
            <Tag className="w-4 h-4 mr-2" /> TICKET ACTIONS
          </h4>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
              WISMO
            </span>
            <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              Resolved
            </span>
          </div>
        </div>
      </div>
    </div>
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
