export default function CardDetails() {
  return (
    <div className="flex justify-center p-6 pb-14">
      <div className="h-[500px] w-full max-w-md bg-gray-50 rounded-xl shadow-inner p-4 mt-4">
        <h1 className="font-mono text-sm bg-gray-200 p-2 rounded-t">
          BlogList.jsx
        </h1>

        {/* Scrollable code area */}
        <pre className="text-left font-mono text-sm bg-gray-100 p-3 rounded-b overflow-x-auto overflow-y-auto h-full text-gray-800">
          <code>
{`
import { Link } from "react-router-dom";

const BlogList = ({ blog }) => {
  const { id, title, body } = blog;

  return (
    <div className="flex flex-col m-2 p-3 gap-3 border border-indigo-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <Link
        to={\`/details/\${id}\`}
        className="no-underline text-gray-800 hover:text-indigo-600"
      >
        <h2 className="text-sm text-gray-500">Blog No: {id}</h2>

        <h3 className="text-2xl font-semibold bg-gray-50 p-2 rounded">
          {title.length > 40 ? (
            <p>
              {title.slice(0, 40)}
              <span className="text-gray-400"> ...</span>
            </p>
          ) : (
            <p>{title}</p>
          )}
        </h3>

        <p className="text-base text-gray-700 leading-relaxed">
          {body.length > 90 ? (
            <p>
              {body.slice(0, 90)}
              <span className="text-gray-400"> ...</span>
            </p>
          ) : (
            <p>{body}</p>
          )}
        </p>
      </Link>
    </div>
  );
};

export default BlogList;

`}
          </code>
        </pre>
      </div>
    </div>
  );
}
