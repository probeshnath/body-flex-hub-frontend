import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/shared/Footer'

const MainLayout = () => {
  return (
    <div>
        <h2>MainLayout</h2>
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout