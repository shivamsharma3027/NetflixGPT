import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import appStore from '../utils/appStore';

const Header = () => {
  const user=useSelector(store=>store.user);
  const navigate=useNavigate();
   const handleSignOut=()=>{
    
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error");
    });
  }
  return (
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className=" w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
      <div className='flex justify-between'>
      
       {user&& <img className="my-2 mr-[20px] h-[50px] w-[50px] rounded-md" src="https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg" alt="user" />}
       {user &&<button onClick={handleSignOut} className='bg-gray-800 rounded-md  w-[80px] h-[50px] my-2 mr-[20px] font-semibold text-white hover:bg-gray-700'>{"Sign Out"}</button>}
      </div>
    
    </div>
  )
}

export default Header
