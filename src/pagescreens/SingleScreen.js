import React from 'react';
import { connect } from 'react-redux';
import MainProject from '../components/MainProject';

let SingleScreen = (props) => 
    <MainProject project={props.projects.find(project => project.id === props.match.params.projectid)}/>

let SingleScreenSmart = connect(state => 
    ({projects: state.projects}))(SingleScreen)

export default SingleScreenSmart;