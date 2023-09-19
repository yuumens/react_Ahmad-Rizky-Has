import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a href="#">Simple Header</a>
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
      <ul className="navbar-nav ms-auto nav-pills">
        <li className="nav-item">
          <a
            className="nav-link text-primary fw-light"
            aria-current="page"
            href="createAccount.html"
          >
            Create Account
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white" href="createAccount.html">
            Create Product
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-primary fw-light" href="#">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-primary fw-light" href="#">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-primary fw-light" href="#">
            About
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar
