import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../Component/Navbar/Navbar'
import { Footer } from '../../Component/Footer/Footer'
import { ScrollToTop } from '../../Component/ScrollToTop/ScrollToTop'

export const MainLayout = () => {
  return (
    <div >
<ScrollToTop></ScrollToTop>

        <Navbar></Navbar>

        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
