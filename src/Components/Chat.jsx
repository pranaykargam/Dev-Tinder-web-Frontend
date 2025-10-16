import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createSocketConnection } from '../utilis/socket';
import { BASE_URL } from '../utilis/constants';


const Chat = () => {
    const {targetUserId} = useParams();
    const[messages,setMessages] = useState ([]);
    const [newMessage,setNewMessage] = useState ("");
    const user  = useSelector((store) => store.user); // this gives logged in user details from redux store
    const userId = user?._id; 

    const fetchChatMessages = async() => {
        const chat  = await axios.get(BASE_URL + "/chat/" + targetUserId,{
            withCredentials: true,
        })
        console.log(chat.data.messages);
    

       const chatMessages = chat?.data?.messages.map((msg) => {
        const {senderId, text} = msg;
        return{
            firstName: senderId?. firstName,
            lastName: senderId?. lastName,
            text: text,
        };
    });
    setMessages(chatMessages);
       };
    

     useEffect(() => {
        if(!userId ) {
            return;
        }
// As soon as the page loaded, the socket connection is made and joinchat event is emmited.
    const socket = createSocketConnection();
    socket.emit("joinChat", {
        firstName: user.firstName,
        userId,
        targetUserId});
    const roomId = [userId,targetUserId].join("_");
    socket.join(roomId);

    return () => {
        socket.disconnect();
    }
}, [userId,targetUserId]);

const sendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("message", {
        firstName: user.firstName,
        lastName: user.lastName,
        userId,
        targetUserId,
        text: newMessage,
        });
    };

    // to listen to the messageReceived event from the server 
    socket.on("messageReceived", ({firstName,lastName, text}) => {
        console.log(firstName + ": " + text);
        setMessages((messages)=> [...messages, {firstName,lastName, text}]);
    })


  return (
    <div className="w-3/4 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col">
        <h1 className="p-5 border-b border-gray-600">Chat</h1>
        <div className="flex-1 overflow-scroll p-5 "> 
             { messages.map((msg,index)=>{
                   return (
            <div key = {index} className="chat chat-start">
              <div className="chat-header">
                {`${msg.firstName} ${msg.lastName}`}
              <time className="text-xs opacity-50">2 hours ago</time>
              </div>
             <div className="chat-bubble">{msg.text}</div>
            <div className="chat-footer opacity-50">Seen</div>
            </div>
         )})}
            </div>
        <div className="p-5 border-t border-gray-600 flex items-center gap-2">
            <input
            value={newMessage}
            onChange={(e)=> setNewMessage(e.target.value)}
            className="flex-1 border border-gray-500 text-white rounded p-2"></input>
            <button onClick={sendMessage}
             className="btn btn-secondary">Send</button>
        </div>
        </div>
  )
}

export default Chat;

