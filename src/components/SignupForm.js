import React from 'react';
import NavBar from './NavBar';
import HeadLogo from './HeadLogo';
import Button from './Button';
import Avatar from './Avatar';

let SignupForm = (props) => 
    <div className="pageLayout">
        <NavBar />
        <HeadLogo />
        <form className="signUpForm" encType="multipart/form-data" onSubmit={(event) => {
            event.preventDefault();
            let formData = new FormData();
            formData.append('avatar', props.avatar)
            props.signUp(formData);
            Object.keys(props).forEach(prop => {
                if(prop !== 'update' && prop !=='signUp') {
                    props.update(prop, '');
                }
            })
        }}>
            <div className="flex">       
                <label className="formLabel formInputField">
                    First Name: <input className="fieldInput" type="text" value={props.first} onChange={(event) => 
                        props.update('first', event.target.value)} required/>
                </label>
                <label className="formLabel formInputField">
                    Last Name: <input className="fieldInput" type="text" value={props.last} onChange={(event) => 
                        props.update('last', event.target.value)} required/>
                </label>
            </div>
            <label className="formLabel formInputField">
                Email: <input className="fieldInput" type="email" value={props.email} onChange={(event) => 
                    props.update('email', event.target.value)} required/>
            </label>
            <div className="flex"> 
                <label className="formLabel formInputField">
                    Password: <input className="fieldInput" type="password" value={props.password} onChange={(event) => 
                        props.update('password', event.target.value)} required/>
                </label>
                <label className="formLabel formInputField">
                    Verify Password: <input className="fieldInput" type="password" value={props.pwverify} onChange={(event) => 
                        props.update('pwverify', event.target.value)} required/>
                </label>
            </div>
            <label className="formInputField">
                <Avatar update={props.update} image={props.avatar} /></label>
            <Button text="Sign Up"/>
        </form>
    </div>


export default SignupForm;