// rafce

import React, { use, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utilis/userSlice'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { BASE_URL } from '../utilis/constants';



const Login = () => {
  
  const [emailId, setEmailId] = useState("virat@gmail.com");
  const [password, setPassword] = useState("Virat@1234");
  const dispatch  = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null); // State to hold error messages

  const handleLogin = async () => {
    try {
      const res = await axios.post(BASE_URL + "/login", {
        emailId,
        password,
      },
       {withCredentials: true});  // added
   
      console.log("Login success:", res.data);
      dispatch(addUser(res.data.user)); //  you have an action creator named addUser
      return navigate("/"); // Navigate to profile page after successful login
    } catch (error) {
    
      setError(error?.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-start  py-20 bg-base-200">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <div className="space-y-4">
            <fieldset className="border border-base-300 p-3 rounded-md">
              <legend className="text-sm text-base-content">Email Id</legend>
              <input
                type="text"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Type here"
              />
            </fieldset>

            <fieldset className="border border-base-300 p-3 rounded-md">
              <legend className="text-sm text-base-content">Password</legend>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Type here"
              />
            </fieldset>
          </div>
<p className='text-red-500'>{error}</p>
          <div className="card-actions mt-6">

            <button

              className="btn btn-primary w-full hover:scale-105 transition-transform duration-200"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};






    

  

export default Login
