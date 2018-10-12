import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyProfile from '../components/MyProfile';
import injectStats from '../components/inject-stats';
import url from '../globalVars';
import postAuth from '../fetchreqs/postAuth';

class MyProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: '',
            stats: '',
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({stats: this.props.user.stats})
        }
    }
    
    render() {
        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string});
        let editProfile = (avatar) => {
            let formData = new FormData();
            formData.append('avatar', avatar);
            fetch(url + "/user", {
                method: "PUT",
                headers: {token: localStorage.token},
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    this.props.dispatch({
                        type: 'SET_TOAST',
                        toast: {
                            text: 'You changed your avatar!',
                            type: 'success'
                        }
                    });
                    this.setState({avatar: ''})
                    fetch(url + "/validate", {
                        method: "POST",
                        headers: {"Content-Type": "application/json; charset=utf-8",},
                        body: JSON.stringify({token: localStorage.token})
                    })
                    .then(response => response && response.json())
                    .then(response => {
                        console.log(response);
                        if (response) {
                            this.props.dispatch({type: "ASSIGN_USER", package: {
                                    name: response.name,
                                    id: response.id,
                                    avatar: response.avatar,
                                    stats: this.state.stats
                            }})
                        }
                    })
                } else {
                    this.props.dispatch({
                        type: 'SET_TOAST',
                        toast: {
                            text: 'Your avatar failed to upload.',
                            type: 'error'
                        }
                    });
                }
            })
        }
        return <MyProfile update={updateState} editProfile={editProfile} {...this.props} {...this.state}/>
    }
}

let MyProfileScreenSmart = connect(state => ({user: state.user}))(injectStats(MyProfileScreen))
export default MyProfileScreenSmart;


