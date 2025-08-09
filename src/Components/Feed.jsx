import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BASE_URL } from '../utilis/constants'
import { addFeed } from '../utilis/feedSlice'
import UserCard from './UserCard'

const Feed = () => {
  const feed = useSelector((store) => store.feed)
  const dispatch = useDispatch()

  const getFeed = async () => {
    if (feed) return
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      })
      dispatch(addFeed(res.data))
    } catch (err) {
      console.error("Error fetching feed:", err)
    }
  }

  useEffect(() => {
    getFeed()
  }, [])

  return (
    feed && (
      <div className="flex justify-center my-6">
      <UserCard  user  = {feed[3]}/>
    </div>
    )
  
  )
}

export default Feed
