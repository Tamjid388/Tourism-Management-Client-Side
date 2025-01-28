import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';
import { FaDollarSign } from "react-icons/fa";
import { Authcontext } from '../../../Provider/Authprovider';
import { useAxiosPublic } from '../../../Hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

export const ManageProfile = () => {
  const {user}=useContext(Authcontext)
  const axiossecure=useAxiosSecure()
  const axiosPublic=useAxiosPublic()
  const { isPending, error, data:stats } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => { 
      const response = await axiossecure.get('/admin-stats');
      console.log(response.data); 
      return response.data;
      
    },
  })

  
  const { isPending:adminPending, data:Admin,refetch } = useQuery({
    queryKey: ['allusers',user?.email],
    queryFn: async () => { 
      const response = await axiossecure.get(`/allusers?email=${user.email}`);
       
      return response.data;
      
    },
  })


// form
 const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()
const onSubmit = (data) =>{
  console.log(data);
  const info={
   name:data.name,
   photo:data.photo
  }

  axiosPublic.patch(`/allusers/${Admin.email}`,info)
  .then(res=>{
   if(res.data.modifiedCount > 0){
     console.log("Update Success");
     Swal.fire("Update Success")
     refetch()
   }
  })
}




const handleModal=()=>{
  document.getElementById('my_modal_5').showModal()
}
if(isPending){
  return <h1>Loading....</h1>
}


if (adminPending) {
return <h1>Loading...</h1>;
}


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-4xl font-bold my-6 text-gray-800 text-center">
      Welcome to Your Profile
    </h1>
    <div>

      <div className='p-4 bg-white mb-4 rounded-md shadow-lg flex flex-col justify-center items-center space-y-2'>
        <img className='w-48 h-48 object-cover rounded-full'  src={Admin.photo} alt="" />
        <h1 className='text-xl font-bold'>{Admin.name}</h1>
        <button onClick={handleModal} className='btn btn-outline'>Edit</button>
      </div>

    </div>
  
    <div className="stats shadow grid grid-cols-1 grid-rows-5 md:grid-rows-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4">
      {/* Total Payment */}
      <div className="stat bg-white shadow-md rounded-lg p-4 border-t-4 border-green-500">
        <div className="stat-figure text-green-500 text-3xl">
          <FaDollarSign />
        </div>
        <div className="stat-title text-gray-600 font-medium">Total Payment</div>
        <div className="stat-value text-gray-800 text-2xl font-bold">
          {stats?.totalPayments}
        </div>
      </div>
  
      {/* Total Stories */}
      <div className="stat bg-white shadow-md rounded-lg p-4 border-t-4 border-purple-500">
        <div className="stat-figure text-purple-500 text-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="stat-title text-gray-600 font-medium">Total Stories</div>
        <div className="stat-value text-gray-800 text-2xl font-bold">
          {stats?.totalStories}
        </div>
      </div>
  
      {/* Total Tourists */}
      <div className="stat bg-white shadow-md rounded-lg p-4 border-t-4 border-blue-500">
        <div className="stat-figure text-blue-500 text-3xl">
          <div className="w-16 rounded-full"></div>
        </div>
        <div className="stat-title text-gray-600 font-medium">Total Tourists</div>
        <div className="stat-value text-gray-800 text-2xl font-bold">
          {stats?.totalTourists}
        </div>
      </div>
  
      {/* Total Tour Guides */}
      <div className="stat bg-white shadow-md rounded-lg p-4 border-t-4 border-red-500">
        <div className="stat-figure text-red-500 text-3xl">
          <div className="w-16 rounded-full"></div>
        </div>
        <div className="stat-title text-gray-600 font-medium">Total Tour Guides</div>
        <div className="stat-value text-gray-800 text-2xl font-bold">
          {stats?.totalGuides}
        </div>
      </div>
  
      {/* Total Packages */}
      <div className="stat bg-white shadow-md rounded-lg p-4 border-t-4 border-yellow-500">
        <div className="stat-figure text-yellow-500 text-3xl">
          <div className="w-16 rounded-full"></div>
        </div>
        <div className="stat-title text-gray-600 font-medium">Total Packages</div>
        <div className="stat-value text-gray-800 text-2xl font-bold">
          {stats?.totalPackages}
        </div>
      </div>
    </div>
         {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <div>
      <form  onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
           {/* Name Input */}
           <div>
          <label className="block text-sm font-medium mb-1"
         >Name</label>
          <input
            type="text"
            placeholder="Your Name"
            
            name="name"
            {...register("name")}
            className="input input-bordered w-full"
            required
          />
        </div>
        
        {/* Image URL Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="url"
            name="photo"
            placeholder="Your Image URL"
            {...register("photo")}
            className="input input-bordered w-full"
            required
          />
        </div>
        <button className='btn btn-outline' >Submit</button>
      </form>
    </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button type='submit' className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
  </div>
  
  )
}
