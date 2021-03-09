import React from "react";
import Header from "../header";
import Proyect from "../proyect";
import MyData from "../../json/resume.json";

function Portafolio(){


    return(

        
        <div className="s1b contents flex-row flex-center flex-wrap flex-between">
            <Header/>
            <div className="Proyects flex-row flex-center flex-wrap">
                {
                    MyData.proyects.map((proyect)=>{
                        let add = <Proyect data={proyect}/>
                        return add
                    })
                }

            </div>
        </div>    



    );
}

export default Portafolio;