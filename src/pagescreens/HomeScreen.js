import React from 'react';
import { connect } from 'react-redux';
import HomePost from '../components/HomePost';

let HomeScreen = (props) => <HomePost project={props.project}/>;

let HomeScreenSmart = connect(state => ({project: state.projects[0]}))(HomeScreen)
export default HomeScreenSmart;