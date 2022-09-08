import React from 'react';//rfc is used as shortcut for getting a basic syntax.
import Skill from "./Skill";
import { v4 as uuid } from "uuid";
import { Consumer } from "../context";


function SkillSection() {
    
    return(
        <Consumer>
            {(value)=>{
            const { skills } =value;
            const finalSkillRow = [];    

            for(let i=0 ; i<skills.length/4  ; i++)
            {
                let skillRow= skills.slice( i*4 , (i+1)*4 ); 
                //slice used for slicing the no.of skills in a row i.e, to print 4 elements in a row it is simplified to get slice(0,4) so first 0-4 are printed in row and the loop continues and every 4 elemets are printed in a row.
                finalSkillRow.push(
                    //uuid is used for assigning an random and different id for every element or else it shows error in console.
                <div key={uuid()} className="d-flex justify-content-around py-3">
                    {
                        skillRow.map((skill)=>(
                            <Skill key={uuid()} skill= {skill} />            
                            ))    
                    }          
               
              </div>
              );
                
            }
        
            return(
                <div className="bg-light w-100">
              <div className="container text-center py-5">
                <h1 className="font-weight-light">
                  <span className="text-info">Technology</span> stack
                </h1>
                <div className="lead pb-5">
                  I design, develop and deliver with these weapons
                </div>
                {finalSkillRow} 
              </div>
            </div>
            );
            }            
            
            }
        </Consumer>
    );

    
}

export default SkillSection;