import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useAxiosPublic } from '../../../../Hooks/useAxiosPublic'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



export const ManageStory = () => {
  const [selectStory,setSelectStory]=useState(null)
  const navigate=useNavigate()
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
  const handleEdit=(story)=>{
    // setSelectStory(story);
    // document.getElementById('my_modal_5').showModal();
    navigate('/dashboard/editStory', { state: story })
    
  }
  return (
    <div>
      <h1 className='text-4xl font-bold my-6'>ManageStory</h1>
  <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  md:py-6'>
  {
          stories.map((story) => (
            <div key={story._id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
                {/* {
                 
                  story.images.map((image, index) => (
                    <img key={index} src={image} alt="Story image" />
                  ))
                } */}

<Swiper
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper w-full h-60"
              >
                {story.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Story ${story.title} image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{story.title}</h2>
                <p>{story.text}</p>
                <div className="card-actions">
      <button
      onClick={()=>handleEdit(story)}
      className="btn btn-sm bg-green-500">
        Edit</button>
      <button title='delete' className="btn btn-sm btn-outline"><MdDelete></MdDelete></button>
    </div>
              </div>
            </div>
          ))
        }
  </div>

  {/* Open the modal using document.getElementById('ID').showModal() method */}

  {/* <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {selectStory && (
            <>
              <h3 className="font-bold text-lg">{selectStory.title}</h3>
              <p className="py-4">{selectStory.text}</p>
            </>
          )}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog> */}
    </div>
  )
}
