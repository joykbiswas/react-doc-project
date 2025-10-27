import React from "react";
import RouterCodeCard from "../RouterCodeCard/RouterCodeCard";

const Setup = () => {
  return (
    <div className=" text-center py-12">
      <h3 className="text-5xl font-bold text-white">SetUp Code.. </h3>

      <div className="flex justify-center p-6 gap-6">
        <div className="w-full max-w-md bg-gray-50 rounded-xl shadow-inner p-4 mt-4">
          <h1 className="font-mono text-sm bg-gray-200 p-2 rounded-t">
            main.jsx
          </h1>
          <pre className="text-left font-mono text-sm bg-gray-100 p-3 rounded-b overflow-x-auto text-gray-800">
            <code>
              {`import { RouterProvider } from "react-router-dom";
import router from "./Router/router";`}
            </code>
          </pre>
          <pre className="text-left font-mono text-sm bg-gray-100 p-3 rounded-b overflow-x-auto text-gray-800">
            <code>
              {`<StrictMode>
  <RouterProvider router={router} />
</StrictMode>`}
            </code>
          </pre>
        </div>

        <div className="w-full max-w-md bg-gray-50 rounded-xl shadow-inner p-4 mt-4">
          <h1 className="font-mono text-sm bg-gray-200 p-2 rounded-t">
            Root.jsx
          </h1>
           <pre className="text-left font-mono text-sm bg-gray-100 p-3 rounded-b overflow-x-auto text-gray-800">
          <code>
{`
import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Root;
`}
          </code>
        </pre>
        </div>
        <>
             <RouterCodeCard />
        </>
      </div>
    </div>
  );
};

export default Setup;
