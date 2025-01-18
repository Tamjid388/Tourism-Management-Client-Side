import React from 'react'
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { BiLocationPlus } from 'react-icons/bi'
import { FaGrinStars } from 'react-icons/fa'

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
    <div className='container mx-auto pt-16 mb-16'>
      <figure>
        <img src={guide.profileImage}
        className='h-[700px] w-full object-cover'
        
        alt="profileImage" />
      </figure>
     <div className='mt-8 space-y-4'>
     <h1 className='font-bold text-5xl mt-4'>{guide.name}</h1>
     <p className='flex items-center gap-2 text-xl'><span><BiLocationPlus></BiLocationPlus></span>  Location:  {guide.location}</p>
     <p className='flex items-center gap-2 text-xl'><span><FaGrinStars></FaGrinStars> </span> 
     Specialty:  {guide.specialty}</p>
     <Link className='btn bg-[#63AB45] mt-4 rounded-none  text-white '>
     Contact Now</Link>
     </div>
    </div>
  )
}
