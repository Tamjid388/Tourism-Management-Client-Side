import React from 'react';
import ReactPlayer from 'react-player';
import { Title } from '../../../Component/SectionTitle/Title';

export const Overview = () => {
  return (
   <div>
    <Title
    heading={"Overview"}
    subheading={"Making Adventure Tours, Activities Affordable"}
    ></Title>
     <div className='flex
      flex-col-reverse md:flex-row  items-center  container mx-auto w-full my-16'>
        
        <div className="px-3 py-4 md:space-y-12 md:w-1/2">
       <h1 className='text-2xl md:text-5xl font-bold mb-2 font-mansalva'> 
       Discover Unique Outdoor Adventures for Everyone</h1>
<p className='font-lato text-base sm:text-lg  font-semibold'>  Explore nature in its purest form and ignite your passion for adventure. Whether it's hiking,
      kayaking, or camping, create memories that last a lifetime. Step away from the noise and
      reconnect with the outdoors.</p>
        </div>
     
     <div className="md:w-1/2 h-[400px]">
     <iframe className='w-full h-full rounded-lg border  shadow-lg'
      width={'400px'}
        height="315"
        src="https://www.youtube.com/embed/Zcx247sfxPM?si=ieloQWAz_VVu1en1"
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      {/* <ReactPlayer
      url={'https://youtu.be/5s8fs_j2xlY?si=IkCsRw8bO9bhitg8'}
      ></ReactPlayer> */}
     </div>
    </div>
   </div>
  );
};
