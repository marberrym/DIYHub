import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import postReq from '../fetchreqs/postReq';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    render() {
        let login = (callback) => {
            let userData = {
                email: this.state.email,
                password: this.state.password
            }
            postReq('http://localhost:5000/authenticate', userData, callback)
            
        }
            
        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string});

        return <LoginForm {...this.state} update={updateState} login={login} push={this.props.history.push}/>
    }
}

export default LoginContainer;