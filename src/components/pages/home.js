import React from "react";

function Home(){


    return(

        
        <div className="s1b content flex-row flex-center flex-wrap">
            
           
            <div className="about">
                <div className="main-pic"></div>

                <div className="flex-row flex-wrap social">

                <div className="main-pic2 "> </div>

                <a  href= "https://www.facebook.com/jose.pineda.9862" className=" s2 flex-row flex-center facebook">
                      <i className="fab fa-facebook fa-2x has-text-white"></i> 
                </a>

                 <a href= "https://www.instagram.com/pepo_pics/" className="s3 flex-row flex-center instagram">
                    <i className="fab fa-instagram fa-2x has-text-white "></i>
                </a>
                 

                
                    

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