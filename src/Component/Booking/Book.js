import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import './Booking.css'

function Book({ data,handle }) {
   
    const {img,title,dr} = data
    return (
        <>
        <div className='data'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>k
                    <Card.Text className='card-text'>
                       {dr}
                    </Card.Text>
                    <Button onClick={handle} variant="primary">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
       
        </>
        
    )
}

export default Book;
