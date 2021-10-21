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
   <button>ok</button>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, nemo consequuntur repellendus sit, magnam culpa delectus perspiciatis corrupti laudantium nihil eveniet hic ad rem veritatis dolore commodi nam id odio.
   <button>ok</button>
   

    
    
    
    
    
      
        </div>
    );
};

export default Navbar;