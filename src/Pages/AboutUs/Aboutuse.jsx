import React from 'react';
import { Helmet } from 'react-helmet-async';

export const Aboutuse = () => {
  const ourMission=[
    {
      icon:"https://img.icons8.com/?size=100&id=3685&format=png&color=000000",
      title: "Promote Sustainable Tourism",
      description: "Encouraging eco-friendly travel practices that support local communities and preserve natural resources across Bangladesh."
    },
   
    {
      icon:"https://img.icons8.com/?size=100&id=nT9q11YdP5zt&format=png&color=000000",
      title: "Support Local Culture",
      description: "Preserving and promoting the rich cultural heritage of Bangladesh through responsible tourism and community engagement."
    },
    {      icon:"https://img.icons8.com/?size=100&id=40660&format=png&color=000000",
      title: "Enhance Traveler Experience",
      description: "Providing accurate, insightful, and helpful information to ensure every traveler has a safe, memorable, and enriching journey."
    }
  ]
  const developer = {
    name: "Zahir Rahman",
    role: "Full Stack Developer",
    bio: "Passionate full stack developer who single-handedly designed and built the entire Bangla Voyage Guide platform. Specializing in React and Node.js with 7+ years of experience creating travel and tourism applications.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    github: "https://github.com/zahirrahman",
    linkedin: "https://linkedin.com/in/zahirrahman"
  };

  return (
    <div className=" py-16">
        <Helmet>
             <title>About | TripNest</title>
             </Helmet>
 <section>
 <div
  className="h-[400px] bg-fixed bg-center bg-cover flex items-center justify-center text-white"
  style={{
    backgroundImage: "url('https://i.ibb.co/bggyp9N/sky-touring.jpg')",
  }}
>
  <div className=' bg-black
   bg-opacity-50 px-4 py-4 rounded text-center space-y-4 font-mansalva'>
  <h1 className="md:text-5xl font-bold">
    About
  </h1>
  <p className='text-lg font-lato'>Your trusted companion for discovering the beauty, 
    culture, and heritage of Bangladesh.</p>
  </div>
</div>

 </section>
 <section className='mx-auto container '>
  {/* Our Story  Section */}
<div className="w-full flex flex-col md:flex-row gap-6 md:gap-20 my-16">
<div className='md:w-1/2 '>
  <img className='h-[400px] w-full object-cover'
   src="https://i.ibb.co.com/KcFc6vR6/rafting.webp" alt="" />
</div>
<div className="px-2 md:w-1/2  flex flex-col justify-center
">
<h1 className="text-2xl md:text-4xl font-bold mb-4 text-start">
  Our Story
</h1>

<p className="text-base sm:text-lg md:text-xl leading-relaxed">
  Founded in 2018, TripNest Guide began with a simple mission: to showcase the incredible beauty and diversity of Bangladesh to travelers around the world. What started as a small blog has grown into a comprehensive travel resource that helps thousands of visitors each year 
  discover the hidden gems of this beautiful country.
  <br /><br />
  Our team of local experts has traveled to every corner of Bangladesh, from the lush Sundarbans mangrove forest to the rolling tea gardens of Sylhet and the pristine beaches of Cox's Bazar. We are passionate about sharing authentic experiences and supporting sustainable tourism that benefits local communities.
</p>

</div>
</div>

{/* Our Mission Section */}
<div className='my-16'>
<h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
  Our Mission
</h1>
<div className='flex flex-col md:flex-row gap-10 '>
  {
    ourMission.map((mission)=><div 
    className="card bg-base-100  shadow-xl border mt-10">
    <div className="card-body space-y-4">
    <div className="card-actions justify-center">
        <img src={mission.icon} alt="" />
      </div> 
     <div>
     <h2 className="card-title mb-2">{mission.title}</h2>
     <p>{mission.description}</p>
     </div>
     
    </div>
  </div>)
  }
</div>


</div>




 </section>
  
     
    </div>
  );
};
