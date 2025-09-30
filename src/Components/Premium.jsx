
import React from 'react'

const Premium = () => {
  return (
    <div className="m-10">
    <div className="card bg-base-300 rounded-box grid h-80 place-items-center">
        <h1>Silver Membership</h1>
        <ul>
            <li>- chat with other people</li>
            <li>- post your thoughts</li>
            <li>- 100 connections per day </li>
            <li>- Blue Tick </li>
            <li>- validation for 3 months </li>
        </ul>
        <button className='font-bold text-3xl'>Buy Silver</button>
    </div>
    <div className="divider"></div>
    <div className="card bg-base-300 rounded-box grid h-80 place-items-center">
      <h1>Gold Membership</h1>
      <ul>
      <li>- chat with other people</li>
      <li>- post your thoughts</li>
      <li>- 200 connections per day </li>
      <li>- Blue Tick </li>
      <li>- validation for 6 months </li>
      </ul>
      <button className='font-bold text-3xl'>Buy Gold</button>
        </div>
  </div>
  )
}

export default Premium