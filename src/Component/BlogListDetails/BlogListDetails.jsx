export default function BlogListDetails() {
  return (
    <div className="flex justify-center p-6 pb-14">
      <div className="h-[500px] w-full max-w-md bg-gray-50 rounded-xl shadow-inner p-4 mt-4">
        <h1 className="font-mono text-sm bg-gray-200 p-2 rounded-t">
          BlogListDetails.jsx
        </h1>

        {/* Scrollable code area */}
        <pre className="text-left font-mono text-sm bg-gray-100 p-3 rounded-b overflow-x-auto overflow-y-auto h-full text-gray-800">
          <code>
{`
 import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

const BlogListDetails = () => {
  const blogs = useLoaderData();
  const { id, title, body } = blogs;
  const navigate = useNavigate();

  return (
    <div className="text-center mt-5 flex flex-col items-center">
      <Link
        to="#"
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
      >
        <IoArrowBackSharp className="text-3xl" />
        <h2 className="text-lg font-medium">Back to Home</h2>
      </Link>

      <div className="flex flex-col gap-3 border border-indigo-200 p-6 mt-8 mb-10 w-full max-w-2xl mx-auto rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        <h3 className="text-gray-500 text-sm font-medium">Blog No: {id}</h3>
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
        <h3 className="text-lg text-gray-700 leading-relaxed">{body}</h3>
        
<Link to={\`updateBlog/\${id}\`}>
            <button className="btn">Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogListDetails;
`}
          </code>
        </pre>
      </div>
    </div>
  );
}
