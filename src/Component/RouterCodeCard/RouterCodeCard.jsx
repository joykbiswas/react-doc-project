export default function RouterCodeCard() {
  return (
    <div className="flex justify-center p-6 pb-14">
      <div className="h-96 w-full max-w-md bg-gray-50 rounded-xl shadow-inner p-4 mt-4">
        <h1 className="font-mono text-sm bg-gray-200 p-2 rounded-t">
          router.jsx
        </h1>

        {/* Scrollable code area */}
        <pre className="text-left font-mono text-sm bg-gray-100 p-3 rounded-b overflow-x-auto overflow-y-auto h-full text-gray-800">
          <code>
{`import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
       {
        path: "/create-blog",
        element: <CreateBlog></CreateBlog>,
      },
      {
        path: "/details/:id",
        element: <BlogListDetails></BlogListDetails>,
        loader: ({ params }) =>
          fetch(\`https://jsonplaceholder.typicode.com/posts/\${params.id}\`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "products/create",
        element: <AddItem />,
      },
      {
        path: "products/edit/:id",
        element: <EditItem />,
        loader: ({ params }) =>
          fetch(\`https://cupcake-backend.vercel.app/cake/\${params.id}\`),
      },
    ],
  },
]);

export default router;`}
          </code>
        </pre>
      </div>
    </div>
  );
}
