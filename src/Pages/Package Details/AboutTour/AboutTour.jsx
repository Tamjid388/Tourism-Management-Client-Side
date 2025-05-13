import React from 'react'
import { GiStarSattelites } from 'react-icons/gi'
import { RiFocus2Line } from 'react-icons/ri'


export const AboutTour = () => {
  const bg1=" https://res.cloudinary.com/dto6ulc5n/image/upload/v1746707042/bandarban2_p1x9bv.webp"
  return (
    <div
    className='container mx-auto my-16
     space-y-2 flex flex-col-reverse md:flex-row gap-6 px-2'
    >
      
    <div className="flex flex-col justify-around">
     <div>
       <div>
         <p className='text-[#63AB45] font-mansalva text-2xl font-bold'>About The Tour</p>
        <h2 className='text-4xl font-bold pb-4'>Let’s know About Our
        Journey For TripNest</h2>
       </div>
      <div className='flex gap-4 pb-4'>
      <div className='flex items-center gap-2 text-xl font-bold opacity-80 text-[#63AB45]'>
            <RiFocus2Line></RiFocus2Line> Mission & Vision
        </div>
        <div className='flex items-center gap-2 text-xl font-bold opacity-80 text-[#63AB45]'>
            <GiStarSattelites></GiStarSattelites> Focus On Customer
        </div>
      </div>
     </div>
        <p className='font-semibold opacity-80 pb-4 mt-4'>
        At TripNest, we specialize in creating unforgettable
         travel experiences tailored to your desires. Our 
         comprehensive services include worldwide tour destinations,
          customizable tour packages, visa application assistance, hotel reservations, 
          transportation rentals, and day-long activities. With a commitment to excellence, we ensure every journey is seamless, enriching, and memorable. Join us as we explore the wonders of the world together.
    </p>
   <div>
     <button className='btn bg-[#63AB45]  text-white '>About More</button>
   </div>
    </div>
    <div className="w-5/6">
      <img loading='lazy' className='h-[400px] w-full object-cover' src={bg1} alt="" />

    </div>




    </div>
  )
}
