import React from "react";


function Skills(props){


    return(

        
      
            
            <div className="flex-col">

                        {
                              props.data.forEach(element => {
                                return(<h1>{element}</h1>);
                            })
                            }

                         
            </div>
           
         



    );
}

export default Skills;