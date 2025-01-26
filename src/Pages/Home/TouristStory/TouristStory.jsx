import React from 'react'
import { Title } from '../../../Component/SectionTitle/Title'
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import {
    EmailShareButton,
    FacebookShareButton,
    
  } from "react-share";
  import {
    EmailIcon,
    FacebookIcon,
    
  } from "react-share";
import { useAxiosPublic } from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

export const TouristStory = () => {
  const axiosPublic=useAxiosPublic()
  const { isPending, error, data:stories=[] } = useQuery({
    queryKey: ['stories'],
    queryFn: async () => { 
      
      const response = await axiosPublic.get('/stories/random');
      console.log(response.data); 
      return response.data;
      
    },
  })
  if(isPending){
    return <h1>Loading....</h1>
  }
  return (
    <div className='container mx-auto'>
        <Title 
        heading="Discover Memorable Journeys"
        subheading="Share your own experiences."
        
        ></Title>
        <section className="bg-yellow-200 my-16">
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  md:py-6'>
  {
          stories.map((story) => (
            <div key={story._id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
            

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
   
     
    </div>
              </div>
            </div>
          ))
        }
  </div>

        </section>
    </div>
  )
}
// Assignment 12, Tourist Story Section