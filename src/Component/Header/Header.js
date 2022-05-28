import React, { useContext, useState } from 'react'
import './Header.css';
import { AiFillHome } from "react-icons/ai";
import { MdOutlineAppRegistration } from "react-icons/md";
import { BsChatRightTextFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { HiUserCircle } from "react-icons/hi";
import { Button, Form } from 'react-bootstrap';
import { Cursor } from 'react-bootstrap-icons';
import { context } from '../../App';
import { click } from '@testing-library/user-event/dist/click';
import { Link } from 'react-router-dom';
function Header() {
    // const [popup, setpopup] = useState(false)
    // const handleclick = () => {
    //     setpopup(!popup)

    // }
    // const closepopup = ()=> {  
    //     setpopup(false)
        
    // }
    // const click=()=>{
    //     setpopup(!popup)
        
    // }

    // const handlesubmit= ()=>{

    // }
   





    return (
        <div>
            <div className='header'>
                <div className='header-1'>
                    <img src={process.env.PUBLIC_URL + '/images.png'} alt="" />
                    <a href="/">Health Camp</a>
                </div>
                <div className='header-2'>
                    <Link to="/"><AiFillHome></AiFillHome> Home</Link>
                    <Link to='/Appointment'><MdOutlineAppRegistration></MdOutlineAppRegistration> Appointment</Link>
                    <Link to="/about"><BsChatRightTextFill></BsChatRightTextFill> About</Link>
                    <Link to="/contract"><BiPhoneCall></BiPhoneCall> Contract Us</Link>
                    <Link to="/login">  <HiUserCircle></HiUserCircle> Sine In</Link>
                   
                </div>
            </div>
          


            {/* <div>
                {popup?
            <div className='main'>
                <div className='pop'>
                    <div className='popup'>

                        <h6 onClick={closepopup}>X</h6>
                    </div>
                   
                </div>


            </div>:''}
            </div> */}


        </div>
    )
}

export default Header;
