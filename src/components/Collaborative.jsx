import React from "react";

const Collaborative = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-10 text-center bg-gray-100 sm:px-8 md:px-16 lg:px-24">
      {/* Title */}
      <h1 className="mb-4 font-serif text-3xl text-black sm:text-4xl md:text-7xl">
        Collaborative <br />and connected
      </h1>

      {/* Subtitle */}
      <h2 className="max-w-2xl mb-8 text-base text-gray-700 sm:text-lg">
        Bring together scattered datasets into one <br />collaborative space.
      </h2>
           {/*  Video Section */}
        <div className="flex justify-center w-full px-4 sm:px-8 lg:px-12 sm:mt-16 lg:mt-10">
          <video
            className="object-cover  max-w-full max-h-[400px] sm:max-h-[500px] lg:max-h-[600px]"
            src="/src/assets/Video 3.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
            {/*  Video Section */}
        <div className="flex justify-center w-full px-4 sm:px-8 lg:px-12 sm:mt-16 lg:mt-10">
          <video
            className="object-cover  max-w-full max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] mt-5"
            src="/src/assets/Video 4.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="flex justify-center w-full px-4 sm:px-8 lg:px-12 sm:mt-16 lg:mt-10">
          <video
            className="object-cover  max-w-full max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] mt-5"
            src="/src/assets/Video 5.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
    </section>
  );
};

export default Collaborative;