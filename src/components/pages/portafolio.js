import React from "react";
import Header from "../header";
import Proyect from "../proyect";

function Portafolio(){


    return(

        
        <div className="s2b content flex-row flex-center flex-wrap flex-between">
            <Header/>
            <div className="Proyects flex-row flex-wrap">
             <Proyect/>
             <Proyect/>
             <Proyect/>
             <Proyect/>
             <Proyect/>
             <Proyect/>
             <Proyect/>
             <Proyect/>
             <Proyect/>
             <Proyect/>
            </div>
        </div>    



    );
}

export default Portafolio;