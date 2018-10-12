import React from 'react';
import url from '../globalVars';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import Supplies from './singleproject/Supplies';
import Steps from './singleproject/Steps';
import Header from './singleproject/Header';
import Banner from './singleproject/Banner';
import PostedComment from './singleproject/PostedComment';
import CommentFormContainer from './singleproject/CommentFormContainer';
import Loader from './Loader';


let saveProject = (status, projectId, redirect) => {
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
    .then(() => {
        redirect(`/my-projects/${status}`);
    })
}

let MainProject = (props) => (
    props.project.project ?
        <div className="pageLayout">
            <NavBar />
            <Banner {...props.project.project}/>
            <div className="mainPost">
                <div className="mainPostHead">
                    <Header {...props.project.project}/>
                    <Supplies supplies={props.project.materials}/>
                </div>
                <Steps steps={props.project.steps}/>
                <div className="commentSection">
                    <CommentFormContainer projectID={props.project.project.id}/>
                    {props.project.comments.map(comment => <PostedComment comment={comment} key={comment.comment_id}/>)}
                </div>
            </div>
            {props.user.id ?
                <div className="save">
                    <div className="save-title">Save to My Projects</div>
                    <div className="save-option" onClick={() => {
                        saveProject('todo', props.project.project.id, props.history.push);
                    }}>To Do</div>
                    <div className="save-option" onClick={() => {
                        saveProject('inprogress', props.project.project.id, props.history.push);
                    }}>In Progress</div>
                    <div className="save-option" onClick={() => {
                        saveProject('completed', props.project.project.id, props.history.push);
                    }}>Completed</div>
                    <div className="save-icon"><i className="fas fa-cloud" /></div>
                </div>
            :
                null
            }
        </div>
    :
        <Loader/>)

let MainProjectSmart = connect(state => ({user: state.user}))(MainProject);
export default MainProjectSmart;

