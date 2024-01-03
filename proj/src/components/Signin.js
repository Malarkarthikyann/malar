import React from 'react';
import './ContactForm.css';
import {Link} from 'react-router-dom';
const Signnin = () => {





  return (
    <center>
    
    <div class="Sign-in-form">
<h1> Sign In Now</h1>
<form class="form">
<input type="email" class="inputbox" placeholder="Enter the Email"></input>
<input type="password" class="inputbox" placeholder="Enter a password"></input>
<p><span><input type="checkbox"></input></span>I agree to the terms of services</p>


<Link to="/Home">
        <button type="button1" class="signin-button">SignIn</button>
      </Link>


</form>
</div>

</center>

  );
}

export default Signnin;

    
