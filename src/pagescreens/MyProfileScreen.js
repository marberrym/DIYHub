import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyProfile from '../components/MyProfile';
import injectStats from '../components/inject-stats';

class MyProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: ''
        }
    }
    
    render() {
        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string});
        let editProfile = (avatar) => {
            let formData = new FormData();
            
        }
        return <MyProfile update={updateState} {...this.props} {...this.state}/>
    }
}

let MyProfileScreenSmart = connect(state => ({user: state.user}))(injectStats(MyProfileScreen))
export default MyProfileScreenSmart;


