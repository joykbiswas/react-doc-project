import BlogCreateLocalStore from "./BlogCreateLocalStore";

export default function BlogCreate() {
  return (
    <div>
         <h3 className="text-4xl font-bold text-center text-white">New Data Create</h3>
      <div className="flex justify-center p-6 pb-14 gap-3">
       
        <div className="h-[500px] w-full max-w-md bg-gray-50 rounded-xl shadow-inner p-4 mt-4">
          <h1 className="font-mono text-sm bg-gray-200 p-2 rounded-t">
            BlogCreate.jsx (Api Save)
          </h1>

          {/* Scrollable code area */}
          <pre className="text-left font-mono text-sm  p-3 rounded-b overflow-x-auto overflow-y-auto h-full text-gray-800">
            <code>
              {`
 import Swal from 'sweetalert2'
const AddBlog = () => {

    const handleAddBlog = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        

        const newBlog ={name,quantity,}
        console.log(newBlog);
        // send data to the server
        fetch('https://your-api-endpoint/blog',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newBlog)

        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
               
                Swal.fire({
                    title: 'success!',
                    text: 'user added blog successfully',
                    icon: 'success',
                    confirmButtonText: 'Add'
                  })
            }
            form.reset();
        })
        
    }
  return (
    <div className="max-w-full mx-auto  p-24">
      <h2 className="text-3xl font-bold">Add blog</h2>
      <form onSubmit={handleAddBlog}>
        {/* form row 1*/}
        <div className="md:flex ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">blog name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="blog name"
                className="input input-bordered w-full "
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="blog name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
       
        <input type="submit" value="Add blog"  className="btn w-full bg-[#f5d789]"/>
      </form>
    </div>
  );
};

export default AddBlog;

`}
            </code>
          </pre>
        </div>
        <div>
          <BlogCreateLocalStore />
        </div>
      </div>
    </div>
  );
}
