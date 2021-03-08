import React from "react";


function TitleValue(props){


    return(

        
       
            
            <div className="flex-row">
                        <h1 className="bold2 mr-1 is-size-6">{props.name} </h1><h1 className="is-size-6 has-text-white">{props.data}</h1>
            </div>
           
         



    );
}

export default TitleValue;