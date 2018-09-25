import React from 'react';
import NavBar from './NavBar';

let MainProject = (props) =>
    <div className="flexC">
        <NavBar />
        <img className="mainImg" src={props.project.img}/>
        <h1>{props.project.name}</h1>
        {props.project.instructions.map(tasklist => <div>{tasklist}</div>)}

    
    </div>

export default MainProject;