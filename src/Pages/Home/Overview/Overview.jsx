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
     <div className='flex flex-col md:flex-row  items-center  container mx-auto w-full my-16'>
        
        <div className="w-1/2 space-y-12">
       <h1 className='text-5xl font-bold '> Making Adventure tours, activities affordable.</h1>
<p className='text-3xl'>Find an adventure, create a hobby that is 
    related to nature in its vert
     pristiene shape for your goodness. Tempor incididunt ut labore. Et dolore 
    magna aliqua. Quitts ipsum suspendisse ultrices gravida.</p>
        </div>
     
     <div className="w-1/2 h-[400px]">
     {/* <iframe className='w-full h-full rounded-lg '
      
        height="315"
        src="https://www.youtube.com/embed/Zcx247sfxPM?si=ieloQWAz_VVu1en1"
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe> */}
      {/* <ReactPlayer
      url={'https://youtu.be/5s8fs_j2xlY?si=IkCsRw8bO9bhitg8'}
      ></ReactPlayer> */}
     </div>
    </div>
   </div>
  );
};
