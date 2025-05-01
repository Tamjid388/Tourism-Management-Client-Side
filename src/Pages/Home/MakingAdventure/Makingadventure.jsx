import React from "react";

export const Makingadventure = () => {
  const img1 = "https://i.ibb.co.com/7NxpsLG0/makeadventure.jpg";
  return (
    <div className="mx-auto container my-16 flex 
    flex-col-reverse md:flex-row  px-2 ">
      <div className="md:w-1/2 bg-base-200 flex flex-col
       justify-center md:px-20 space-y-4 md:space-y-12">
        <h1 className="text-3xl font-semibold font-serif mt-4 ">
          Making Adventure tours, activities <br />
          <span className="border-b-2 border-green-600 pb-2">affordable.</span>
        </h1>
        <p className="pt-3 font-semibold opacity-80 font-lato">
          Discover thrilling adventures and embrace nature’s beauty while
          creating unforgettable experiences. Escape the routine and explore
          breathtaking landscapes filled with excitement and serenity.
        </p>
      </div>

      <div className="md:w-1/2  ">
        <img className="rounded-lg" src={img1} alt="" />
      </div>
    </div>
  );
};
