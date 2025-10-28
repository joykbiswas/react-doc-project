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
{`const BlogList = ({ blog }) => {
  console.log(blog);
  const { id, title, body } = blog;

  return (
    <div className='container'>
      <Link to={\`/details/\${id}\`} className="custom-link">
        <h2 className='id'>Blog No: {id}</h2>

        <h3 className="title">
          {title.length > 40 ? (
            <p>{title.slice(0, 40)} <span>...</span></p>
          ) : (
            <p>{title}</p>
          )}
        </h3>

        <p className="body">
          {body.length > 90 ? (
            <p>{body.slice(0, 90)} <span>...</span></p>
          ) : (
            <p>{body}</p>
          )}
        </p>
      </Link>
    </div>
  );
};

export default BlogList;`}
          </code>
        </pre>
      </div>
    </div>
  );
}
