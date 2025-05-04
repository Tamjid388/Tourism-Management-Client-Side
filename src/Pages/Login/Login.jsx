import React, { useContext, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Provider/Authprovider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useAxiosPublic } from '../../Hooks/useAxiosPublic';

export const Login = () => {
  const {user,signIn,forgetpass,loginWithGoogle}=useContext(Authcontext)
  const navigate=useNavigate()
  const location=useLocation()
  const emailRef=useRef()
  const axiosPublic=useAxiosPublic()
  const from=location.state?.from?.pathname || "/"
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
           Swal.fire("Login Successfull!");
           navigate(from,{replace:true})
           // ...
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           console.log(error);
         });
        }

        function handlePassReset() {
          const email = watch("email"); // Access email value from React Hook Form
          if (email) {
            console.log("Resetting password for:", email);
            forgetpass(email)
              .then(() => {
                Swal.fire(
                  "Password Reset",
                  "Check your email to reset your password",
                  "success"
                );
              })
              .catch((error) => {
                console.error("Error resetting password:", error);
                Swal.fire("Error", error.message, "error");
              });
          } else {
            Swal.fire("Error", "Please enter your email first", "warning");
          }
        }
        // Login With Google
        const handleGoogleSignIne = () => {
          loginWithGoogle().then((result) => {
            console.log(result.user);
            const userInfo = {
              name: result.user?.displayName,
              email: result.user?.email,
              photo: result.user?.photoURL
              
            };
            axiosPublic.post("/allusers", userInfo).then((res) => {
              console.log(res.data);
              console.log("signinWith google successfull");
              navigate("/");
            });
          });
        };  



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
            ref={emailRef}
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
          <button onClick={handlePassReset} className='text-sm underline'>Forget Password</button>

          <div className="divider">OR</div>
           {/*  SignUp With Google Button */}
           <button
            onClick={handleGoogleSignIne}
            type="button"
            className="btn btn-outline w-full mt-4"
          >
            SignUp With Google
          </button>

       

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
