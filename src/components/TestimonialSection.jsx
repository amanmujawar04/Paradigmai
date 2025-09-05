import React from "react";

const testimonials = [
  {
    quote:
      "Paradigm's a super interesting way of marrying old ways (sheets) with new ways (AI) to get a magical tool.",
    author: "Jacob Wallenberg",
    title: "VP of People & Talent at Ramp",
    companyLogo:
      "https://paradigm.cdn.prismic.io/paradigm/aHv4DkMqNJQqIH24_RampLogo.svg?fit=max&w=256",
    sideImage:
      "https://images.prismic.io/paradigm/aJE6rKTt2nPbZ1U7_MOSTRECENTQuoteImageLeft.jpg?auto=format%2Ccompress&fit=max&w=3840",
  },
  {
    quote:
      "We've been using Paradigm to help automate a lot of the research-heavy work consultants spend hours on. It’s one of the few AI tools that felt built for how consultants really work.",
    author: "Charlie Cheesman",
    title: "Consultant at EY-Parthenon",
    sideImage:
      "https://images.prismic.io/paradigm/aJE6rKTt2nPbZ1U7_MOSTRECENTQuoteImageLeft.jpg?auto=format%2Ccompress&fit=max&w=3840",
  },
];

const TestimonialSection = () => (
  <section className="py-12 bg-gray-50">
    <div className="max-w-6xl px-4 mx-auto space-y-16 sm:px-6 lg:px-8">
      {testimonials.map((testimonial, idx) => (
        <div
          key={idx}
          className={`
            flex flex-col md:flex-row md:items-stretch md:space-x-8 min-h-[400px]
            ${idx % 2 === 1 ? "md:flex-row-reverse md:space-x-reverse" : ""}
          `}
        >
          {/* SIDE IMAGE */}
          <div className="flex-shrink-0 w-full mb-6 md:mb-0 md:w-1/2">
            <img
              src={testimonial.sideImage}
              alt={testimonial.author}
              className="object-cover w-full h-64 rounded-lg shadow-md md:h-full"
              style={{ minHeight: "400px" }}
            />
          </div>

          {/* CONTENT SECTION */}
          <div className="relative flex flex-col justify-center w-full p-6 bg-white rounded-lg shadow-md md:w-1/2">
            <h4 className="mb-6 text-xl font-semibold leading-snug text-gray-800 sm:text-2xl md:text-3xl">
              {`“${testimonial.quote}”`}
            </h4>
            <div className="flex items-center mt-6 space-x-4">
              {testimonial.companyLogo && (
                <img
                  src={testimonial.companyLogo}
                  alt="Company logo"
                  className="w-auto h-8 sm:h-10"
                />
              )}
              <div>
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialSection;