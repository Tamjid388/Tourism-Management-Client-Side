import React from 'react'
import { useAxiosPublic } from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export const Community = () => {
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
    <div className='pt-16 container mx-auto'>Community {stories.length}
    <div>



        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8  md:py-6'>
          {
                  stories.map((story) => (
                    <div key={story._id} className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        {
                          // Display multiple images if available
                          story.images.map((image, index) => (
                            <img key={index} src={image} alt="Story image" />
                          ))
                        }
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
          <section>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>

          </section>
    </div>





    </div>
  )
}
