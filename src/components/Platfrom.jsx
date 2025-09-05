import React, { useState } from "react";

const Platform = () => {
  const buttonLabels = [
    "Recruiting",
    "Consulting",
    "Sales",
    "Marketing",
    "Finance",
  ];

  const [activeIndex, setActiveIndex] = useState(4);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Heading */}
      <h1 className="max-w-4xl mb-6 font-serif text-4xl font-normal leading-tight text-center text-black sm:text-5xl md:text-6xl lg:text-7xl">
        One platform,<br />
        Endless solutions
      </h1>

      {/* Subheading */}
      <p className="max-w-md mb-10 text-sm text-center text-gray-600 sm:text-base md:text-lg">
        Upload data from any of your sources and watch <br />
        it instantly integrate into your workspace.
      </p>

      {/* Buttons */}
      <div className="flex w-full max-w-4xl gap-2 text-base font-normal sm:text-lg">
        {buttonLabels.map((label, index) => (
          <button
            key={label}
            onClick={() => setActiveIndex(index)}
            className={`flex-1 py-3 text-center border rounded-md transition-colors duration-200 ${
              activeIndex === index
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Platform;