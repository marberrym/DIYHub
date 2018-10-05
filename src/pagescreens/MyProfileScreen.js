import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyProfile from '../components/MyProfile';
import injectStats from '../components/inject-stats';

class MyProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileimg: ''
        }
    }
    
    render() {
        return <MyProfile {...this.props} {...this.state}/>
    }
}

let MyProfileScreenSmart = connect(state => ({user: state.user}))(injectStats(MyProfileScreen))
export default MyProfileScreenSmart;


