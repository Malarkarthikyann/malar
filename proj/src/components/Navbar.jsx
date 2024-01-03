import React from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';
function Navbar()
{
    return(
        <div>
    <nav class="navbar">
          <a href="#" class="logo">SMS SYSTEM</a>
          <ul class="nav-list">
            <li><a href="/Home">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="Contact">Contact</a></li>
            <li><a href="Faq">FAQ</a></li>
          </ul>

          <div>
           
          <Link to="/Signin">
        <button type="button1" class="signin-button">SignIn</button>
      </Link>
          </div>
      </nav> 
          </div>
    );
}
export default Navbar;