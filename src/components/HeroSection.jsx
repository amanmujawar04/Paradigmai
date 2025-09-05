import React from "react";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-start justify-start px-6 py-10 bg-black text-start">
      {/* Title */}
      <h1 className="pl-20 mb-4 text-4xl text-white md:text-5xl font-manrope">
        The Spreadsheet to automate<br />
        manual data collection
      </h1>

      {/* Subtitle */}
      <h2 className="max-w-2xl pl-20 mb-8 text-lg text-gray-200">
        A workspace to gather, structure, and take action<br />on data with human-level precision.
      </h2>

      {/* Buttons */}
      <div className="flex flex-col gap-4 pl-20 sm:flex-row">
        <button className="px-6 py-3 font-medium text-black transition bg-white rounded-md">
          Try it now
        </button>
        <button className="flex items-center justify-center gap-2 px-6 py-3 font-medium text-white transition bg-black border border-white hover:bg-gray-700">
          Request a Demo →
        </button>
      </div>

      {/* Video */}
      <div className="flex justify-start w-full pl-10 mt-20">
    <video
  className="object-cover w-full h-auto"
       src="/src/assets/video.mp4"
       autoPlay
       muted
       loop
       playsInline
    />
      </div>
    </section>
  );
}