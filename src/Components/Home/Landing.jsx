import React from "react";
import Nav from "../Nav/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Aboutus from "../pages/Aboutus";
import Service from "../pages/Service";
import Contactus from "../pages/Contactus";
import "./Landing.css"
const Landing = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/Aboutus">
            <Aboutus />
          </Route>
          <Route path="/Service">
            <Service />
          </Route>
          <Route path="/Contactus">
            <Contactus />
          </Route>  
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
      </Router>
    
      <button>login</button>
      <button>login</button>
      <button>login</button>
      
      
    </div>
  );
};

export default Landing;
