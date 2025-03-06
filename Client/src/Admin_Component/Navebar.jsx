import React from 'react'
import { FaBars, FaBell, FaDotCircle, FaSearch, FaUserCircle } from 'react-icons/fa'
import { LuGaugeCircle } from 'react-icons/lu'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from '../URL'

function  Navebar  ({OpenSidebar}) {
  //const navigate = useNavigate()
  const [UserName, setUserName] = useState();

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async (imageid) => {
    const result = await axios.get(`${BASE_URL}/get-UserName`)
    console.log(result)
    setUserName(result.data.data)
  };
//////////
const logOut = () => {
  window.localStorage.clear();
  window.location.href = "./Login";
};
  return (
    <header className='navbar BgcolorAdmin'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>

        <div >
        <button onClick={logOut} className="NavButton Link">
            Log Out
          </button>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
            { 
        UserName && 
        
        UserName?.map( (retbanner, index)=> {
          return(
           <div className={index===0 ? "carousel-item active ":"carousel-item"} key={retbanner._id} >
              <span>{retbanner && retbanner.fname}</span> </div> 
            );
          }) 
         }
        </div>
    </header>
  )
}
export default Navebar