
import './App.css';
import Header from './Component/Header/Header';
import Slider from './Component/Slider/Slider';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appointment from './Component/Appointment/Appointment';
import Login from './Component/Login/Login';
import { createContext, useState } from 'react';
import About from './Component/About/About';
import ContractUs from './ContractUs/ContractUs';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const context1 = createContext()


function App() {
  const [auth, setauth] = useState({})

  return (
    <div>
    
      <context1.Provider value={[auth, setauth]}>
        
        <Router>
        <Header></Header>
          <Routes>
            <Route path="/" element={<Slider />} />
            <Route path="/Appointment" element={<PrivateRoute children={<Appointment />}></PrivateRoute>  }/>
            <Route path="/contract" element={<ContractUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </context1.Provider>

    </div>
  );
}

export default App;
