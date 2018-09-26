import React from 'react';
import NavBar from './NavBar';
import NotFound from '../Screens/NotFound';
import Path from './SingleProject/Path';
import Supplies from './SingleProject/Supplies';
import Steps from './SingleProject/Steps';
import Header from './SingleProject/Header';

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