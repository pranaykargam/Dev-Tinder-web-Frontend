import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../utilis/constants';
import { removeUserFromFeed } from '../utilis/feedSlice';
import { useDispatch } from 'react-redux';

const UserCard = ({ user }) => {
  const { _id,firstName, lastName, about, age, gender, photoUrl } = user;
  const dispatch =  useDispatch();


const handleSendRequest = async (status, userId) => {
  try{
        const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + userId, {}, 
          {withCredentials: true,}
        )
        dispatch(removeUserFromFeed(userId)); // Remove user from feed after sending request
  }catch (err){

  }
}


  return (
    <div className="card bg-base-100 w-96 shadow-2xl  mt-6  border-gray-300 rounded-lg overflow-hidden">
      <figure className="h-74 bg-gray-100"> 
        <img
          src={photoUrl}
          alt="photo"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-serif bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent drop-shadow-md tracking-wide">{firstName} {lastName}</h2>
        {age && gender && <p className="text-gray-600">{age} • {gender}</p>}
        <p className="text-xs text-gray-300 ">{about}</p>
        <div className="flex gap-3 mt-4">
        <div className="flex gap-3 mt-4">
  <button className="flex-1 px-4 py-2 rounded-full border border-red-500 text-red-500 font-medium 
                     hover:bg-red-500 hover:text-white hover:shadow-md 
                     transform hover:scale-105 transition-all duration-200" onClick={()=> handleSendRequest("ignored",_id)}>
    Ignore
  </button>

  <button className="flex-1 px-4 py-2 rounded-full font-medium text-white 
                     bg-blue-500 hover:bg-blue-600 hover:shadow-md 
                     transform hover:scale-105 transition-all duration-200" onClick={()=> handleSendRequest("interested",_id)}>
    Interested
  </button>
</div>

        </div>
      </div>
    </div>
  );
}

export default UserCard;
