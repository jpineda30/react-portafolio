import React from "react";


function Proyect(props){


    return(

        
        <div className="Proyect flex-row flex-wrap">
            
            <div className="buttonp1 flex-col flex-center">
                <a  href = {props.data.repository} target="_blank" className="fab fa-github fa-2x has-text-light p-2"></a>
            </div>
            <div className="buttonp2 flex-col flex-center">
            <a  href={props.data.url} className="fas fa-play-circle fa-2x has-text-light p-2"></a>
            </div>
                <div style={{ backgroundImage: `url(${"img/proyect-img/01.bmp"})` }} className="proyect-info flex-col flex-acenter">
                    
                        <div className="filter pt-3 flex-col flex-acenter">
                            <div className="proyect-title">{props.data.name}</div>
                            <div className="proyect-description">{props.data.description}</div>
                        </div>

                </div>
           
        </div>    



    );
}

export default Proyect;