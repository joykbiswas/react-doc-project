import React from "react";

const Instruction = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white py-12">
          React and Next Project Setup
        </h2>
        <h3 className="text-white">How to Run React (Vite) Project</h3>
        <div className="flex justify-center p-6 gap-6">
          {/* Outer Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Setup Steps</h2>
            <div className="space-y-3">
              <h3 className="font-mono text-sm bg-gray-100 p-2 rounded">
                npm create vite@latest my-project
              </h3>
              <h3 className="font-mono text-sm bg-gray-100 p-2 rounded">
                npm install tailwindcss @tailwindcss/vite
              </h3>
              <h3 className="font-mono text-sm bg-gray-100 p-2 rounded">
                npm install react-router-dom
              </h3>

              {/* Inner Card */}
              <div className="bg-gray-50 rounded-xl shadow-inner p-4 mt-4">
                <h1 className="font-mono text-sm bg-gray-200 p-2">
                  vite.config.ts
                </h1>
                <h3 className="font-mono text-sm">
                  import tailwindcss from '@tailwindcss/vite'
                </h3>
                <h3 className="font-mono text-sm pt-3">
                  plugins: [ tailwindcss(), ],
                </h3>
              </div>
              <div className="bg-gray-50 rounded-xl shadow-inner p-4 mt-4">
                <h1 className="font-mono text-sm bg-gray-200 p-2">index.css</h1>
                <h3 className="font-mono text-sm bg-gray-100 p-2 rounded">
                  @import "tailwindcss";
                </h3>
              </div>
            </div>
          </div>

          {/* Package Install */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">Package Install</h2>
              <div className="space-y-3">
                <h3 className="font-mono text-sm bg-gray-100 p-2 rounded">
                  npm install tailwindcss @tailwindcss/vite
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
