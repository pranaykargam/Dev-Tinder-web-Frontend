import React from 'react';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const user = useSelector((store) => store.user);
 
  return (
    <div className="navbar bg-base-300 shadow-sm px-4">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">🧑‍💻 DevTinder</a>
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
              <a className="justify-between">
                Profile <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
