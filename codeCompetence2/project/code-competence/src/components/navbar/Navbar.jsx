import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import pilarnav from '../../assets/img/pilar-nav.png'

const Navbar = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container-fluid mr-lg-3 ml-lg-5">
    <a href="#home" >
        <img
        src={pilarnav}
        alt="Bootstrap"
        width={70}
        height={70}
        />
    </a>
    <button
        className="navbar-toggler custom-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
      <span className="toggler-icon" />
      <span className="toggler-icon" />
      <span className="toggler-icon" />
    </button>
    <div className="collapse navbar-collapse p-2  m-2" id="navbarNav">
      <ul className="nav ms-auto nav-pills custom-pills">
        <li className="nav-item">
            <a href="#home"
            className="nav-link fw-bold"
            >
            Home
            </a>
        </li>
        <li className="nav-item">
            <a href="#about"
            className="nav-link fw-bold"
            >
            About
            </a>
        </li>
        <li className="nav-item">
            <Link to={`#services`}
            className="nav-link fw-bold"
            >
            Services
            </Link>
        </li>
        <li className="nav-item">
        <a href="#contact-us"
            className="nav-link fw-bold"
            >
            Contact Us
            </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar