import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../Component/Navbar/Navbar'
import { Footer } from '../../Component/Footer/Footer'

export const MainLayout = () => {
  return (
    <div >


        <Navbar></Navbar>

        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
