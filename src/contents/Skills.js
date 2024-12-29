import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
        'myskills':['HTML', 'CSS', 'JS', 'C++', 'C', 'REACT JS', 'DJANGO', 'JAVA', 'PYTHON', 'MY SQL']
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
             <ul>
              {this.state.myskills.map((value)=>{
                return <h3> <li> {value} </li> </h3>; 
              })}
             </ul>
            </div>
            )
        }
    }
    
    export default Skills
    