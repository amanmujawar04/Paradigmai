import React from "react";

const Footer = () => {
  return (
    <footer className="text-white bg-black border-t border-gray-800">
      <div className="px-4 py-8 mx-auto md:px-6 md:py-12 max-w-7xl">
        <h1 className="text-xl font-bold text-start">❒ ParadigmAI</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 px-4 py-8 mx-auto md:grid-cols-2 md:px-6 max-w-7xl">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <h1 className="font-serif text-3xl md:text-5xl">
            Enter a new age of<br /> knowledge work
          </h1>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center space-y-4">
          <p className="text-gray-400">
            Paradigm is an AI-first workspace that enables fast,
            <br />
            accurate research in spreadsheets.
          </p>
          <button className="flex items-center justify-center gap-2 px-6 py-3 font-medium text-black transition bg-white border border-white rounded-md hover:bg-black hover:text-white max-w-max">
            Request a Demo →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 px-4 pb-6 mx-auto text-sm max-w-7xl md:grid-cols-5 md:px-6">
        <div>
          <h3 className="mb-2 font-semibold">Home</h3>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Resources</h3>
          <ul className="space-y-1 text-gray-400">
            <li>Templates</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Socials</h3>
          <ul className="space-y-1 text-gray-400">
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Careers</h3>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Legal</h3>
          <ul className="space-y-1 text-gray-400">
            <li>Privacy Policy</li>
            <li>Acceptable Use</li>
            <li>Fulfillment</li>
          </ul>
        </div>
      </div>

      <div className="pb-6 pl-6 mx-auto mt-10 text-xs text-gray-400 text-start max-w-7xl">
        © Copyright 2025. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;