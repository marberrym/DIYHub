import React from 'react';
import NavBar from './NavBar';
import NotFound from '../Screens/NotFound';

let MainProject = (props) => (
        props.project ?
            <div className="flexC alignStart subText">
                <NavBar />
                <div className="mainPost flexC alignStart">
                    <div>DIY Hub &raquo; Crafts &raquo; Chess Board</div>
                    <div className="mainHead">{props.project.name}</div>
                    <div>By Jaydoe</div>
                    <img className="mainImg" src={props.project.img}/>
                    {props.project.instructions.map(tasklist => <div>{tasklist}</div>)}
                </div>
            </div>
        :
            <NotFound/>
        
    )
        

    
    

export default MainProject;