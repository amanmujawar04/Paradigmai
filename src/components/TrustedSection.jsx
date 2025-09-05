import React from "react";

const logos = [
  {
    src: "https://paradigm.cdn.prismic.io/paradigm/aJEeMaTt2nPbZ1Ne_CitcoLogo-compressed-.svg?fit=max&w=640",
    alt: "Citco Logo",
    width: 208,
    height: 100,
  },
  {
    src: "https://paradigm.cdn.prismic.io/paradigm/aJEeOKTt2nPbZ1Nf_CognitionLogo-compressed-.svg?fit=max&w=640",
    alt: "Cognition Logo",
    width: 251,
    height: 100,
  },
  {
    src: "https://paradigm.cdn.prismic.io/paradigm/aJEeP6Tt2nPbZ1Nh_EtchedLogo-compressed-.svg?fit=max&w=640",
    alt: "Etched Logo",
    width: 215,
    height: 100,
  },
  {
    src: "https://paradigm.cdn.prismic.io/paradigm/aJEeRaTt2nPbZ1Nj_DelveLogo-compressed-.svg?fit=max&w=384",
    alt: "Delve Logo",
    width: 160,
    height: 100,
  },
  {
    src: "https://paradigm.cdn.prismic.io/paradigm/aJEeS6Tt2nPbZ1Nl_CoframeLogo-compressed-.svg?fit=max&w=640",
    alt: "Coframe Logo",
    width: 201,
    height: 100,
  },
  {
    src: "https://paradigm.cdn.prismic.io/paradigm/aJEeXaTt2nPbZ1Np_GreptileLogo-compressed-.svg?fit=max&w=640",
    alt: "Greptile Logo",
    width: 203,
    height: 100,
  },
];

export default function TrustedSection() {
  return (
    <>
      {/* Trusted By Section */}
      <section className="py-12 bg-white">
        <p className="mb-8 text-base font-semibold text-center text-gray-500 sm:text-lg">
          Trusted by industry leaders at
        </p>

        {/* Logos Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-8 sm:space-x-12 animate-marquee">
            {[...logos, ...logos].map(({ src, alt, width, height }, index) => (
              <img
                key={index}
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading="lazy"
                decoding="async"
                className="flex-shrink-0 object-contain h-10 sm:h-12 md:h-16"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Section */}
      <section className="max-w-5xl px-4 py-12 mx-auto text-center bg-white sm:px-6 lg:px-8 sm:py-20">
        <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-6xl">
          A workspace to <br className="hidden sm:block" />
          transform your data
        </h2>
        <p className="max-w-2xl mx-auto text-base text-gray-600 sm:text-lg">
          Upload data from any source and watch it instantly integrate into your
          workspace.
        </p>
      </section>

      {/* Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </>
  );
}