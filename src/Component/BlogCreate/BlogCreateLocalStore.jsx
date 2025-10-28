export default function BlogCreateLocalStore() {
    
  return (
    <div className="flex justify-center">
      <div className="h-[500px] w-full max-w-md bg-gray-50 rounded-xl shadow-inner p-4 mt-4">
        <h1 className="font-mono text-sm bg-gray-200 p-2 rounded-t">
          BlogCreate2.jsx (localStorage)
        </h1>

        {/* Scrollable code area */}
        <pre className="text-left font-mono text-sm bg-gray-100 p-3 rounded-b overflow-x-auto overflow-y-auto h-full text-gray-800">
          <code>
{`
import Swal from 'sweetalert2'
const AddBlog = () => { 

  const handleAddBlog = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;

    const newBlog = { name, quantity };
    console.log(newBlog);

    // Get existing blogs from localStorage
    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];

    // Add new blog
    existingBlogs.push(newBlog);

    // Save updated blogs back to localStorage
    localStorage.setItem('blogs', JSON.stringify(existingBlogs));

    // Success alert
    Swal.fire({
        title: 'Success!',
        text: 'Blog added successfully',
        icon: 'success',
        confirmButtonText: 'Add'
    });

    form.reset();
  };
}
`}
          </code>
        </pre>
      </div>
    </div>
  );
}
