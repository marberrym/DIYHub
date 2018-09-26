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
                    <Path id={props.project.id}/>
                    <Header name={props.project.name} img={props.project.img} />
                    <Supplies supplies={props.project.supplies}/>
                    <Steps steps={props.project.instructions}/>
                </div>
            </div>
        :
            <NotFound/>
        
    )
        

    
    

export default MainProject;