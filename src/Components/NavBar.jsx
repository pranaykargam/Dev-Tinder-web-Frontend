import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../utilis/constants';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../utilis/userSlice';




const NavBar = () => {
  const user = useSelector((store) => store.user);
  const navigate  = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async()=> {
     try{
       await axios.post(BASE_URL + "/logout", {},
        {withCredentials: true}
        )
        dispatch(removeUser())
        return navigate("/login");
     }catch(err){
      console.log(err);
     }
  }
 
  return (
    <div className="navbar bg-base-300 shadow-sm px-4">
      <div className="flex-1">
        <Link to = "/" className = "btn btn-ghost text-xl">🧑‍💻 DevTinder </Link>
      </div>

      {/* ✅ Only show this block if user is NOT null */}
      {user &&  (
        <div className="dropdown dropdown-end flex  gap-2">
          <p className="font-medium">Welcome, {user.firstName}</p>

          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="user photo" src={user.photoUrl}  />
            </div>
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-3 z-[1]"
          >
            <li>
  <Link
    to="/profile"
    className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-cyan-900/30 transition-colors duration-200"
  >
    Profile <span className="badge badge-accent ml-2">New</span>
  </Link>
</li>

<li>
  <Link
    to="/connections"
    className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-cyan-900/30 transition-colors duration-200"
  >
    Connections <span className="badge "></span>
  </Link>
</li>

<li>
  <Link
    to="/requests"
    className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-cyan-900/30 transition-colors duration-200"
  >
     Requests <span className="badge "></span>
  </Link>
</li>

<li>
  <button
    onClick={handleLogout}
    className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-500/20 transition-colors duration-200"
  >
    Logout
  </button>
</li>

          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
