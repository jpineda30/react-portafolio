import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Style.css";

function NavTabs() {
  const location = useLocation();

  return (
    <div>
      <div className="flex-col is-narrow menu-col ">
        <div>
          <figure className="p-1 pt-6 quarter flex-center">
            <div id="menu-img"></div>
          </figure>

          <div className="flex-col flex-center">
            <Link to="/" className=" menu1" href="">
              <i className="fas fa-house-user fa-1x has-text-light flex-col buttonOut"></i>
              <span className="smooth">Home</span>
            </Link>

            <Link to="/Portafolio" className=" menu1" href="./portafolio.html">
              <i className="fas fa-suitcase fa-1x has-text-light flex-col buttonOut"></i>
              <span className="smooth">Portafolio</span>
            </Link>

            <Link to="/resume" className=" menu1" href="">
              <i className="far fa-file-alt fa-1x has-text-light flex-col buttonOut  "></i>
              <span className="smooth">Resume</span>
            </Link>

            <Link
              href="https://github.com/jpineda30"
              className=" menu1"
              target="_blank"
            >
              <i className="fab fa-github fa-1x has-text-light flex-col buttonOut"></i>
              <span className="smooth">Github</span>
            </Link>

            <Link
              href="https://www.Linkedin.com/in/jose-pineda-esquer-3943b274/"
              target="_blank"
              className=" menu1"
            >
              <i className="fab fa-linkedin fa-1x has-text-light flex-col buttonOut"></i>
              <span className="smooth">Linkedin</span>
            </Link>

            <Link className=" menu1" to="/contact">
              <i className="far fa-address-book fa-1x has-text-light flex-col buttonOut"></i>
              <span className="smooth span">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavTabs;
