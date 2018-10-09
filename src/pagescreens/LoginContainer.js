import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import postAuth from '../fetchreqs/postAuth';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    render() {
        let login = (dispatch) => {
            let userData = {
                email: this.state.email,
                password: this.state.password
            }
            postAuth(userData, this.props.history.push, dispatch);      
        }
            
        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string});

        return <LoginForm {...this.state} update={updateState} login={login}/>
    }
}

export default LoginContainer;