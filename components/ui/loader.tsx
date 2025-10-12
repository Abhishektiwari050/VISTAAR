import React from "react";

export function LoaderOne() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-blue-500 animate-spin"></div>
        <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-transparent border-t-purple-500 animate-spin animation-delay-150"></div>
        <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-transparent border-t-pink-500 animate-spin animation-delay-300"></div>
      </div>
    </div>
  );
}