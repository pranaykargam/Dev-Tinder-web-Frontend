import React from 'react'

export const UserCard = ({ user }) => {
  const { firstName, lastName, about, age, gender, photourl } = user;

  return (
    <div className="card bg-base-100 w-96 shadow-xl border border-gray-300 rounded-lg overflow-hidden">
      <figure className="h-74 bg-gray-100"> 
        <img
          src={photourl}
          alt="photo"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName} {lastName}</h2>
        {age && gender && <p className="text-gray-600">{age} • {gender}</p>}
        <p className="text-gray-700">{about}</p>
        <div className="flex gap-3 mt-4">
          <button className="flex-1 px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition duration-200">
            Ignore
          </button>
          <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
            Interested
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
