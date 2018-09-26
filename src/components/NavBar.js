import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let NavBar = (props) =>
    <div className="navBar">
        <div className="flex">
            <Link to="/"><img src="./images/Gear.png" className="navGear" alt="DIY Cog"/></Link>
            <Link to="/" className="noDec navLink">Home</Link>
            <Link to="/about" className="noDec navLink">About</Link>
        </div>
        <div className="flex">
            {console.log(props)}
            {props.user.id !== "" ?
                <div>
                    <Link to="/post" className="noDec navLink"> Post Project</Link>
                    <button className="noDec navLink margRight" onClick={event =>{
                        localStorage.removeItem('token');
                        props.dispatch({type: "LOGOUT",  empty: ""})
                    }}> Log Out</button>
                </div>
            : 
                <div>
                    <Link to="/login" className="noDec navLink"> Log In</Link>
                    <Link to="/signup" className="noDec navLink margRight">Sign Up</Link>
                </div>
            }</div>
    </div>

let NavBarSmart = connect(state => ({user: state.user}))(NavBar)

export default NavBarSmart;