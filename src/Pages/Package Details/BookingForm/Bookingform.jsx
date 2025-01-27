import React, { useContext, useState } from 'react'
import { useForm,Controller} from 'react-hook-form'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Authcontext } from '../../../Provider/Authprovider';
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';


export const Bookingform = () => {
   const axiosSecure=useAxiosSecure()
    const {user}=useContext(Authcontext)
    const navigate=useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    // console.log(user);
 
    const [startDate, setStartDate] = useState(new Date());
        const {
            register,
            handleSubmit,
            watch,control,
            formState: { errors },
          } = useForm()



        
          
    const onSubmit = (data) => {
   
    
        const bookingData={
         data,
          status:'Pending'
        }
        console.log(bookingData)
        axios.post('http://localhost:5000/bookings',bookingData)
        .then(res=>{
          if (res.data.insertedId){
            console.log("worked");
            setIsModalOpen(true)
          }
          else{
            console.log("Failed");
          }
        })
    }
    const { isPending, error, data: guideData } = useQuery({
      queryKey:['guide'],
      queryFn: async () => {
        const res = await axiosSecure.get(`/guides`); 
        return res.data;
      },
    
      
    })
    const { isPending:isPackagesPending, data: packages } = useQuery({
      queryKey:['packages'],
      queryFn: async () => {
        const res = await axiosSecure.get(`/packages`); 
        return res.data;
      },
    
      
    })
    if(isPending){
      return <h1>Loading.....</h1>
    }
  
    // function handleBooking(){
    //   if(!user){
    //     return navigate('/')
    //   }
    // }
  return (
    <div className='container mx-auto'>
        {/* Modal Component */}
        {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal modal-open">
            <div className="modal-box">
              <h2 className="text-2xl font-bold mb-4">Confirm your Booking</h2>
              <p>Your booking has been successfully placed!</p>
              <div className="modal-action">
                <a
                 
                  className="btn bg-[#63AB45] text-white"
                  onClick={() => setIsModalOpen(false)} // Close modal after redirection
                >
                  Go to My Bookings
                </a>
              </div>
              <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button onClick={() => setIsModalOpen(false)} className="btn">Close</button>
      </form>
    </div>
            </div>
          </div>
        </div>
      )}
        <h1 className='text-4xl font-bold text-center my-12'>Booking Form</h1>
        <div className='max-w-lg mx-auto border p-8 bg-base-200 rounded-lg'>
            <form action="" className='space-y-4'
            onSubmit={handleSubmit(onSubmit)}
            >
                 {/* Name Input */}
        <div className=''>
          <label className="block text-sm font-medium mb-1"
         >Name</label>
          <input
            type="text"
            placeholder="Your Name"
            defaultValue={user?.displayName}
            readOnly
            name="name"
            {...register("name")}
            className="input input-bordered w-full"
            required
          />
        </div>

         {/* Email Input */}
         <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            readOnly
            placeholder="Your Email"
            {...register("email")}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Image URL Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="url"
            name="url"
            defaultValue={user?.photoURL}
            readOnly
            placeholder="Your Image URL"
            {...register("url")}
            className="input input-bordered w-full"
            required
          />
        </div>
           {/* Package Name */}
      <div>
      <label className="block text-sm font-medium mb-1">Package Name</label>
      <select
       
        className={`w-full px-2 py-1 border ${errors.packageName ? 'border-red-500' : 'border-gray-300'} rounded mb-4`}
        {...register('packageName', { required: 'Please select a guide' })}
      >
        <option value="" className='' >Select A Package Name</option>
        {packages?.map((pkg) => 
      <option key={pkg._id} >
        {pkg.packageName}
      </option>
    )}
      </select>
        {errors.packageName && <p className="text-red-500 text-sm">{errors.packageName.message}</p>}
      </div>






        {/* Price Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="number"
            name="price"
            
       
            placeholder="Price"
            {...register("price")}
            className="input input-bordered w-full"
            required
          />
        </div>
        {/* Tour Date Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
        
          <div >
          <Controller
            name="date" 
            control={control} 
            render={({ field }) => (
              <DatePicker
                className="input input-bordered w-full"
                selected={field.value}
                onChange={(date) => {
                
                  field.onChange(date); // Pass the new date to react-hook-form
                }}
              />
            )}
          />
          </div>
        </div>
        {/* Select Guides */}
        <h2 className="block text-sm font-medium mb-1">Select a Tour Guide</h2>

      {/* Dropdown for Guide Names */}
     
      <select
        id="guideName"
        className={`w-full px-2 py-1 border ${errors.guideName ? 'border-red-500' : 'border-gray-300'} rounded mb-4`}
        {...register('guideName', { required: 'Please select a guide' })}
      >
        <option value="" className='' >Select a Guide</option>
        {guideData?.map((guide) => (
          <option key={guide.id} value={guide.name}>
            {guide.name}
          </option>
        ))}
      </select>
      {errors.guideName && <p className="text-red-500 text-sm mb-2">{errors.guideName.message}</p>}



       <div>
       <button disabled={!user}  type='submit' className="btn w-full bg-[#63AB45] text-white">
         Book Now
        </button>
       </div>

            </form>
        </div>
    </div>
  )
}
