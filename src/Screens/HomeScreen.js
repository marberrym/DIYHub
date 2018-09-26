import React from 'react';
import { connect } from 'react-redux';
import HomePost from '../Page Components/HomePost';

let HomeScreen = (props) => <HomePost project={props.projects[0]}/>;

let HomeScreenSmart = connect(state => ({projects: state.projects}))(HomeScreen)
export default HomeScreenSmart;