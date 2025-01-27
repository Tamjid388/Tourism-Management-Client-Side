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
    // Story For Home Page
  } from "react-share";
import { useAxiosPublic } from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

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
        <section className="px-2 my-12">
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  md:py-6'>
  {
          stories.map((story) => (
            <div key={story._id} className="card bg-base-100  shadow-xl rounded-none">
            <figure className='p-2'>
            

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
                <p className='line-clamp-2'>{story.text}</p>
             
                <div className="card-actions flex items-center justify-between">
                  <FacebookShareButton
                    url={`http://localhost:5173/stories/${story._id}`}
                    quote={`Check out this amazing story: ${story.title}`}
                    hashtag="#TravelStories"
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  {/* <span className="text-sm text-gray-500">Share this story!</span> */}
                </div>
              </div>
            </div>
          ))
        }
  </div>

        </section>

        <div>
          <div className='flex justify-center'>
          <Link to={'allstoryhome'}>
          <button className='btn btn-link text-xl'>All Stories</button>
          </Link>

          </div>
        </div>
    </div>
  )
}
// Assignment 12, Tourist Story Section