import React, { useState } from "react";
import UserCard from "./userCard";
import { BASE_URL } from "../utilis/constants";
import { addUser } from "../utilis/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const EditProfile = ({user}) => {
    const [firstName, setFirstName] = useState(user?.firstName );
  const [lastName, setLastName] = useState(user?.lastName);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [age, setAge] = useState(user?.age || "");
  const [gender, setGender] = useState(user?.gender);
  const [about, setAbout] = useState(user?.about );
  const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState(false);

  
    const saveProfile = async (e) => {
        e.preventDefault(); // stop form reload
        console.log("Saving profile...");
      
        try {
          const res = await axios.patch(
            BASE_URL + "/profile/edit", // updated endpoint
            { firstName, lastName, photoUrl, age, gender, about },
            { withCredentials: true }
          );
      
          console.log("Profile saved:", res.data.data);
          
          dispatch(addUser(res?.data?.data));
          setShowToast(true);
        setTimeout(()=>{
setShowToast(false)
          },2000)
        } catch (err) {
          console.error("Save profile error:", err.response?.data || err.message);
        }
      };
      




  return (
    <>
    <div className="flex justify-center my-10">
    <div className="flex justify-center mx-10">
      <div className="card bg-base-300 w-96 shadow-sm overflow-visible">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Edit Profile</h2>

          <div className=" form-control w-full max-w-xs my-2 space-y-3">
            {/* First Name */}
            <div>
              <label className="block text-sm mb-1">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Type here"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm mb-1">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="input input-bordered w-full mx-w-xs"
                placeholder="Type here"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sm mb-1">Photo URL</label>
              <input
                type="text"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                className="input input-bordered mx-w-xs"
                placeholder="Type here"
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm mb-1">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Enter your age"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm mb-1">Gender</label>
              <input
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Enter your gender"
              />
            </div>

            {/* About */}
            <div>
              <label className="block text-sm mb-1">About</label>
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="textarea textarea-bordered w-full"
                placeholder="Write something about yourself"
              ></textarea>
            </div>
          </div>

          <div className="card-actions mt-6">
            <button className="btn btn-primary w-full hover:scale-105 transition-transform duration-200" onClick={saveProfile}>
              saveProfile
            </button>
          </div>
        </div>
      </div>
    </div>
    <UserCard user = {{firstName,lastName,photoUrl,age,gender,about}}/>
    </div>
    {showToast && (
    <div className="toast toast-top toast-start">
  <div className="alert alert-success">
    <span>Profile save  successfully.</span>
  </div>
</div>
)}
    </>
    
  );
};

export default EditProfile;
