import React from 'react';
import './ContactForm.css';
import {Link} from 'react-router-dom';
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
}
  return (
    <center>
    
    <form className='form12'>

  <center><h3 className='pre'>Contact Form</h3></center>
			<label for="first_name">First Name</label>
		<input name="first_name" type="text" class="input-bo" required placeholder="John"/>
		<br></br>
		<label for="last_name">Last Name</label>
		<input name="last_name" type="text"class="input-bo" required placeholder="Doe"/>
		<br></br>
		<label for="email">Email</label>
		<input name="email" type="email" class="input-bo"required placeholder="you@domain.com"/>
		<br></br>		<label for="message">Message</label><br></br>
		<textarea name="message" cols="30" rows="10"class="input-bo" placeholder="Enter your message here ..." required> </textarea>
		<div class="center">
    <Link to="/Home">
        <button type="button1" class="signin-button">Contact Us</button>
      </Link>

		</div>
		
  </form>
  </center>
    
  );
}
export default ContactForm;