import React from 'react';
import NavBar from './NavBar';
import NotFound from '../Screens/NotFound';

let MainProject = (props) => (
        props.project ?
            <div className="flexC">
                <NavBar />
                <img className="mainImg" src={props.project.img}/>
                <h1>{props.project.name}</h1>
                {props.project.instructions.map(tasklist => <div>{tasklist}</div>)}
            </div>
        :
            <NotFound/>
        
    )
        

    
    

export default MainProject;