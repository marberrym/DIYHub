import React from 'react';
import NavBar from './NavBar';
import HeadLogo from './HeadLogo';
import Button from './Button';
import { connect } from 'react-redux';

let LoginForm = (props) =>
    <div className="flexC">
        <NavBar />
        <HeadLogo />
        <form className="flexC submitForm" onSubmit={(event) => {
            event.preventDefault();
            props.update('email', '');
            props.update('password', '');
            props.login();
            if (localStorage.name && localStorage.id) {
                props.dispatch({type: "ASSIGN_USER", package: {
                    name: localStorage.name,
                    id: localStorage.id,
                }})
            }
        }}>
            <label className="marginB subText">
                Email: <input type="text" value={props.email} onChange={(event) =>
                    props.update('email', event.target.value)} required/>
            </label>
            <label className="marginB subText">
                Password: <input type="password" value={props.password} onChange={(event) =>
                    props.update('password', event.target.value)} required/>
            </label>
            <Button text="Log in"/>
        </form>
    </div>

let LoginFormSmart = connect()(LoginForm)

export default LoginFormSmart;