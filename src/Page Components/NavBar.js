import React from 'react';
import { Link } from 'react-router-dom';

let NavBar = () =>
    <div className="navBar">
        <div className="flex">
            <Link to="/" className="flex noDec navLink">
                <img src="./images/Gear.png" className="navGear"/>
                Home
            </Link>
            <Link to="/about" className="noDec navLink">About</Link>
        </div>
        <div className="margRight">
            <Link to="/login" className="noDec navLink"> Log In</Link>
            <Link to="/signup" className="noDec navLink">Sign Up</Link>
        </div>
    
    </div>

export default NavBar;