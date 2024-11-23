import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-warning">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">Navbar</a>
          <div className="d-flex align-items-center">
            <ul className="navbar-nav d-flex mb-0">
              <li className="nav-item">
                <a className="nav-link active"  href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" >Disabled</a>
              </li>
            </ul>
            <form className="d-flex ms-2">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

