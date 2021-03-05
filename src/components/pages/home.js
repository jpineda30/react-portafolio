import React from "react";

function Home(){


    return(

        
        <div className="s1b content flex-row flex-center flex-wrap">
            
           
            <div className="about">
                <div className="main-pic"></div>

                <div className="flex-row flex-wrap social">

                <div className="main-pic2 "> </div>

                <div className=" s2 flex-row flex-center">
                      <i class="fab fa-facebook fa-2x has-text-white"></i> 
                </div>

                 <div className="s3 flex-row flex-center">
                    <i class="fab fa-instagram fa-2x has-text-white"></i>
                </div>
                 

                
                    

                </div>
            
            </div>

            <div className="bio flex-col flex-jcenter">
                
                <p className="title has-text-white is-size-6">Hello I'm </p>
                <h1 className="title is-size-2 my-3">Jose Pineda Esquer</h1>
                <p className="title is-size-4 has-text-white">Sap Bydesign consultant / Full stack developer</p>
                <p className="has-text-white mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis facere beatae assumenda quaerat ipsum. Praesentium quaerat maiores pariatur fugit explicabo. Et vel qui ex? Vitae deserunt dolores perspiciatis cumque temporibus.

                </p>
                

            </div>
          
            
        </div>    



    );
}

export default Home;