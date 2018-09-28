import React from 'react';
import NavBar from './NavBar';
import NotFound from '../pagescreens/NotFound';
import Path from './singleproject/Path';
import Supplies from './singleproject/Supplies';
import Steps from './singleproject/Steps';
import Header from './singleproject/Header';
import Banner from './singleproject/Banner';

let MainProject = (props) => (
        props.project ?
            <div className="flexC alignStart subText">
                <NavBar />
                <Banner {...props.project.project}/>
                <div className="mainPost flexC alignStart">
                    <Path />
                    <div className="flexC alignStart width100">
                        <div className="flex alignCenter spaceB">
                            <Header {...props.project.project}/>
                            <Supplies supplies={props.project.materials}/>
                        </div>
                        <Steps steps={props.project.steps}/>
                    </div>
                </div>
            </div>
        :
            <NotFound/>
        
    )
        

    
    

export default MainProject;