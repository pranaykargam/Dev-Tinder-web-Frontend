// rafce

import React, { use, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utilis/userSlice'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { BASE_URL } from '../utilis/constants';



const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setLoginForm] = useState(true);
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
   
      console.log("Login success:", res.user);
      dispatch(addUser(res.data.user)); 
      return navigate("/"); // Navigate to home page on successful login
    } catch (error) {
    
      setError(error?.response?.data?.message || "Login failed. Please try again.");
    }
  };

  const handleSignUp = async () => {
    try{
const res = await axios.post(BASE_URL + "/signup", {
      firstName,
      lastName,
      emailId,
      password,
    },{withCredentials: true}); 
    console.log("Sign Up success:", res.data);
    dispatch(addUser(res.data.user));
    return navigate("/profile"); // Navigate to home page on successful signup
    }catch (err){
      setError(err?.response?.data?.message || "Sign Up failed. Please try again.");
    }
  }


  return (
      <div className="flex justify-center items-start py-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="card bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 w-96 shadow-xl rounded-2xl border border-gray-700 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
  
           <div className="card-body">
              <h2 className='card-title justify-center font-serif font-semibold text-indigo-500 hover:text-indigo-400'>
                {isLoginForm ?  "Login" : "Sign Up"}
                    </h2>
                      <div className="space-y-4">



          {!isLoginForm && (<> <fieldset className="border-2 border-black p-3 rounded-xl font-serif shadow-md transition-colors duration-300">
      <legend className="text-sm">First Name</legend>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="input input-bordered w-full rounded-md focus:ring-indigo-600"
        placeholder="Type here"
      />
    </fieldset>

    <fieldset className="border-2 border-black p-3 rounded-xl font-serif shadow-md transition-colors duration-300">
      <legend className="text-sm text-white font-medium">Last Name</legend>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="input input-bordered w-full"
        placeholder="Type here"
      />
    </fieldset>
  </>
)}







<fieldset className="border-2 border-black p-3 rounded-xl font-serif shadow-md
  transition-colors duration-300 "
>
  <legend className="text-sm text-white font-medium">Email Id</legend>
  <input
    type="text"
    value={emailId}
    onChange={(e) => setEmailId(e.target.value)}
    className="input input-bordered w-full"
    placeholder="Type here"
  />
</fieldset>


<fieldset className="border-2 border-black p-3 rounded-xl font-serif shadow-md
  transition-colors duration-300 "
>
  <legend className="text-sm text-white font-medium">password</legend>
  <input
    type="text"
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
  className="
    btn w-full py-6 text-base
    bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700
    text-white font-serif shadow-2xl
    hover:from-indigo-700 hover:via-purple-600 hover:to-pink-500
    hover:scale-105 transition-transform duration-300
    rounded-3xl
    focus:outline-none focus:ring-4 focus:ring-pink-500/60
    relative overflow-hidden
    animate-pulse-slow
  "
  onClick={isLoginForm ? handleLogin: handleSignUp}
>
  <span className="relative z-10">
  {isLoginForm ?  "Login" : "Sign Up"}
    </span>
  <span className="absolute top-0 left-0 w-full h-full rounded-3xl bg-white opacity-10 blur-md pointer-events-none"></span>
</button>
</div>

<p
  className="mt-6 text-center font-serif  font-medium text-indigo-500 hover:text-indigo-400  cursor-pointer select-none transition-colors duration-300"
  onClick={() => setLoginForm(value => !value)}
>
  {isLoginForm ? "New User? Sign Up Here" : "Already have an account? Login Here"}
</p>

        </div>
      </div>
    </div>
  );
};






    

  

export default Login

// export default Login



// export default Login
// export default Login
// export default Login
// export default Login
// export default Login
// export default Login
// export default Login


