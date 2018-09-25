import React from 'react';
import { connect } from 'react-redux';
import BrowseList from '../Page Components/BrowseList';

let BrowseScreen = (props) => <BrowseList projects={props.projects}/>;

let BrowseScreenSmart = connect(state => ({projects: state.projects}))(BrowseScreen)
export default BrowseScreenSmart;