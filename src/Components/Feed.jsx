import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BASE_URL } from '../utilis/constants';
import { addFeed, removeUserFromFeed } from '../utilis/feedSlice';
import UserCard from './UserCard';



const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return; // don't refetch if already loaded
    try {
      const res = await axios.get("/feed", { withCredentials: true });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error("Error fetching feed:", err);
    }
  };

  const handleInterested = async (userId) => {
    try {
      // Update backend
      await axios.post( BASE_URL/connection/interested/userId , {}, { withCredentials: true });

      // Remove from Redux
      dispatch(removeUserFromFeed({ _id: userId }));
    } catch (err) {
      console.error("Error sending interest:", err);
    }
  };

  const handleIgnore = async (userId) => {
    try {
      // Optional backend call for ignoring
      await axios.post(BASE_URL/connection/ignore/userId , {}, { withCredentials: true });

      // Remove from Redux
      dispatch(removeUserFromFeed({ _id: userId }));
    } catch (err) {
      console.error("Error ignoring:", err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

    // If feed is empty after loading
    if (!feed || feed.length === 0) {
      return <h1 className="text-center text-xl font-semibold mt-10">No new users found!!!</h1>;
    }

  const currentUser = feed?.[0]; // Always show first user

  return (
    currentUser && (
      <div className="flex justify-center my-6">
        <UserCard
          user={currentUser}
          onInterested={() => handleInterested(currentUser._id)}
          onIgnore={() => handleIgnore(currentUser._id)}
        />
      </div>
    )
  );
};

export default Feed;
