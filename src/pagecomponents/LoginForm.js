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
            props.update('username', '');
            props.update('password', '');
        }}>
            <label className="marginB subText">
                Username: <input type="text" value={props.username} onChange={(event) =>
                    props.update('username', event.target.value)} required/>
            </label>
            <label className="marginB subText">
                Password: <input type="password" value={props.password} onChange={(event) =>
                    props.update('password', event.target.value)} required/>
            </label>
            <Button text="Log in"/>
        </form>
    </div>

export default LoginForm;