/* Login.jsx */

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>

      <div className='bg-white w-full max-w-md p-8 rounded-2xl shadow-xl'>

        <h2 className='text-3xl font-bold text-center mb-2'>
          Welcome Back
        </h2>

        <p className='text-gray-500 text-center mb-8'>
          Login to continue
        </p>

        <form className='space-y-5'>

          <div>
            <label className='block mb-2 font-medium'>
              Email
            </label>

            <input
              type='email'
              placeholder='Enter your email'
              className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black'
            />
          </div>

          <div>
            <label className='block mb-2 font-medium'>
              Password
            </label>

            <input
              type='password'
              placeholder='Enter your password'
              className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black'
            />
          </div>

          <button className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300'>
            Login
          </button>

        </form>

        <p className='text-center text-gray-500 mt-6'>
          Don't have an account
          <span
          onClick={() => navigate("/auth/register")}
          className='text-black font-semibold cursor-pointer ml-1'>
            Register
          </span>
        </p>

      </div>

    </div>
  )
}

export default Login