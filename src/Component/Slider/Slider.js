import { Button, Card, Carousel, } from 'react-bootstrap';
import {BsAlarm,BsTelephoneForward,BsPinMap } from "react-icons/bs";
import React, { useEffect, useState } from 'react';
import './Slider.css';
import { ServiceApi } from '../Service/ServiceApi';
import Service from '../Service/Service';
import Footer from '../Footer/Footer';
import { Link , NavLink} from 'react-router-dom';

function Slider() {

  


    return (
        <div  >
            <div className='container'>
                <div className='containt'>
                    <h2>FullBody Checkup</h2>
                    <p data-aos="fade-up"> FullBody Checkup is a good way to assess your overall health. A full body checkup packages in Kolkata mainly include lipid profile test, cholesterol test, liver function test, complete hemogram test, kidney function test, blood sugar test, thyroid test and more. For a full body checkup, you just need to give your blood sample which takes only a few minutes. The sample is sent to the lab to perform all the tests included in your package. If you are healthy and under the age of 30 then you should get a health checkup in 2-3 years. If you are above 30 and healthy then getting a full body checkup in Kolkata once a year is advisable. For senior people, it is advisable to get a full body checkup in Kolkata at least once in every 6-months.

                    </p>
                    <form action="" className='btn'>

                        <Button variant="outline-primary">Get Appointment</Button>
                    </form>
                </div>
                <div className='slider'>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={process.env.PUBLIC_URL + '/image/img1.png'}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={process.env.PUBLIC_URL + '/image/img2.png'}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={process.env.PUBLIC_URL + '/image/img3.png'}
                                alt="Third slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={process.env.PUBLIC_URL + '/image/img5.png'}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={process.env.PUBLIC_URL + '/image/img6.png'}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>


            </div>
            <div className='box'>
            <div className='time'>
               
                <h3><BsAlarm></BsAlarm>   Opening Hour  </h3>

            </div>
            <div className='location'>
                <h3><BsPinMap></BsPinMap> Visit Our Location</h3>

            </div>
            <div className='contract'>
                
                <h3><NavLink to ='/contract' style={{ textDecoration: 'none' }}><BsTelephoneForward></BsTelephoneForward>   Contract  Us </NavLink>  </h3>

            </div>
            </div>
            <div className='service'>
                <div>
                    <img src={process.env.PUBLIC_URL + '/image/our-service.png'} alt="" />
                </div>
                <div className='service-1'>
                <h3>Our Service</h3><br />
               
                <Service></Service>
                   

              


               </div>
            </div>
            <Footer></Footer>

        </div>

    )
}

export default Slider;
