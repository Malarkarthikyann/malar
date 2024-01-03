import React from 'react';
import './HomePage.css';
import student from '../assets/student.png';
import {Link} from 'react-router-dom';
import gify from '../assets/gify.gif';


const HomePage2 = () => {
  return (
    <div className="home-container">
    
          <h2 className='h2'>Educators are powerful people doing important, life-changing things</h2>
          <p className='para'>AMPLYFYING AWESOMENESS</p>
          <br></br>
          <br></br>
          <p>A Student management is a very important part of university management, and according to the actual situation of the school work, student management system can not only improve the efﬁciency of staff and students, but can also be a time and resources saver. In this project, object oriented design methods are applied to the development of the system. The author will use Rational Rose UML modeling to complete the requirement analysis of the student management system, and the functionality and performance analysis.</p><br></br><br></br>
          <a href='/About' className="cta-button">
            VIEW DETAILS
          </a><br></br><br></br>
          <div className="class">
            <img src={student} alt="brake"/>
          </div>
        
          

         

    <body class="body2">
    <div class="Sign-up-form">


<center><h1> Sign Up Now</h1></center>
<form className='container'>
<input type="Fname" class="input-box" placeholder="Enter the  Student First Name" required></input>
<input type="Lname" class="input-box" placeholder="Enter the Student Last Name" required></input>
<input type="Lname" class="input-box" placeholder="Enter the Student Username " required></input>
<input type="Email" class="input-box" placeholder="Enter the Student Email" ></input>
<input type="phnumber" class="input-box" placeholder="Enter the PhoneNumber"></input>

<select class="input-box" placeholder="Select the department">
    <option value="">Select your Branch</option>
    <option value="BTECH">B.TECH</option>
    <option value="BTECH">B.E</option>
    <option value="BTECH">ARTS AND SCIENCE</option>
  
</select>

<select class="input-box" placeholder="Select the department">
    <option value="">Select your Department</option>
    <option value="BTECH">INFORMATION TECHNOLOGY</option>
    <option value="BTECH">ELECTRONICS AND ELECTIRICAL ENGINEERING</option>
    <option value="BTECH">COMPUTER AND SCIENCE ENGINEERING</option>
    <option value="BTECH">INTERNET OF THINGS</option>
    <option value="BTECH">CYBER SECURITY</option>
    <option value="BTECH">ELECTRONICS AND COMMUNICATION ENGINEERING</option>
    <option value="BTECH">AIDS</option></select>
<input type="Password" class="input-box" placeholder="Enter a password"></input>
<input type="Password" class="input-box" placeholder="Confirm password"></input>
<center><p><span><input type="checkbox"></input></span>I agree to the terms of services</p></center>
<Link to="/Signin">
        <button type="button1" class="signin-button">SignUp</button>
      </Link>

<hr></hr>
<center><p>Do you have an account ? 
<a href="/Signin">Sign in</a></p></center>


</form>
</div>
</body>

<div className="class">
            <img src={gify} alt="gif"/>
          </div>
  
    </div>
   
  );
};

export default HomePage2;