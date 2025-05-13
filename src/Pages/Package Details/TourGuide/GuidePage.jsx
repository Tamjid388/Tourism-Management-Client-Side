import React from 'react'
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { BiLocationPlus } from 'react-icons/bi'
import { FaGrinStars } from 'react-icons/fa'
import { MdLanguage } from 'react-icons/md'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'

export const GuidePage = () => {
  const axiosSecure=useAxiosSecure()
  const {id}=useParams()
  const {isPending,   data:guide } = useQuery({
    queryKey:['guide',id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/guides/${id}`); 
      return res.data;
    },
  
    
    
  })
  console.log(guide);
  if(isPending){
    return <div className='text-4xl font-bold pt-16'>Loading.....</div>
  }
  

  return (
    <div className='container mx-auto    pt-16 mb-16 flex flex-col md:flex-row
     md:gap-8 items-center px-2'>
     
      <figure>
        <img src={guide.profileImage || guide.photo}
        className='h-[400px] md:h-[400px] w-full object-cover'
        
        alt="profileImage" />
      </figure>
     <div className='mt-8 space-y-4 px-2'>
     <h1 className='font-bold text-3xl md:text-5xl mt-4'>{guide.name}</h1>
    
      {/* Dynamic Data */}
      <p className='flex items-center  gap-2 md:text-xl'>
          <BiLocationPlus /> Location: {guide.location || 'Not specified'}
        </p>
        <p className='flex items-center gap-2 md:text-xl'>
          <FaGrinStars /> Specialty: {guide.specialty || 'Expert in multiple tours'}
        </p>

        {/* Static Data for all tour guides */}
        <p className='flex items-center gap-2 md:text-xl'>
          <MdLanguage /> Speaks: English, Bengali, French
        </p>
        <p className='flex items-center gap-2  md:text-xl'>
          <AiOutlineSafetyCertificate /> Certified Tour Guide
        </p>
        <p className='text-lg text-gray-600 w-2/3'>
          With over 5 years of experience,<span className='font-bold'>{guide.name}</span> is highly trained professionals who ensure an amazing travel experience.
        </p>

     <Link className='btn bg-[#63AB45] mt-4 rounded-none text-sm md:text-base px-4 py-2 md:px-6 md:py-3  text-white '>
     Contact Now</Link>
     </div>
    </div>
  )
}
