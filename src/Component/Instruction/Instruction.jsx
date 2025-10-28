import React, { useState } from "react";

const Instruction = () => {
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 1500);
  };

  const CommandLine = ({ text }) => (
    <div
      onClick={() => handleCopy(text)}
      className="font-mono text-sm bg-gray-100 p-2 rounded cursor-pointer hover:bg-gray-200 transition relative"
    >
      {text}
      {copiedText === text && (
        <span className="absolute right-3 text-green-600 text-xs">Copied!</span>
      )}
    </div>
  );

  return (
    <div className="text-center">
      <h2 className="text-5xl font-bold text-white py-12">
        React and Next Project Setup
      </h2>
      <h3 className="text-white">How to Run React (Vite) Project</h3>

      <div className="flex justify-center p-6 gap-6 flex-wrap">
        {/* Outer Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Setup Steps</h2>
          <div className="space-y-3">
            <CommandLine text="npm create vite@latest my-project" />
            <CommandLine text="npm install tailwindcss @tailwindcss/vite" />
            <CommandLine text="npm install react-router-dom" />

            {/* Inner Card 1 */}
            <div className="bg-gray-50 rounded-xl shadow-inner p-4 mt-4 text-left">
              <h1 className="font-mono text-sm bg-gray-200 p-2 rounded mb-2">
                vite.config.ts
              </h1>
              <CommandLine text="import tailwindcss from '@tailwindcss/vite'" />
              <CommandLine text="plugins: [ tailwindcss(), ]," />
            </div>

            {/* Inner Card 2 */}
            <div className="bg-gray-50 rounded-xl shadow-inner p-4 mt-4 text-left">
              <h1 className="font-mono text-sm bg-gray-200 p-2 rounded mb-2">
                index.css
              </h1>
              <CommandLine text='@import "tailwindcss";' />
            </div>
          </div>
        </div>

        {/* Package Install */}
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Package Install</h2>
          <div className="space-y-3">
            <CommandLine text="npm i sweetalert2" />
            <CommandLine text="npm install react-icons --save" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
