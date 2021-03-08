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
                <div className="about-text">
                    <p className="has-text-white mt-3">
                        My name is Jose Pineda Esquer, I’m a software engineer from Los Mochis Sinaloa living in Mexico City. I'm a Sap Business Bydesign consultant and developer.

                    </p>

                    <p className="has-text-white mt-3">I have 8 years of experience implementing and managing Sap systems, I worked as a consultant for about four years with SAP ECC 6 in the purchasing(MM), sales(SD) and production(PP) modules. Now I been working as a consultant for Sap business by design implementing the whole suit, and I have 2 years of experience developing solutions and add-ons for Business ByDesign.</p>
                    
                    <p className="has-text-white mt-3">
                        Im looking forward to learn about web development so I can expand my knowledge in how to integrate web applications with other administrative systems like SAP solutions.

                    </p>
                </div>

            </div>
          
            
        </div>    



    );
}

export default Home;