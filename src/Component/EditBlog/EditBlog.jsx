export default function EditBlog() {
  return (
    <div>
      <h3 className="text-4xl font-bold text-white text-center">Edit Blog</h3>
      <div className="flex justify-center p-6 pb-14">
        <div className="h-[500px] w-full max-w-md bg-gray-50 rounded-xl shadow-inner p-4 mt-4">
          <h1 className="font-mono text-sm bg-gray-200 p-2 rounded-t">
            EditBlog.jsx
          </h1>

          {/* Scrollable code area */}
          <pre className="text-left font-mono text-sm bg-gray-100 p-3 rounded-b overflow-x-auto overflow-y-auto h-full text-gray-800">
            <code>
              {`
 import { useLoaderData } from "react-router-dom";
 import Swal from "sweetalert2";

const UpdateBlog = () => {
    const blog = useLoaderData()
    const{_id,name,quantity,} =blog
    

    const handleUpdateBlog = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
       

        const updateBlog ={name,quantity,}
        console.log(updateBlog);
        // send data to the server
        fetch(\`https://6e672.vercel.app/blog/\${_id}\`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(updateBlog)

        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount>0){
              //  alert('user update successfully')
                Swal.fire({
                    title: 'success!',
                    text: 'blog updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Add'
                  })
            }
        })
        
    }
    return (
        <div className="bg-[#fbf3de] max-w-full mx-auto  p-24">
      {/* <h2 className="text-3xl font-bold">Update blog:{blog.name}</h2> */}
      <form onSubmit={handleUpdateBlog}>
         {/* form name and quantity row */}
        <div className="md:flex ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">blog name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="blog name"
                className="input input-bordered w-full "
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
                defaultValue={quantity}
                placeholder="blog name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        
        <input type="submit" value="Update blog"  className="btn w-full bg-[#f5d789]"/>
      </form>
    </div>
    );
};

export default UpdateBlog;

`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
