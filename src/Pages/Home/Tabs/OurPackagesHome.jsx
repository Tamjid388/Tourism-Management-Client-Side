import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

export const OurPackagesHome = () => {
const axiosSecure=useAxiosSecure()
    const { isPending, data: packages } = useQuery({
        queryKey:['packages'],
        queryFn: async () => {
          const res = await axiosSecure.get(`/packages/random`); 
          return res.data;
        },
      
        
      })
      if(isPending){
        return <h1>Loading.....</h1>
      }
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2'>
            {
                packages.map((pack,idx)=>
                    <div key={idx} className="card card-compact bg-base-100  shadow-xl ">
                <figure>
                  <img className='h-[250px] object-cover'
                    src={pack?.imageUrl}
                    alt="pack" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{pack?.packageName}</h2>
                  <p>{pack?.packageDetails}</p>
                  <div className="card-actions ">
                    <button className="btn btn-sm ">{pack?.cost} $</button>
                    <button className="btn btn-sm ">{pack?.days} Days</button>
                  </div>
                  <div>
                 <Link to={`package/${pack._id}`}>
                 <button className="btn bg-green-500 text-white  mt-2">View  Package</button>
                 </Link>
                  </div>
                </div>
              </div>
                )
            }
        </div>

    </div>
  )
}
