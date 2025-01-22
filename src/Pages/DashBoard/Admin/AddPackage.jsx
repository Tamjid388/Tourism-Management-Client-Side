import React from 'react'
import { useForm } from 'react-hook-form';
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

export const AddPackage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const axiosSecure=useAxiosSecure()




  
  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
        axiosSecure.post('/packages',data)
        .then(res=>{
          if(res.data.insertedId){
            Swal.fire("Package Added");
          }
        })

   
  };
  return (
    <div className="container mx-auto p-6">
    <h2 className="text-2xl font-semibold mb-4">Add Package</h2>
    
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Package Name */}
      <div>
        <label  className="block text-sm font-medium text-gray-700">Package Name</label>
        <input
          type="text"
          id="packageName"
          {...register('packageName', { required: 'Package name is required' })}
          className="input input-bordered w-full mt-1"
        />
        {errors.packageName && <p className="text-red-500 text-sm">{errors.packageName.message}</p>}
      </div>

      {/* Package Details */}
      <div>
        <label  className="block text-sm font-medium text-gray-700">Package Details</label>
        <textarea
          id="packageDetails"
          {...register('packageDetails', { required: 'Package details are required' })}
          className="textarea textarea-bordered w-full mt-1"
          rows="4"
        />
        {errors.packageDetails && <p className="text-red-500 text-sm">{errors.packageDetails.message}</p>}
      </div>

      {/* Number of Days */}
      <div>
        <label  className="block text-sm font-medium text-gray-700">Number of Days</label>
        <input
          type="number"
          id="days"
          {...register('days', { required: 'Number of days is required', min: { value: 1, message: 'Days must be at least 1' } })}
          className="input input-bordered w-full mt-1"
        />
        {errors.days && <p className="text-red-500 text-sm">{errors.days.message}</p>}
      </div>

      {/* Cost */}
      <div>
        <label  className="block text-sm font-medium text-gray-700">Cost</label>
        <input
          type="number"
          id="cost"
          {...register('cost', { required: 'Cost is required', min: { value: 0, message: 'Cost must be a positive number' } })}
          className="input input-bordered w-full mt-1"
        />
        {errors.cost && <p className="text-red-500 text-sm">{errors.cost.message}</p>}
      </div>

      {/* Location */}
      <div>
        <label  className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          id="location"
          {...register('location', { required: 'Location is required' })}
          className="input input-bordered w-full mt-1"
        />
        {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
      </div>

      {/* Image URL */}
      <div>
        <label  className="block text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="url"
          id="imageUrl"
          {...register('imageUrl', { required: 'Image URL is required' })}
          className="input input-bordered w-full mt-1"
        />
        {errors.imageUrl && <p className="text-red-500 text-sm">{errors.imageUrl.message}</p>}
      </div>

      {/* Submit Button */}
      <div>
        <button type="submit" className="btn bg-green-500 w-full">Add Package</button>
      </div>
    </form>
  </div>
  )
}
