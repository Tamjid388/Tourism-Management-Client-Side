// import React from 'react'
// import { useLocation } from 'react-router-dom'

// export const EditStories = () => {
//     const location=useLocation()
//     const story=location.state
//     if (!story) {
//         return <h1>No story data found! Please navigate from the ManageStory page.</h1>;
//       }
//   return (
//     <div>
//          <h1 className="text-4xl font-bold my-6">Edit Story</h1>
//          <h2>Title: {story.title}</h2>
//     </div>
//   )
// }
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAxiosPublic } from '../../../../Hooks/useAxiosPublic';

export const EditStories = () => {
  const { state: story } = useLocation(); // Retrieve the story passed via state
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [images, setImages] = useState(story?.images || []);

  const { register, handleSubmit, reset } = useForm();

const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`

  const handleRemoveImage = async (image) => {
    await axiosPublic.patch(`/stories/removeImage/${story._id}`, { image });
    setImages((prev) => prev.filter((img) => img !== image));
  };

  const onSubmit = async (data) => {
    const newImages = data.newImages || [];
    const uploadedImageUrls = [];

    for (let i = 0; i < newImages.length; i++) {
      const formData = new FormData();
      formData.append("image", newImages[i]);

      const res = await axiosPublic.post(image_hosting_api, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      uploadedImageUrls.push(res.data.data.url);
    }

    await axiosPublic.patch(`/stories/addImages/${story._id}`, {
        images: uploadedImageUrls,
    });

    setImages((prev) => [...prev, ...uploadedImageUrls]);
    reset(); // Reset the form after successful submission
  };


  return (
    <div>
    <h1 className="text-4xl font-bold my-6">Edit Story</h1>
    <h2 className="text-2xl font-semibold mb-4">Title: {story.title}</h2>
    <p>{story.text}</p>

    <div className="my-6">
      <h3 className="text-lg font-bold mb-2">Current Images</h3>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt="Story" className="w-full h-32 object-cover rounded-md" />
            <button
              onClick={() => handleRemoveImage(image)}
              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Add New Images</label>
        <input
          type="file"
          {...register('newImages')}
          multiple
          className="file-input file-input-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Images
      </button>
    </form>

    <button
      onClick={() => navigate('/dashboard/manageStory')}
      className="btn btn-outline mt-6"
    >
      Back to Manage Stories
    </button>
  </div>
  );
};