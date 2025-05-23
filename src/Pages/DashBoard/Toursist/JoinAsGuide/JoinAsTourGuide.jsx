import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Authcontext } from '../../../../Provider/Authprovider';
import { axiosPublic, useAxiosPublic } from '../../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

export const JoinAsTourGuide = () => {
  const {user}=useContext(Authcontext)
  const axiosPublic=useAxiosPublic()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    axiosPublic.patch(`/application/${user?.email}`,data)
    .then(res=>{
      console.log(res.data);
      
        Swal.fire({
          title: "✅ Application Submitted Successfully!",
          icon: "success",
          draggable: true
        });
      
    })

  
  };
  return (
    <div>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-md shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Tour Guide Application</h2>
           {/* Email Input */}
           {/* <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={user?.email}
            readOnly
            {...register("email")}
            className="input input-bordered w-full"
            required
          />
        </div> */}
        {/* Application Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="applicationTitle">
            Application Title
          </label>
          <input
            type="text"
           
            {...register("applicationTitle", { required: "This field is required." })}
            className={`w-full px-4 py-2 border ${
              errors.applicationTitle ? "border-red-500" : "border-gray-300"
            } rounded-md `}
            placeholder="Enter a title for your application"
          />
          {errors.applicationTitle && (
            <p className="text-red-500 text-sm mt-1">{errors.applicationTitle.message}</p>
          )}
        </div>

        {/* Why wants to be a Tour Guide */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="reason">
            Why do you want to be a Tour Guide?
          </label>
          <textarea
           
            {...register("reason", { required: "This field is required." })}
            className={`w-full px-4 py-2 border ${
              errors.reason ? "border-red-500" : "border-gray-300"
            } rounded-md `}
            placeholder="Explain your motivation"
          />
          {errors.reason && (
            <p className="text-red-500 text-sm mt-1">{errors.reason.message}</p>
          )}
        </div>

        {/* CV Link */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" >
            CV Link
          </label>
          <input
            type="url"
         
            {...register("cvLink", {
              required: "This field is required.",
            
            })}
            className={`w-full px-4 py-2 border ${
              errors.cvLink ? "border-red-500" : "border-gray-300"
            } rounded-md `}
            placeholder="Provide a link to your CV"
          />
          {errors.cvLink && (
            <p className="text-red-500 text-sm mt-1">{errors.cvLink.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
    </div>
  )
}
