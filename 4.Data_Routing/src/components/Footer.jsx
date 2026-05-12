import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-10 mt-10'>

      <div className='max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-10'>

        {/* Logo Section */}
        <div>
          <h2 className='text-3xl font-bold mb-3'>Logo</h2>
          <p className='text-gray-400 leading-7'>
            Building modern web experiences with clean and responsive UI
            designs using React and Tailwind CSS.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-2xl font-semibold mb-4'>Quick Links</h3>

          <ul className='space-y-3 text-gray-400'>
            <li className='hover:text-yellow-400 cursor-pointer transition-all duration-300'>
              Home
            </li>

            <li className='hover:text-yellow-400 cursor-pointer transition-all duration-300'>
              About
            </li>

            <li className='hover:text-yellow-400 cursor-pointer transition-all duration-300'>
              Services
            </li>

            <li className='hover:text-yellow-400 cursor-pointer transition-all duration-300'>
              Courses
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className='text-2xl font-semibold mb-4'>Contact</h3>

          <div className='text-gray-400 space-y-3'>
            <p>Email: example@gmail.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Location: India</p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className='border-t border-gray-700 mt-8 pt-5 text-center text-gray-500 text-sm'>
        © 2026 All Rights Reserved | Designed with React & Tailwind CSS
      </div>

    </footer>
  )
}

export default Footer