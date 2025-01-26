import React, { useContext } from 'react'
import { Authcontext } from '../../../../Provider/Authprovider';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useAxiosPublic } from '../../../../Hooks/useAxiosPublic';
import { useAxiosSecure } from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

export const GuideProfile = () => {
 const {user}=useContext(Authcontext)
 const axiosPublic=useAxiosPublic()
 const axiosSecure=useAxiosSecure()
  const { isPending, data:guideProfile,refetch } = useQuery({
    queryKey: ['guideprofile',user?.email],
    queryFn: async () => { 
      const response = await axiosSecure.get(`/allusers?email=${user.email}`);
       
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
  
    axiosPublic.patch(`/allusers/${guideProfile.email}`,info)
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
  return (
    <div>
      <h1 className='text-3xl font-bold'>GuideProfile</h1>
      <h1 className="text-4xl font-bold my-6 text-gray-800 text-center">
      Welcome to Your Profile
    </h1>
    <div>

      <div className='p-4 bg-white mb-4 rounded-md shadow-lg flex flex-col justify-center items-center space-y-2'>
        <img className='w-48 h-48 object-cover rounded-full'  src={guideProfile?.photo} alt="" />
        <h1 className='text-xl font-bold'>{guideProfile?.name}</h1>
        <button onClick={handleModal} className='btn btn-outline'>Edit</button>
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
