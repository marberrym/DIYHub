import React, { Component } from 'react';
import SignUpForm from '../components/SignupForm';
import postSignup from '../fetchreqs/postSignup';
import { connect } from 'react-redux';

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
        let signUp = () => {
            let data = {first_name: this.state.first,
                last_name: this.state.last,
                email: this.state.email,
                password: this.state.password}
            postSignup(this.props.dispatch, data, this.props.history.push)
        }

        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string})

        return <SignUpForm {...this.state} update={updateState} signUp={signUp}/>
    }
}

export default connect()(SignupContainer);