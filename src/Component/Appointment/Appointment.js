import React, { useState } from 'react'
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Appointment.css';
import {Navigate} from 'react-router-dom';
import Booking from '../Booking/Booking';

function Appointment({}) {
    const [value, onChange] = useState(new Date());
  
   
    return (
        
       
        <div>
            <div className='head'>
                <div className='calender'>
                    <Calendar onChange={onChange} value={value} ></Calendar>
                </div >
                <div className='image'>
                <img src={process.env.PUBLIC_URL + './image/booking.png'} alt="" />
                </div>
                <div>
                   
                </div>

            </div>


 <Booking date={value}></Booking>


        </div>
    
    )
}

export default Appointment;
