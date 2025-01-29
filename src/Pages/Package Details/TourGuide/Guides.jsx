import React, { useEffect, useState } from 'react'
import { Title } from '../../../Component/SectionTitle/Title'
import { Link, useParams } from 'react-router-dom'
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { Loading } from '../../../Component/LoadingSpinner/Loading'


export const Guides = () => {
    const [guides,setGuides]=useState([])
      const axiosSecure=useAxiosSecure()
      const {id}=useParams()

    const { isPending, error, data: guideData } = useQuery({
      queryKey:['guide'],
      queryFn: async () => {
        const res = await axiosSecure.get(`/guides`); 
        return res.data;
      },
      enabled:!! localStorage.getItem('access-token')
      
    })



    useEffect(() => {
      if (guideData) {
        setGuides(guideData); 
      }
    }, [guideData]); 
    if(isPending){
      return <Loading></Loading>
    }
  return (
    <div className='container mx-auto'>
        <Title subheading={"Tour Guide"} 
        heading={'Our Travel Guide'}></Title>
        <section className='py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-20'>
         {
            guides.map((guide,idx)=><div key={idx} className="card card-compact bg-base-100  shadow-xl">
            <figure>
              <img className='h-48 w-48 object-cover rounded-[100px]'
                src={guide.profileImage || guide.photo}
                alt="guide" />
            </figure>
            <div className="card-body  text-center">
              <h2 className="text-2xl font-bold text-center">{guide.name}</h2>
              {/* <p className='text-xl font-semibold'>
              {guide.specialty}
              </p> */}

              <div className="card-actions justify-center">
           
              <Link to={`/guides/${guide._id}`}  className='btn bg-[#63AB45] mt-4 rounded-none  text-white '>About More</Link>
              </div>
            </div>
          </div>)
         }
        </section>

    </div>
  )
}
