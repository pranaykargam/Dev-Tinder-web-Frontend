
import React, { use } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utilis/constants'
import { addConnections } from '../utilis/ConnectionsSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'




const Connections = () => {
    const connections = useSelector((store) => store.connections)
    const dispatch = useDispatch()

const fetchConnections = async()=>{
    try{
        const res = await axios.get(BASE_URL + "/user/connections",{
            withCredentials: true
        });
        console.log(res.data.data)
        dispatch(addConnections(res.data.data))

    }catch(err){
        console.error("Error fetching connections:", err)
    }
};

useEffect(() => {
    fetchConnections()
},  [])

if (!connections) {
    return <h1 className="text-bold text-2xl">Loading...</h1>;
  }
  
  if (connections.length === 0) {
    return <h1 className="text-bold text-2xl">No Connections Found</h1>;
  }
  
 



  return (


<div className="max-w-6xl mx-auto my-10 px-4">
<h1 className="font-serif text-3xl tracking-wide text-center text-white drop-shadow-md mb-8">
  Connections
</h1>


  <div className="grid gap-6  ">
  {connections.map((connection) => {
    const {  firstName, lastName, photoUrl, about,age ,gender} = connection;

    return (
      <div
      className="
      flex items-center justify-between
      bg-gradient-to-r from-[#1e293b] via-[#0f172a] to-[#020617]
      shadow-lg shadow-cyan-500/10 hover:shadow-xl hover:shadow-cyan-400/20
      rounded-3xl
      m-4 p-4
     w-[550px]

      border border-cyan-400/30 hover:border-cyan-100
      transition-all duration-300 ease-in-out
      transform hover:-translate-y-1 hover:scale-[1.02]
      text-white mx-auto
    "
      >
        {/* Left side - Profile Image */}
        <img
          alt={`${firstName} ${lastName}`}
          className="w-16 h-16 rounded-full object-cover border-2 border-indigo-200"
          src={photoUrl || "https://via.placeholder.com/150"}
        />

        {/* Right side - Details */}
        <div className="ml-4 flex flex-col">
  <h2 className="text-xl font-serif bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent drop-shadow-md tracking-wide">
    {firstName} {lastName}
  </h2>

  { age&& gender && <p>{age + " " + gender}</p> }
  <p className="text-xs text-gray-300 "> {about}</p>

</div>


      </div>
    );
  })}
</div>

  
</div>
  )
}

export default Connections