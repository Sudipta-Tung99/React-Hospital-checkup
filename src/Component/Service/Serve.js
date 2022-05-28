import React from 'react'
import { Card } from 'react-bootstrap';
import { IconName } from "react-icons/si";

function Serve(props) {
    const { title, describe } = props.serve
   
    return (
        <div style={{margin:"auto",display:'inline-block',  margin:'10px 20px'}}>
            <Card style={{ width: '18rem',padding:'15px' }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    
                    <Card.Text>
                        {describe}
                    </Card.Text>
                   
                </Card.Body>
            </Card>
        </div>
    )
}

export default Serve;

