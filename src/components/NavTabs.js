import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  
  const location = useLocation();

  return (
    
  

      <div className="menus flex-row flex-wrap">

        
        <Link to="/" className={location.pathname === "/"  ? "main-button s1" : "main-button s1"}>
         
          <i className="fas fa-house-user"></i>
          <h1>HOME</h1>
         
        </Link>
        

        <Link to="/Portafolio" className={location.pathname === "/Portafolio" ? "main-button s2": "main-button s2"}>
         
          <i className="fas fa-suitcase"></i>
          <h1>PORTAFOLIO</h1>
           
      
        </Link>
      

        <Link to="/Resume" className={location.pathname === "/Resume" ? "main-button s3": "main-button s3"}>
        
        <i className="far fa-file-alt"></i>
          <h1>RESUME</h1>
      
        </Link>

        <a href="https://www.linkedin.com/in/jose-pineda-esquer-3943b274/" className="main-button s4" target="_blank">
        
        <i className="fab fa-linkedin"></i>
          <h1>LINKEDIN</h1>
      
        </a>

        <a href="https://github.com/jpineda30" className= "main-button s5 menu-bottom" target="_blank">
        
        <i className="fab fa-github"></i>
          <h1>GITHUB</h1>
      
        </a>

        <Link to="/Contact" className={location.pathname === "/Contact" ? "main-button s6 menu-bottom": "main-button s6 menu-bottom"}>
        
        <i className="far fa-address-book"></i>
          <h1>CONTACT</h1>
      
        </Link>

      </div>

   
  
  );
}

export default NavTabs;
