import React from 'react';
import NavBar from './NavBar';
import HeadLogo from './HeadLogo';
import Button from './Button';
import { connect } from 'react-redux';

let LoginForm = (props) =>
    <div className="pageLayout">
        <NavBar />
        <HeadLogo />
        <form className="loginForm" onSubmit={(event) => {
            event.preventDefault();
            props.update('email', '');
            props.update('password', '');
            props.login(props.dispatch);
            }
        }>
            <label className="formInputField">
                Email: <input type="text" value={props.email} onChange={(event) =>
                    props.update('email', event.target.value)} required/>
            </label>
            <label className="formInputField">
                Password: <input type="password" value={props.password} onChange={(event) =>
                    props.update('password', event.target.value)} required/>
            </label>
            <Button text="Log in"/>
        </form>
    </div>

let LoginFormSmart = connect()(LoginForm)

export default LoginFormSmart;