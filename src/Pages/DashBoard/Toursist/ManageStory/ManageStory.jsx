import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useAxiosPublic } from '../../../../Hooks/useAxiosPublic'
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

export const ManageStory = () => {
  const axiosPublic=useAxiosPublic()
  const { isPending, error, data:stories=[] } = useQuery({
    queryKey: ['stories'],
    queryFn: async () => { 
      const response = await axiosPublic.get('/stories');
      console.log(response.data); 
      return response.data;
      
    },
  })
  if(isPending){
    return <h1>Loading....</h1>
  }
  return (
    <div>
      <h1 className='text-4xl font-bold my-6'>ManageStory</h1>
  <div className='grid grid-cols-3 gap-6 bg-gray-300'>
  {
          stories.map((story) => (
            <div key={story._id} className="card bg-base-100 w-96 shadow-xl">
              <figure className="mb-4">
                {/* Dynamically render multiple images at the top */}
                {story.images && story.images.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`Story Image ${index + 1}`}
                    className="w-full h-auto rounded-md"
                  />
                ))}
              </figure>
              <div className="card-body">
                <h2 className="card-title">{story.title}</h2>
                <p>{story.text}</p>
              </div>
            </div>
          ))
        }
  </div>
    </div>
  )
}
