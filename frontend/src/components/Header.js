import React from 'react'
import { NavLink } from "react-router-dom"
export const Header = () => {
  return (
    <div>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">HOME</a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

 {/* Left links */}
 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>

             
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/plugin">
                  plugin
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  SignUp
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
             
              
             
              
             
            </ul>
            {/* Left links */}

    <div class="collapse navbar-collapse" id="navbarNav">
    
    </div>
  </div>
</nav>
    </div>
  )
}
export default Header