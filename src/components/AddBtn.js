import React from "react";

function AddBtn(props){


    return(

        
        <div className="button flex-row flex-center" data-name={props.name}>
           
           
                <i className="fas fa-plus"></i>
                <p className=" is-size-6 has-text-white">Create</p>
            
        </div>    



    );
}

export default AddBtn;