// rafce

import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { useEffect } from 'react';  
import {addUser} from '../utilis/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utilis/constants';
import { useSelector } from 'react-redux';





const Body = () => {
  const dispatch = useDispatch();
  const navigagate = useNavigate();

const user = useSelector((store) => store.user);
   const fetchUser = async ()=>{
        if (user) return;
          try{
             const res = await axios.get(BASE_URL + "/profile/view",{
             withCredentials: true
});
dispatch (addUser(res.data));
    }catch (err){
       if (err.status=== 401){
          navigagate("/login");
      }
      console.log(err);
    }
  }

  useEffect(()=> {
    fetchUser();
  },[])
  return (
    <div className="flex flex-col min-h-screen">
    <NavBar />
    {/* Main content grows to push footer down */}
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
  
  )
}

export default Body