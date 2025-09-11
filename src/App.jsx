import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Body from "./Components/Body";
import Login from "./Components/Login";

import Profile from "./Components/Profile.jsx"

import Footer from "./Components/Footer";
import {Provider} from "react-redux";
import appStore from "./utilis/appStore";
import Feed from "./Components/Feed";
import EditProfile from "./Components/EditProfile";
import Connections from "./Components/Connections.jsx";
import Requests from "./Components/Requests";





function App() {
 
  return (
    
   <>
   <Provider store = {appStore}>
   <BrowserRouter basename="/">
   <Routes>
  <Route path="/" element = {<Body/>}>
  <Route path="/" element={<Feed/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/editprofile" element={<EditProfile/>}/>
  <Route path="/Connections"element={<Connections/>}/>
  <Route path="/requests"element={<Requests/>}/>

  </Route>
   </Routes>
   </BrowserRouter>
   </Provider>
  
   
  </>
  )
}
     
      
  


export default App

