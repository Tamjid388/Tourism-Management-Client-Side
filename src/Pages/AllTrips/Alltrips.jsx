import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useAxiosSecure } from '../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

export const Alltrips = () => {
    const axiosSecure=useAxiosSecure()
    const { isPending, data: packages } = useQuery({
        queryKey:['packages'],
        queryFn: async () => {
          const res = await axiosSecure.get(`/packages`); 
          return res.data;
        },
      
        
      })
      if(isPending){
        return <h1>Loading.....</h1>
      }
  return (
    <div className='py-16'>
        <h1 className='text-4xl font-bold  py-8 text-center'>Alltrips</h1>

        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                packages.map((pack,idx)=>
                <div key={idx} className="card card-compact bg-base-100  shadow-xl">
                    <figure>
                      <img className='h-[300px]'
                        src={pack.imageUrl}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{pack.packageName}</h2>
                      <p className='line-clamp-2'>{pack.packageDetails}</p>
                      <div className="card-actions justify-end">
                        <Link to={`/detailsOfPackages/${pack._id}`}>
                        <button className="btn bg-green-500 text-white">More Details</button>
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
// Issue With Understanding Assignment-12 requirements