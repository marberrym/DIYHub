import React from 'react';
import NavBar from './NavBar';
import HeadLogo from './HeadLogo';
import Button from './Button';

let SignupForm = (props) => 
    <div className="flexC">
        <NavBar />
        <HeadLogo />
        <form className="flexC submitForm" onSubmit={(event) => {
            event.preventDefault();
            props.signUp();
            Object.keys(props).forEach(prop => {
                if(prop !== 'update' && prop !=='signUp') {
                    props.update(prop, '');
                }
            })
        }}>
            <label className="marginB subText">
                First Name: <input type="text" value={props.first} onChange={(event) => 
                    props.update('first', event.target.value)} required/>
            </label>
            <label className="marginB subText">
                Last Name: <input type="text" value={props.last} onChange={(event) => 
                    props.update('last', event.target.value)} required/>
            </label>
            <label className="marginB subText">
                Username: <input type="text" value={props.username} onChange={(event) => 
                    props.update('username', event.target.value)} required/>
            </label>
            <label className="marginB subText">
                Email: <input type="email" value={props.email} onChange={(event) => 
                    props.update('email', event.target.value)} required/>
            </label>
            <label className="marginB subText">
                Password: <input type="password" value={props.password} onChange={(event) => 
                    props.update('password', event.target.value)} required/>
            </label>
            <label className="marginB subText">
                Verify Password: <input type="password" value={props.pwverify} onChange={(event) => 
                    props.update('pwverify', event.target.value)} required/>
            </label>
            <Button text="Sign Up"/>
        </form>
    </div>


export default SignupForm;