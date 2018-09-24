import React from 'react';
import NavBar from './NavBar';
import HeadLogo from './HeadLogo';

let LoginForm = (props) =>
    <div className="flexC">
        <NavBar />
        <HeadLogo />
        <form className="flexC loginForm" onSubmit={(event) => {
            event.preventDefault();
            props.update('username', '');
            props.update('password', '');
        }}>
            <label className="subText">
                Username: <input type="text" value={props.username} onChange={(event) =>
                    props.update('username', event.target.value)} required/>
            </label>
            <label className="subText">
                Password: <input type="password" value={props.password} onChange={(event) =>
                    props.update('password', event.target.value)} required/>
            </label>
            <button className="button">Login</button>
        </form>
    </div>

export default LoginForm;