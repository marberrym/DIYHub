import React from 'react';
import NavBar from './NavBar';
import NotFound from '../pagescreens/NotFound';
import Path from './singleproject/Path';
import Supplies from './singleproject/Supplies';
import Steps from './singleproject/Steps';
import Header from './singleproject/Header';

let MainProject = (props) => (
        props.project ?
            <div className="flexC alignStart subText">
                <NavBar />
                <div className="mainPost flexC alignStart">
                    <Path />
                    <Header {...props.project.project}/>
                    <Supplies supplies={props.project.materials}/>
                    <Steps steps={props.project.steps}/>
                </div>
            </div>
        :
            <NotFound/>
        
    )
        

    
    

export default MainProject;