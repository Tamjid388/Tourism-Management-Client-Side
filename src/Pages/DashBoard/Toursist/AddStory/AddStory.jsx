import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAxiosPublic } from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
export const AddStory = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate=useNavigate()
const axiosPublic=useAxiosPublic()
  const onSubmit = async (data) => {
  console.log(data);
  
  const uploadedImageUrls = [];


  // Loop through each image and upload
  for (let i = 0; i < data.image.length; i++) {
    const formData = new FormData();
    formData.append("image", data.image[i]);

   
      const res = await axiosPublic.post(image_hosting_api, formData, {
        headers: { "content-type": "multipart/form-data" },
      });
      uploadedImageUrls.push(res.data.data.url); // Add the hosted image URL
    
  }
  const story = {
    title: data.title,
    text: data.text,
    images: uploadedImageUrls,
  };
  const response = await axiosPublic.post("/stories", story);
  if (response.data.insertedId){
    console.log("Story added successfully:", response.data.insertedId);
    Swal.fire("Story added successfully")
    navigate('/dashboard/manageStory')
  }

  };


  return (
    <div className="max-w-3xl mx-auto p-6 border-2 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Add a Story</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className="input input-bordered w-full"
            placeholder="Enter your story title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

        {/* Text Area */}
        <div>
          <label className="block text-sm font-medium mb-1">Story</label>
          <textarea
            {...register("text", { required: "Story text is required" })}
            className="textarea textarea-bordered w-full"
            placeholder="Write your story here"
            rows="6"
          ></textarea>
          {errors.text && <p className="text-red-500 text-sm mt-1">{errors.text.message}</p>}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium mb-1">Upload Images</label>
          <input
            type="file"
            {...register("image", { required: "At least one image is required" })}
            className="file-input file-input-bordered w-full"
            multiple
          />
          {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn bg-green-500 text-white">
          Add Story
        </button>
      </form>
     
    </div>
  );
};
