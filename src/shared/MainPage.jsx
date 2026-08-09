import React from 'react'
import { useSelector } from 'react-redux';
import { login } from '../features/Auth/state/authSlice';

const MainPage = () => {

  const user  = localStorage.getItem("loggedInUser")
  // console.log(user)
  return (
    <div className="font-3xl ">Welcome { user}</div>
  )
}

export default MainPage;