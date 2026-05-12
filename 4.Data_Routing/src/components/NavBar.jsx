import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate = useNavigate();

  return (
    <nav className='flex items-center justify-between px-10 py-4 bg-black text-white shadow-md'>

      {/* Logo */}
      <div className="logo">
        <h3 className='text-2xl font-bold cursor-pointer tracking-wide'>
          Logo
        </h3>
      </div>

      {/* Nav Links */}
      <div className="navLinks flex items-center gap-8 text-lg font-medium">

        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive
              ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1'
              : 'hover:text-yellow-400 transition-all duration-300'
          }
        >
          Home
        </NavLink>

        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive
              ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1'
              : 'hover:text-yellow-400 transition-all duration-300'
          }
        >
          About
        </NavLink>

        <NavLink
          to='/service'
          className={({ isActive }) =>
            isActive
              ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1'
              : 'hover:text-yellow-400 transition-all duration-300'
          }
        >
          Service
        </NavLink>

        <NavLink
          to='/course'
          className={({ isActive }) =>
            isActive
              ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1'
              : 'hover:text-yellow-400 transition-all duration-300'
          }
        >
          Course
        </NavLink>

        {/* Buttons */}
        <div className='flex items-center gap-4 ml-4'>

          {/* Login */}
          <button
            className='border border-yellow-400 text-yellow-400 px-5 py-2 rounded-lg font-semibold cursor-pointer hover:bg-yellow-400 hover:text-black transition-all duration-300'
            onClick={() => navigate("/auth/login")}
          >
            Login
          </button>

          {/* Register */}
          <button
            className='bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold cursor-pointer hover:bg-yellow-300 transition-all duration-300 shadow-md'
            onClick={() => navigate("/auth/register")}
          >
            Register
          </button>

        </div>

      </div>
    </nav>
  )
}

export default NavBar