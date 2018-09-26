import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    render() {
        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string});

        return <LoginForm {...this.state} update={updateState}/>
    }
}

export default LoginContainer;