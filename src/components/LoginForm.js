import React from 'react';
import NavBar from './NavBar';
import HeadLogo from './HeadLogo';
import Button from './Button';

let LoginForm = (props) =>
    <div className="flexC">
        <NavBar />
        <HeadLogo />
        <form className="flexC submitForm" onSubmit={(event) => {
            event.preventDefault();
            props.login();
            props.update('email', '');
            props.update('password', '');
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

export default LoginForm;