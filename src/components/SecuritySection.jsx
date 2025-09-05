import React from "react";

// Security features data with grouping
const column2Features = [
  {
    title: "SOC2 I",
    icon: (
      <svg viewBox="0 0 32 36" className="w-8 text-white h-9" fill="none">
        <path
          d="M11.4 16.4L14 19l6.1-6.1M1.4 1.6h28.7v24.3l-14.3 7.8L1.4 25.9V1.6z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="square"
        />
      </svg>
    ),
  },
  {
    title: "No training on user data",
    icon: (
      <svg
        viewBox="0 0 29 36"
        className="w-8 text-white h-9"
        fill="currentColor"
      >
        <path d="M17.95 18.57L19.82 20.44l-8.24 8.24-1.87-1.87 8.24-8.24z" />
        <path d="M11.58 18.57l-1.87 1.87 8.24 8.24 1.87-1.87-8.24-8.24z" />
        <path d="M16.62.35l11.7 11.7V35.2H.83V.35H16.62zM3.47 32.54h22.59V14.3H14.75V2.99H3.47v29.55zM17.4 11.66h6.8l-6.8-6.8v6.8z" />
      </svg>
    ),
  },
];

const column3Features = [
  {
    title: "SOC2 II",
    icon: (
      <svg viewBox="0 0 32 36" className="w-8 text-white h-9" fill="none">
        <path
          d="M11.4 16.4L14 19l6.1-6.1M1.4 1.6h28.7v24.3l-14.3 7.8L1.4 25.9V1.6z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="square"
        />
      </svg>
    ),
  },
  {
    title: "Audited and tested",
    icon: (
      <svg viewBox="0 0 30 36" className="w-8 text-white h-9" fill="none">
        <path
          d="M3.06 15.6V1.72H16.94L28.21 13v20.82H17.8M16.94 2.6V13h10.42M1.32 26.01h11.28v7.81H1.32v-7.81zm9.54 0v-1.3a3.9 3.9 0 00-7.76 0v1.3h7.76z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="square"
        />
      </svg>
    ),
  },
];

const SecuritySection = () => {
  return (
    <section className="py-12 bg-black sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Responsive Grid: 1 col on mobile, 3 cols on large screens */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          
          {/* LEFT SIDE CONTENT */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Enterprise-grade security
            </h2>
            <p className="max-w-xl mt-4 text-base text-gray-400 sm:text-lg md:text-xl">
              We push the frontier without compromising trust, prioritizing
              compliance with the highest industry standards. Transparency and
              protection are at the heart of everything we do.
            </p>
          </div>

          {/* COLUMN 2 - SOC2 I + No training */}
          <div className="space-y-6">
            {column2Features.map((feature, index) => (
              <div
                key={index}
                className="p-6 transition bg-gray-900 shadow rounded-xl hover:shadow-lg"
              >
                <div className="flex items-center">
                  <div className="flex items-center justify-center mr-4 bg-gray-800 rounded-full w-14 h-14">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* COLUMN 3 - SOC2 II + Audited */}
          <div className="space-y-6">
            {column3Features.map((feature, index) => (
              <div
                key={index}
                className="p-6 transition bg-gray-900 shadow rounded-xl hover:shadow-lg"
              >
                <div className="flex items-center">
                  <div className="flex items-center justify-center mr-4 bg-gray-800 rounded-full w-14 h-14">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SecuritySection;