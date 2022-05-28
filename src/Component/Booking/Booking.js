import React, { useState } from 'react'


import './Booking.css';
import Book from'./Book';
import { Button, Form } from 'react-bootstrap';

function Booking({date}) {

    const [appoint,setappoint]= useState(false)
    const handle = ()=>{
        setappoint(!appoint)
    }
    const closepop =()=>{
        setappoint(false)
    }
   
    const book=[
        {
            id:1,
            img:"https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/checkups_you_shouldnt_miss_slideshow/getty_rf_photo_of_womans_consultation_w_doctor.jpg?resize=652px:*&output-quality=75",
            title: "Routine Physical Exam",
            dr:"Partha Roy"

        },
        {
            id:2,
            img:'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/checkups_you_shouldnt_miss_slideshow/thinkstock_rf_photo_of_bmi_calculator.jpg?resize=652px:*&output-quality=75',
            title:'Height and Weight',
            dr:'Argha Das'

        },
        {
            id:3,
            img:'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/checkups_you_shouldnt_miss_slideshow/getty_rf_photo_of_man_having_bp_checked.jpg?resize=652px:*&output-quality=75',
            title:'Blood Pressure',
            dr:'sagar Bera'
        }
    ]
  
    return (
        <div>
            <div className='bookTime'>
            <h2>Your Appoint date : {date.toDateString()} </h2>
            </div>
            <div className='book'>
                {
                    book.map(bk=><Book data={bk} handle={handle} key={bk.id}></Book>)
                }

            </div>
          
          <div>
                {appoint?
            <div className='mains'>
                <div className='pops'>
                    <div className='popups'>

                        <h6 onClick={closepop}>X</h6>
                    </div>
          <div className='forms'>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    </div>


</div>:''}

          </div>
            
        </div>
    )
}

export default Booking;
