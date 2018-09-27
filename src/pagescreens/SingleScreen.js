import React from 'react';
import { connect } from 'react-redux';
import injectProject from '../components/inject-project';
import MainProject from '../components/MainProject';

let SingleScreen = (props) => 
    <MainProject {...props} />

let SingleScreenSmart = connect(state => 
    ({project: state.project}))(injectProject(SingleScreen));

export default SingleScreenSmart;