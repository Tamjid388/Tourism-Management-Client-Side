import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const Bookingform = () => {
    
    const [startDate, setStartDate] = useState(new Date());
        const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
          } = useForm()
          
    const onSubmit = (data) => {
        console.log(data)
    }
    
  return (
    <div className='container mx-auto'>
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
            placeholder="Your Image URL"
            {...register("url")}
            className="input input-bordered w-full"
            required
          />
        </div>
        {/* Tour Date Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
        
          <div >
          <DatePicker
             className="input input-bordered w-full"
            selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
        </div>
        <button type='submit' className="btn w-full bg-[#63AB45] text-white">
Book Now
        </button>

            </form>
        </div>
    </div>
  )
}
