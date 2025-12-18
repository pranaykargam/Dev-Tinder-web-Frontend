import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utilis/constants";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utilis/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      return navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="navbar bg-base-300 shadow-sm px-2">
      <div className="flex-1">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold tracking-tight transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,100,150,0.8)]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-500 to-pink-500 animate-gradient">
            🧑‍💻 Dev
          </span>

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-500">
            Tinder
          </span>
        </Link>
      </div>

      {/* ✅ Only show this block if user is NOT null */}
      {user && (
        <div className="dropdown dropdown-end flex  gap-2">
          <p className="font-sans text-white/40 text-xs italic tracking-wide drop-shadow-sm flex items-center gap-2 ">
            👋 Hey
            <span className="font-serif text-base text-blue-400">
              {user.firstName}
            </span>
          </p>

          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="user photo" src={user.photoUrl} />
            </div>
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow-lg 
            bg-gradient-to-br from-indigo-200 via-violet-200 to-purple-300
            text-gray-900 
            rounded-lg w-52 mt-3 border border-violet-300 
            z-[1] transition-all duration-200"
          >
            <li>
              <Link
                to="/profile"
                className="flex font-serif items-center justify-between px-4 py-2 rounded-lg hover:bg-cyan-900/30 transition-colors duration-200"
              >
                Profile{" "}
                <span
                  className="ml-2 px-2 py-0.5 text-xs font-semibold rounded-full 
bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 
text-white shadow-sm"
                >
                  New
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/connections"
                className="flex items-center font-serif justify-between px-4 py-2 rounded-lg hover:bg-cyan-900/30 transition-colors duration-200"
              >
                Connections
              </Link>
            </li>

            <li>
              <Link
                to="/requests"
                className="flex items-center  font-serif justify-between px-4 py-2 rounded-lg hover:bg-cyan-900/30 transition-colors duration-200"
              >
                Requests
              </Link>
            </li>

            <li>
              <Link
                to="/Premium"
                className="flex items-center  font-serif justify-between px-4 py-2 rounded-lg hover:bg-cyan-900/30 transition-colors duration-200"
              >
                Premium
              </Link>
            </li>

            <li>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-400 transition-colors duration-200"
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
