import React from 'react'
import { useSelector } from 'react-redux';
import { login } from '../features/Auth/state/authSlice';
import Hero from './Hero';

const MainPage = () => {

  const user = JSON.parse(localStorage.getItem("loggedInUser"))
  return (
    <>
      <Hero />
    </>
  )
}

export default MainPage;