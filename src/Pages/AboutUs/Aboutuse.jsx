import React from 'react';
import { Helmet } from 'react-helmet-async';

export const Aboutuse = () => {
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
 <section className='mx-auto container'>
<div className="flex flex-col md:flex-row bg-yellow-200">
<div >
  <img className='w-1/2'
   src="https://i.ibb.co.com/KcFc6vR6/rafting.webp" alt="" />
</div>
<div className="w-1/2">
  <p>
  Founded in 2018, TripNest Guide began with a simple mission: to showcase the incredible beauty and diversity of Bangladesh to travelers around the world. What started as a small blog has grown into a comprehensive travel resource that helps thousands of visitors each year 
  discover the hidden gems of this beautiful country.

Our team of local experts has traveled to every corner of Bangladesh, from the lush Sundarbans mangrove forest to the rolling tea gardens of Sylhet and the pristine beaches of Cox's Bazar. We are passionate about sharing authentic experiences and supporting sustainable tourism that benefits local communities.
  </p>
</div>
</div>

 </section>
  
     
    </div>
  );
};
