export default function HomeCodeCard() {
  return (
    <div className="flex justify-center p-6 pb-14">
      <div className="h-[500px] w-full max-w-md bg-gray-50 rounded-xl shadow-inner p-4 mt-4">
        <h1 className="font-mono text-sm bg-gray-200 p-2 rounded-t">
          Home.jsx
        </h1>

        {/* Scrollable code area */}
        <pre className="text-left font-mono text-sm bg-gray-100 p-3 rounded-b overflow-x-auto overflow-y-auto h-full text-gray-800">
          <code>
{`import { useEffect, useState } from "react";
const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const count = 100;

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < pages.length) setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, [currentPage, itemsPerPage]);

  const currentBlogs = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearchBar = (e) => {
    e.preventDefault();
    const filteredBlogs = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setSearchKey("");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  };

  return (
  <div>
    <Header />

    {/* Search Bar */}
    <SearchBar
      value={searchKey}
      clearSearch={handleClearSearch}
      formSubmit={handleSearchBar}
      handleSearchKey={(e) => setSearchKey(e.target.value)}
    />

    <div className="max-w-[1280px] mx-auto">
      {/* Blog List & Sidebar */}
      <div className="flex w-full gap-4 flex-col md:flex-row">
        {loading ? (
          <div className="flex justify-center items-center w-full py-10">
            <div className="w-24 h-24 border-3 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {/* Blog List */}
            <div
              className="
                w-full md:w-3/4 
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4
              "
            >
              {currentBlogs.length === 0 ? (
                <EmptyList />
              ) : (
                currentBlogs.map((blog) => (
                  <BlogLIst key={blog.id} blog={blog} />
                ))
              )}
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-1/4">
              <Sidebar />
            </div>
          </>
        )}
      </div>

      {/* Pagination */}
      <div className="text-center my-10 flex flex-wrap justify-center items-center gap-3">
        <button
          onClick={handlePreviousPage}
          className="px-3 py-2 rounded-md bg-gray-100 hover:bg-indigo-100 transition"
        >
          Prev
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page + 1)}
            className={\`px-3 py-2 rounded-md transition \${
              currentPage === page + 1
                ? "bg-indigo-200"
                : "bg-gray-100 hover:bg-indigo-100"
            }\`}
          >
            {page + 1}
          </button>
        ))}

        <button
          onClick={handleNextPage}
          className="px-3 py-2 rounded-md bg-gray-100 hover:bg-indigo-100 transition"
        >
          Next
        </button>

        <select
          value={itemsPerPage}
          onChange={handleItemPerPage}
          className="ml-3 border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  </div>
);

};

export default HomePage;`}
          </code>
        </pre>
      </div>
    </div>
  );
}
