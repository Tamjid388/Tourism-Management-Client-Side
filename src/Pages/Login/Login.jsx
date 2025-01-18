import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Provider/Authprovider';
import { useForm } from 'react-hook-form';

export const Login = () => {
  const {user,signIn}=useContext(Authcontext)
  const navigate=useNavigate()
  // razin@gmail.com pass1234
   const {
          register,
          handleSubmit,
          watch,
          reset,
          formState: { errors },
        } = useForm()

        const onSubmit=(data)=>{
         console.log(data);
         signIn(data.email,data.password)
         .then((userCredential) => {
           // Signed in 
           const user = userCredential.user;
           console.log(user);
           navigate("/")
           // ...
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           console.log(error);
         });
        }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
         {/* Email Input */}
         <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            {...register("email")}
            className="input input-bordered w-full"
            required
          />
        </div>

         
        {/* Password Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="Your Password"
            name="password"
            {...register("password")}
            className="input input-bordered w-full"
            required
          />
        </div>

          {/* Submit Button */}
          <button  type="submit" className="btn btn-primary w-full mt-4">
            Login
          </button>

          <div className="divider">OR</div>

       

          {/* Signup Link */}
          <div className="text-center mt-4">
            <p className="text-sm">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register Here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
