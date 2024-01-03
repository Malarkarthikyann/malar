import React from 'react';
import {useNavigate} from "react-router-dom";
import gify from '../assets/gify.gif';
function About()
{
    return(
        <div>
            <center><h1 className='pre'>About Us</h1></center><br></br>
            <center>
            <div className="class">
            <img src={gify} alt="gif"/>
          </div>
          </center>
            <h3>  Do students have access to the devices and connectivity they
need to engage?</h3><br></br><br></br>
            <p>
          
                         School systems should not overlook the importance of basic data: Do students even have
the tools to participate in remote learning? Information about whether students engage in
remote learning must sit alongside data about whether students have access to the technology
devices and stable internet necessary to participate. Such data should be broken out by student
subgroups and, ideally, include information about other barriers to participation, such as housing
or food insecurity.
The Wisconsin Department of Public Instruction, for example, has developed a Digital Equity
Dashboard with voluntary responses from families regarding their access to digital devices
and the internet in their homes. States participating in the Ed-Fi Alliance, such as Wisconsin,
have included new fields for such data in their student information systems to make it readily
accessible to districts and schools.
            </p>
            <br>
            </br>
            <br></br>
            <h3>Why should I shop at our website?</h3><br></br><br></br>
            <p>
            It allows you to walk away from the drudgery of grocery shopping and welcome an easy relaxed way of browsing and shopping for groceries. Discover new products and shop for all your food and grocery needs from the comfort of your home or office. No more getting stuck in traffic jams, paying for parking , standing in long queues and carrying heavy bags – get everything you need, when you need, right at your doorstep. Food shopping online is now easy as every product on your monthly shopping list, is now available online at bigbasket.com, India’s best online grocery store!
            </p>
            <br></br>
            <br></br>
            <h3>Where do we operate?</h3><br></br><br></br>
            <p>
            We currently offer our services in Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Noida, Mysore, Coimbatore, Vijayawada-Guntur, Kolkata, Ahmedabad-Gandhinagar, Lucknow-Kanpur, Gurgaon, Vadodara, Visakhapatnam, Surat, Nagpur, Patna, Indore and Chandigarh Tricity. city limits.
            </p><br></br><br></br>
        </div>
    )
}
export default About;