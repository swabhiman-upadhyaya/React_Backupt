import React from 'react'
import Login from '../pages/Login'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='auth text-center'>
      AuthLayout
      <Outlet />
    </div>
  )
}

export default AuthLayout