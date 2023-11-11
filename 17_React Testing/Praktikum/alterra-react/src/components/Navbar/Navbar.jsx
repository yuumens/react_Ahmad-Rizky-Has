import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand">Simple Header</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto nav-pills custom-pills">
            <li className="nav-item">
            <NavLink exact='true' to="/" className="nav-link" style={({ isActive}) => {
              return {
                backgroundColor: isActive ? "#0d6efd" : "",
                color: isActive ? "white" : "#0d6efd",
              };
            }} aria-current="page">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact='true' to="/createproduct" className="nav-link" style={({ isActive}) => {
              return {
                backgroundColor: isActive ? "#0d6efd" : "",
                color: isActive ? "white" : "#0d6efd",
              };
            }}>Create Product</NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact='true' to="/register" className="nav-link" style={({ isActive}) => {
              return {
                backgroundColor: isActive ? "#0d6efd" : "",
                color: isActive ? "white" : "#0d6efd",
              };
            }}>Create Account</NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact='true' to="/login" className="nav-link" style={({ isActive}) => {
              return {
                backgroundColor: isActive ? "#0d6efd" : "",
                color: isActive ? "white" : "#0d6efd",
              };
            }}>Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
