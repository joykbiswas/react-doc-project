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
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

    <div className="max-w-[1280px] mx-auto">
        <div className="box">
          {loading ? (
            <div className="loader"></div>
          ) : (
            <>
              <div className="blogs">
                {currentBlogs.length === 0 ? (
                  <EmptyList />
                ) : (
                  <>
                    {currentBlogs.map((blog) => (
                      <BlogList key={blog.id} blog={blog} />
                    ))}
                  </>
                )}
              </div>      
            </>
          )}
        </div>

        <div className="pagination">
          <button onClick={handlePreviousPage}>Prev</button>
          {pages.map((page) => (
            <button
              className={currentPage === page + 1 ? "selected" : undefined}
              onClick={() => setCurrentPage(page + 1)}
              key={page}
            >
              {page + 1}
            </button>
          ))}
          <button onClick={handleNextPage}>Next</button>

          <select
            value={itemsPerPage}
            onChange={handleItemsPerPage}
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
