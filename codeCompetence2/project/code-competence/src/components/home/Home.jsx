import React from 'react'
import './Home.css'
import pilarhome from '../../assets/img/pilar-home 1.png' 
import Contact from '../contact/Contact';
import About from '../about/About';

const Home = () => {
return (
    <>
    <div id="home">
    <div className="container">
        <div className="home-page ">
        <img src={pilarhome} alt="pilar-home" />
        <p className="text-light mt-sm-3">Let's Make Awesome Project With Us</p>
        <div className="col-md-10">
            <a href="#contact-us">
                <button type="button" className="start-button fw-bold">
                    GET STARTED
                </button>
            </a>
        </div>
    </div>
    </div>
    </div>
    <About/>
    <Contact/>
    </>
  );
};

export default Home