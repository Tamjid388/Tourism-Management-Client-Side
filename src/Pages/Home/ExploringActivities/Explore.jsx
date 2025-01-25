import React from 'react'
import { Title } from '../../../Component/SectionTitle/Title'
import { useAxiosPublic } from '../../../Hooks/useAxiosPublic'
import { useQuery } from '@tanstack/react-query'
import { PointerFollower } from '../../../Component/FramerMotion/PointerFollower'

export const Explore = () => {
    const axiosPublic=useAxiosPublic()
    const { isPending, error, data:resources=[] } = useQuery({
      queryKey: ['resources'],
      queryFn: async () => { 
        const response = await axiosPublic.get('/resources');
        console.log(response.data); 
        return response.data;
        
      },
    })
    if(isPending){
      return <h1>Loading....</h1>
    }
  return (
    <div>
        <Title
        heading={'Exploring Tour Activities'}
        >

        </Title>
        <PointerFollower></PointerFollower>

        <div className='container my-12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-24'>
            {
                resources.map(resouce=><div key={resouce._id} className="card bg-base-100   shadow-xl ">
                    <figure className='rounded border-2'>
                      <img className='h-[300px] w-full'
                        src={resouce.image_url}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body absolute bottom-0 font-mansalva ">
                      <h2 className="card-title bg-white btn">
                        {resouce.name}
                        
                      </h2>
                   
                    </div>
                  </div>)
            }
        </div>
    </div>
  )
}
