import React from "react";

function Proyect(){


    return(

        
        <div className="Proyect flex-row flex-wrap">
            
            <div className="buttonp1 flex-col flex-center">
                <i  class="fab fa-github fa-2x has-text-light p-2"></i>
            </div>
            <div className="buttonp2 flex-col flex-center">
            <i  class="fas fa-play-circle fa-2x has-text-light p-2"></i>
            </div>
                <div style={{ backgroundImage: `url(${"img/proyect-img/01.bmp"})` }} className="proyect-info flex-col flex-acenter">
                    
                        <div className="filter pt-3 flex-col flex-acenter">
                            <div className="proyect-title">Test1</div>
                            <div className="proyect-title">This is a test</div>
                        </div>

                </div>
           
        </div>    



    );
}

export default Proyect;