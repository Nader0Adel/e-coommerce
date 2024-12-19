import React from 'react'
import NavBar from '../navBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

export default function Layout() {
  return <>
    <NavBar />
    <div className="pt-28 pb-20 container mx-auto">   
        <Outlet/>
    </div>
    <Footer/>
  </>
}
