import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Navbar.css";
const Navbar = () => {
    return (
        <div>
                   <nav>
        <NavLink to="/Home">HOME</NavLink>
        <NavLink to="/Aboutus">ABOUT US</NavLink>
        <NavLink to="/Contactus">CONTACT US</NavLink>
        <NavLink to="/Service">SERVICE</NavLink>
    
      </nav>
 
  


<button>ok</button>
<button>ok</button>
<button>ok</button>
<button>ok</button>
<button>ok</button>
<button>ok</button>
    
    
    
    
    
      
        </div>
    );
};

export default Navbar;