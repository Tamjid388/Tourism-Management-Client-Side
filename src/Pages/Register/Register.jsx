import { useContext } from "react"
import { useForm } from "react-hook-form"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Authcontext } from "../../Provider/Authprovider"


export const Register = () => {
    const {createUser,loginWithGoogle}=useContext(Authcontext)
    const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data)
        createUser(data.email,data.password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
          });
    }

    const handleGoogleSignIne=()=>{
        loginWithGoogle()
        .then(result=>{
            console.log(result.user);
            console.log(result.user);
            navigate("/")

        }
    )

    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium mb-1"
         >Name</label>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            {...register("name")}
            className="input input-bordered w-full"
            required
          />
        </div>

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

        {/* Image URL Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="url"
            name="url"
            placeholder="Your Image URL"
            {...register("url")}
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
        <button
          type="submit"
          className="btn btn-primary w-full mt-4"
        >
          Register
        </button>
        <div className="divider">OR</div>
      
          {/*  SignUp With Google Button */}
          <button
          onClick={handleGoogleSignIne}
          type="button"
          className="btn btn-outline w-full mt-4"
        >
          SignUp With Google
        </button>
         {/* Already Have an Account */}
       <div className="text-center mt-4">
          <p className="text-sm">
            Already have an account?{'   '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Go to Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  </div>
  )
}
