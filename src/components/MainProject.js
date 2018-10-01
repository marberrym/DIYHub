import React from 'react';
import url from '../globalVars';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import NotFound from '../pagescreens/NotFound';
import Path from './singleproject/Path';
import Supplies from './singleproject/Supplies';
import Steps from './singleproject/Steps';
import Header from './singleproject/Header';
import Banner from './singleproject/Banner';

let saveProject = (status, projectId) => {
    fetch(`${url}/project/save`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token: localStorage.token,
            status,
            projectId
        })
      })
}

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
                </div>
                <div className="save">
                    <div className="save-title">Save to My Projects</div>
                    <div className="save-option" onClick={() => {
                        saveProject('todo', props.project.project.id);
                    }}>To Do</div>
                    <div className="save-option" onClick={() => {
                        saveProject('inprogress', props.project.project.id);
                    }}>In Progress</div>
                    <div className="save-option" onClick={() => {
                        saveProject('completed', props.project.project.id);
                    }}>Completed</div>
                    <div className="save-icon"><i className="fas fa-cloud" /></div>
                </div>
            </div>
        :
            <NotFound/>
        
    )
export default connect()(MainProject);