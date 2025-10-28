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
 const BlogListDetails = () => {
  const blogs = useLoaderData();
  const {id, title, body } = blogs;
  const navigate = useNavigate();
  console.log(blogs);
  return (
    <div className="return">
      <Link to="#" onClick={() => navigate(-1)}>
        <h2>
          <IoArrowBackSharp className="icon" />
          Back to Home
        </h2>
      </Link>
      <div className="contained">
        <h3 className="blog-title">Blog No: {id}</h3>
        <h1>{title}</h1>
        <h3>{body}</h3>
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
