import React from 'react';
import { Link } from 'react-router-dom';

let NavBar = () =>
    <div className="navBar">
        <div className="flex">
            <Link to="/"><img src="./images/Gear.png" className="navGear" alt="DIY Cog"/></Link>
            <Link to="/" className="noDec navLink">Home</Link>
            <Link to="/about" className="noDec navLink">About</Link>
        </div>
        <div className="flex">
            <Link to="/login" className="noDec navLink"> Log In</Link>
            <Link to="/signup" className="noDec navLink margRight">Sign Up</Link>
        </div>
    </div>

export default NavBar;