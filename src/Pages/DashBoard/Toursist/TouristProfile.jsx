import React, { useContext } from 'react'
import { Authcontext } from '../../../Provider/Authprovider'
import { axiosPublic, useAxiosPublic } from '../../../Hooks/useAxiosPublic'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

export const TouristProfile = () => {
  
  const {user}=useContext(Authcontext)
  // console.log(user);
  const axiosPublic=useAxiosPublic()
  const {data:userDetail, isLoading, error,refetch}=useQuery({
    queryKey: [user?.email,'touristEmail'],
    queryFn:async()=>{
      const res=await axiosPublic.get(`/allusers?email=${user.email}`
    )
      return res.data
  }
  })
  // console.log(userDetail);

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

           axiosPublic.patch(`/allusers/${userDetail.email}`,info)
           .then(res=>{
            if(res.data.modifiedCount > 0){
              console.log("Update Success");
              refetch()
            }
           })
      }

const handleModal=()=>{
  document.getElementById('my_modal_5').showModal()
}
  



  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700">
        Welcome to the Tourist Profile Management </h2> 
        <p className="mt-4">
        {userDetail
          ? `Hello, ${userDetail.name}. Your email is ${userDetail.email}.`
          : 'No user details found.'}
      </p>
      <div className='bg-gray-200 md:w-1/3 p-2'>
      <img className='h-48 rounded-md mb-4' src={userDetail?.photo} alt="" />
        <p>Email : {userDetail?.email}</p>
        <p>Name : {userDetail?.name}</p>
        <p>Role :{userDetail?.role?userDetail.role:'Tourist'}</p>
        <button
        onClick={handleModal}
        className='btn btn-sm my-4 bg-green-400 text-white'>Edit</button>

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
