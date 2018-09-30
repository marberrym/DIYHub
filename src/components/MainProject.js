import React from 'react';
import NavBar from './NavBar';
import NotFound from '../pagescreens/NotFound';
import Path from './singleproject/Path';
import Supplies from './singleproject/Supplies';
import Steps from './singleproject/Steps';
import Header from './singleproject/Header';
import Banner from './singleproject/Banner';
import CommentForm from './singleproject/CommentForm';
import { connect } from 'react-redux';

let MainProject = (props) => (
        props.project ?
            <div className="pageLayout">
                <NavBar />
                <Banner {...props.project.project}/>
                <div className="mainPost">
                    <Path />
                    <div className="mainPostHead">
                        <Header {...props.project.project}/>
                        <Supplies supplies={props.project.materials}/>
                    </div>
                    <Steps steps={props.project.steps}/>
                    {props.user.id != undefined ?
                        <CommentForm user={props.user.id}/>
                    :
                        <div>You must be logged in to comment!</div>
                    }
                </div>
            </div>
        :
            <NotFound/>
        
    )


let MainProjectSmart = connect(state => ({user: state.user}))(MainProject)

    
    

export default MainProjectSmart;