import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
      <form className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Image URL Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="url"
            placeholder="Your Image URL"
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
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="button"
          className="btn btn-primary w-full mt-4"
        >
          Register
        </button>
        <div className="divider">OR</div>
      
          {/*  SignUp With Google Button */}
          <button
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
