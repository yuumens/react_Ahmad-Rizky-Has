import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Landingpage.css'

import LandingImage from '../assets/img/image 8.png'

const Landingpage = () => {
  const navigate = useNavigate();

  const handleCreateProductClick = () => {
    navigate('/createproduct');
  };

  return (
  <>
  <div className="getstarted">
    <div className="getstartedcontent">
      <h2>Better Solutions For Your Business</h2>
      <p>We are team of talented designers making websites with Bootstrap</p>
      <button
        className="button1"
        onClick={handleCreateProductClick}
      >
        Get Started
      </button>
      <button className="button2">Watch Video</button>
    </div>
    <img src={LandingImage} alt="" />
  </div>
  <div className="newsletter">
    <div className="newslettercontainer">
      <h2>Join Our Newsletter</h2>
      <p>
        Tamen quem nulla quae legam multos aute sint culpa legam noster magna
      </p>
      <form>
        <input className="input1" type="text" />
        <button className="button3">Subscribe</button>
      </form>
    </div>
  </div>
  <footer>
    <section className="footer_main_1">
      <div>
        <div className="footer_container_1">
          <div>
            <h1>ARSHA</h1>
            <p>
              A108 Adam Street <br />
              New York, NY 535022 United States <br />
            </p>
            <p>
              <strong>Phone:</strong> +1 5589 55488 55 <br />
              <strong>Email:</strong> info@example.com
            </p>
          </div>
        </div>
        <div className="footer_container_2">
          <div>
            <h2>Useful Links</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Term of service</li>
              <li>Privacy policy</li>
            </ul>
          </div>
        </div>
        <div className="footer_container_3">
          <div>
            <h2>Our Services</h2>
            <ul>
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Product Management</li>
              <li>Marketing</li>
              <li>Graphic Design</li>
            </ul>
          </div>
        </div>
        <div className="footer_container_4">
          <div>
            <h2>Our Social Networks</h2>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div>
              <span className="circle" />
              <span className="circle" />
              <span className="circle" />
              <span className="circle" />
              <span className="circle" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="footer_main_2">
      <div>
        <p>
          © Copyright <strong>Arsha.</strong> All Rights Reserved
        </p>
      </div>
      <div>
        <p>
          Designed by <span>BootstrapMade</span>
        </p>
      </div>
    </section>
  </footer>
</>

  )
}

export default Landingpage