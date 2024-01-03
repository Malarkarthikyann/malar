import './App.css';
import Navbar from './components/Navbar';
import HomePage2 from './components/HomePage';
import About from './components/About';
import {Route,Routes} from 'react-router-dom';
import Signnin from './components/Signin';
import Faq from './components/FAQ';
import Terms from './components/Terms';
import Private from './components/Privacy';


import ContactForm from './components/ContactForm';

import Footer from './components/Footer';


function App() {
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route index element={<HomePage2/>}/>
      <Route path='/Home'element={<HomePage2/>}/> 
      <Route path='/Signin'element={<Signnin/>}/> 

      <Route  path='/Faq'element={<Faq/>}/>
      <Route  path='/terms'element={<Terms/>}/>
    
      <Route  path='/Contact'element={<ContactForm/>}/>
      <Route path='/About'element={<About/>}/>
       <Route path='/private'element={<Private/>}/>
      </Routes>
    
      
      <Footer/>
    
      
    </div>
  );
}

export default App;