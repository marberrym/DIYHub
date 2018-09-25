import React from 'react';
import { connect } from 'react-redux';
import PostList from '../Page Components/PostList';

let PostScreen = (props) => <PostList projects={props.projects}/>;

let PostScreenSmart = connect(state => ({projects: state.projects}))(PostScreen)
export default PostScreenSmart;