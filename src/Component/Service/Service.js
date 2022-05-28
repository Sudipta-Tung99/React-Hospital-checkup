import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import Serve from './Serve';
import { ServiceApi } from './ServiceApi';

function Service() {
    const [service, setservice] = useState(ServiceApi);
    return (
        <div>
            {

                service.map(ser=><Serve serve={ser}></Serve>)
            }
            

            




        </div>
    )
}

export default Service;
