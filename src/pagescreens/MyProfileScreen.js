import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyProfile from '../components/MyProfile';
import injectStats from '../components/inject-stats';
import url from '../globalVars';

class MyProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: ''
        }
    }
    
    render() {
        let updateAvatar = (key, avatar) => {
            this.setState({[key]: avatar})
        }
        let submitAvatar = () => {
            let formData = new FormData;
            formData.append('avatar', this.state.avatar);
            fetch(`${url}/updateavatar`, {
                method: "POST",
                headers: {token: localStorage.token},
                body: formData
            })
            .then(response => console.log(response))
        }

        return <MyProfile {...this.props} {...this.state} update={updateAvatar} submit={submitAvatar}/>
    }
}

let MyProfileScreenSmart = connect(state => ({user: state.user}))(injectStats(MyProfileScreen))
export default MyProfileScreenSmart;


