import React from 'react'
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      </>
  )
}

export default MainLayout;