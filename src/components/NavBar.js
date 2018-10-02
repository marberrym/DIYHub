import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let NavBar = (props) =>
    <div className="navBar">
        <div className="flex">
            <Link to="/"><img src="./images/DIYHubLogo.png" className="navGear navLogoRepo" alt="DIY Cog"/></Link>
            <Link to="/" className="navLink">Home</Link>
            <Link to="/about" className="navLink">About</Link>
        </div>
        <div className="flex">
            {localStorage.token ?
                <div>
                    <Link to="/my-projects" className="navLink"> My Projects</Link>
                    <Link to="/post" className="navLink"> Post Project</Link>
                    <span className="navLink" onClick={event =>{
                        localStorage.removeItem('token');
                        localStorage.removeItem('name');
                        localStorage.removeItem('id');
                        props.dispatch({type: "LOGOUT",  empty: ""})
                        props.dispatch({
                            type: 'SET_TOAST',
                            toast: {
                                text: 'You logged out.',
                                type: 'info'
                            }
                        });
                    }}> Log Out</span>
                </div>
            : 
                <div>
                    <Link to="/signup" className="navLink">Sign Up</Link>
                    <Link to="/login" className="navLink"> Log In</Link>
                </div>
            }</div>
    </div>

let NavBarSmart = connect(state => ({user: state.user}))(NavBar)

export default NavBarSmart;
