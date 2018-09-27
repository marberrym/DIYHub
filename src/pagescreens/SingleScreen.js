import React from 'react';
import { connect } from 'react-redux';
import injectProject from '../components/inject-project';
import MainProject from '../components/MainProject';

let SingleScreen = (props) => 
    <MainProject project={props.projects.find(project => project.id === props.match.params.projectid)}/>

let SingleScreenSmart = connect(state => 
    ({projects: state.projects}))(injectProject(SingleScreen));

export default SingleScreenSmart;