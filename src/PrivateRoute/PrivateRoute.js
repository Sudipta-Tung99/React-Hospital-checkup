import React, { useContext } from 'react'
import { Router } from 'react-location';
import { Navigate, Route, useLocation } from 'react-router-dom';
import { context1 } from '../App';

function PrivateRoute({children}) {
    const [auth,setauth] = useContext(context1);
    const location =useLocation();
    

   return(
       <div>
          
      
      {
        auth.email ? (
          children
        ) : (
          <Navigate
            to={ "/login"}
              state= {{ from: location }}/>
        
          
        )
}

    

       </div>
   )
        
}

export default PrivateRoute;
