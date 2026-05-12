import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Home from '../pages/Home'
import Footer from './../components/Footer';

const MainLayout = () => {
  return (
    <div>
      
      <div className="navBar">
        <NavBar />
        <Outlet />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout