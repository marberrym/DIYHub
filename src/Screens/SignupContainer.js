import React, { Component } from 'react';
import SignUpForm from '../Page Components/SignupForm';

class SignupContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: '',
            last: '',
            username: '',
            password: '',
            pwverify: '',
            email: ''
        }
    }
    render() {
        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string})

        return <SignUpForm {...this.state} update={updateState}/>
    }
}

export default SignupContainer;