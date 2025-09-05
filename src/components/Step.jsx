import React, { useState } from "react";

const Step = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="flex items-center justify-center p-4 sm:p-6 bg-gray-50">
      <div className="w-full max-w-6xl">
        {/* Steps Navigation */}
        <div className="flex flex-col items-center justify-between gap-3 mb-6 sm:flex-row">
          {/* Step Indicators */}
          {["Step 1", "Step 2", "Step 3"].map((label, index) => {
            const current = index + 1;
            return (
              <div
                key={index}
                className="flex items-center justify-center flex-1"
              >
                <button
                  onClick={() => setStep(current)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 w-full sm:w-auto ${
                    step === current
                      ? "bg-blue-600 text-white shadow-md"
                      : "border border-gray-400 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {label}
                </button>
              </div>
            );
          })}
        </div>

        {/* Step Content */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Upload Section */}
          <div className="p-6 bg-white border rounded-lg shadow-sm">
            <h2 className="mb-3 text-lg font-semibold sm:text-xl">Upload</h2>
            <p className="mb-6 text-sm text-gray-600">
              Import raw data from spreadsheets, CRMs, or APIs. Or start fresh
              by asking chat for the data you need.
            </p>
            <div className="flex flex-col items-center justify-center p-6 transition border border-gray-400 border-dashed rounded-md bg-gray-50 hover:bg-gray-100">
              <div className="flex items-center justify-center bg-blue-600 rounded-full w-14 h-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 9.293a1 1 0 00-1.414 0L11 13.586V3a1 1 0 10-2 0v10.586L4.707 9.293a1 1 0 00-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="mt-2 font-medium text-gray-700">Uploaded</p>
            </div>
          </div>

          {/* Enrich Section */}
          <div className="p-6 bg-white border rounded-lg shadow-sm">
            <h2 className="mb-3 text-lg font-semibold sm:text-xl">Enrich</h2>
            <p className="mb-6 text-sm text-gray-600">
              Enhance your data with relevant info by adding columns and prompts.
              Paradigm pulls from trusted sources quickly.
            </p>
            <div className="overflow-x-auto border rounded-md">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 text-left">Emails</th>
                    <th className="p-2 text-left">Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-2">ryan@nexora.com</td>
                    <td className="p-2">
                      <span className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded">
                        Software
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2">michelle.lee@gmail.com</td>
                    <td className="p-2">
                      <span className="px-2 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded">
                        Marketing
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2">sarah@replit.com</td>
                    <td className="p-2">
                      <span className="px-2 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded">
                        Design
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2">elad@guild.xyz</td>
                    <td className="p-2">
                      <span className="px-2 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded">
                        AI
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2">josh@linear.app</td>
                    <td className="p-2">
                      <span className="px-2 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded">
                        Software
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Take Action Section */}
          <div className="p-6 bg-white border rounded-lg shadow-sm">
            <h2 className="mb-3 text-lg font-semibold sm:text-xl">
              Take Action
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              Collaborate or edit the generated data and then take action.
              Paradigm suggests actions based on the enriched data.
            </p>
            <div className="overflow-x-auto border rounded-md">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 text-left">Emails</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "ryan@nexora.com",
                    "sarah@replit.com",
                    "elad@guild.xyz",
                    "josh@linear.app",
                  ].map((email) => (
                    <tr key={email} className="border-t">
                      <td className="p-2">{email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/*  Video Section */}
        <div className="flex justify-center w-full px-4 sm:px-8 lg:px-12 sm:mt-16 lg:mt-10">
          <video
            className="object-cover  max-w-full max-h-[400px] sm:max-h-[500px] lg:max-h-[600px]"
            src="/src/assets/Video 2.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="grid grid-cols-2 gap-4 p-6">
  {/* Left Column */}
  <div className="flex flex-col justify-center">
    <h1 className="text-2xl font-bold">Organize with Custom Columns</h1>
    <p className="text-gray-600">Define custom columns using AI and fetch specific data on demand. Detail the data type and format, prompt for information, and sort to your needs.</p>
  </div>
  {/* Right Column */}
  <div className="flex flex-col justify-center">
    <h1 className="text-2xl font-bold">Ask Chatbot for Data</h1>
    <p className="text-gray-600">Use our contextually aware engine to query your spreadsheet like a conversation.</p>
  </div>
</div>

      </div>
    </div>
  );
};

export default Step;