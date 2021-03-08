import React from "react";
import MyData from "../json/resume.json";
import TitleValue from "./titleValue";


function Myresume(){


    return(

        
        <div className="resume flex-row flex-wrap">
            
            <div className=" resume1 flex-col"> 
                    <div className="flex-col flex-center m-2">
                         <div className="resume-pic"></div>
                    </div>
                    <div className="general-info flex-col">  
                        <TitleValue name="Name: " data={MyData.info.name}/>
                        <TitleValue name="Location: " data={MyData.info.address}/>
                        <TitleValue name="Phone: " data={MyData.info.cel}/>
                        <TitleValue name="E-mail : " data={MyData.info.email}/>

                    </div> 

                    <div className="flex-col">  

                    <div className="bold2 my-3 is-size-3">Profile</div> 

                    <p className="is-size-6 p-3 has-text-white">{MyData.about}</p>

                    <div className="bold2 my-3 is-size-3">Skills</div> 

                       {MyData.skills.map((val)=>{
                           let value = <h1 className="is-size-6 ml-2">{val}</h1>;
                           return value;
                       })
                       }

                    <div className="bold2 my-3 is-size-3">Languages</div> 

                    {MyData.languages.map((val)=>{
                        let value = <h1 className="is-size-6 ml-2">{val}</h1>;
                        return value;
                    })
                    }

                    </div> 
            </div> 

            <div className=" resume2 flex-col "> 
             <div className="bold my-3 is-size-3">Education</div> 
             {MyData.education.map((val)=>{
                           let value = <div className="flex-row flex-wrap p-3">
                               <div className="flex-col year"><h1 className="is-size-6 has-text-white mr-1 p-2">From: {val.from} to {val.to}</h1></div>
                               <div className="flex-col">
                               
                                    <TitleValue name="Institution:" data={val.institution}/>
                                    <TitleValue name="Degree:" data={val.degree}/>
                                    

                           
                               </div>
                           
                           </div>
                           
                           ;
                           return value;
                       })
                       }
            
            <div className="bold my-3 is-size-3">Work History</div> 
            {MyData.work.map((val)=>{
                           let value = <div className="flex-row flex-wrap p-3">
                               <div className="flex-col year"><h1 className="is-size-6 has-text-white mr-1 p-2">From: {val.from} to {val.to}</h1></div>
                               <div className="flex-col">
                               
                                    <TitleValue name="Company: " data={val.company}/>
                                    <TitleValue name="Position: " data={val.positionDescription}/>
                                    <TitleValue name="Description: " data={val.jobDescription}/>

                           
                               </div>
                           
                           </div>
                           
                           ;
                           return value;
                       })
                       }

<div className="bold my-3 is-size-3">Certifications</div> 
                {MyData.certifications.map((val)=>{
                           let value = <div className="p-3">

                                 <TitleValue name="Certification in: " data={val.degree}/>
                                 <TitleValue name="Institution: " data={val.institution}/>
                                 <TitleValue name="Year: " data={val.year}/>
                                    <a className="is-size-6" href={val.url}>Validation</a>
                                 
                          
                           </div>
                           
                           ;
                           return value;
                       })
                       }
           </div> 

           

            <div> </div> 
           
        </div>    



    );
}

export default Myresume;