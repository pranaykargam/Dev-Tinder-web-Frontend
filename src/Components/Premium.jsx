
import React from 'react'
import { BASE_URL } from '../utilis/constants'
import axios from 'axios'

const Premium = () => {
  const handleBuyClick = async(type) => {
  const order = await axios.post(
    BASE_URL + "/payment/create",{
        membershipType: type,
    },{withCredentials: true}
  );
  

  // It should open the Razorpay Dialoge box

  const {amount,keyId,currency,notes,orderId } = order.data;

  const  options = {
    key:keyId,
    amount ,
    currency,
    name: "Dev Tinder",
    description: "connect to other developers",

    order_id: orderId, 
    prefill: {
        name: notes.firstName + ' ' + notes.lastName,
        email: notes.emailId,
        contact: "7680832566",
    },
    theme: {
        color: "#3399cc"
    },
};

  const rzp  = new Razorpay(options);
    rzp.open();

   
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
        <button   onClick ={()=> handleBuyClick ("Silver")}className='font-bold text-3xl'>Buy Silver</button>
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
      <button  onClick ={()=> handleBuyClick ("gold")} className='font-bold text-3xl'>Buy Gold</button>
        </div>
  </div>
  )
}
}

export default Premium
// export default Premium



