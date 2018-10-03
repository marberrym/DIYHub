import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import url from '../globalVars';

let NavBar = (props) =>
    <div className="navBar">
        <div className="flex">
            <Link to="/"><img src="./images/DIYHubLogo.png" className="navGear navLogoRepo" alt="DIY Cog"/></Link>
            <Link to="/" className="navLink">Home</Link>
            <Link to="/about" className="navLink">About</Link>
        </div>
        <div className="flex">
            {props.user.name ?
                <div className="navRightSide flex">
                    <div>
                        <div className="greeting">Hello {props.user.name}</div>
                        <img className="avatar" src={`${url}/uploads/avatar/${props.user.avatar}`} />
                    </div>
                    <Link to="/my-projects" className="navLink"> My Projects</Link>
                    <Link to="/post" className="navLink"> Post Project</Link>
                    <span className="navLink" onClick={event =>{
                        localStorage.removeItem('token');
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
                <div className="navRightSide">
                    <Link to="/signup" className="navLink">Sign Up</Link>
                    <Link to="/login" className="navLink"> Log In</Link>
                </div>
            }</div>
    </div>

let NavBarSmart = connect(state => ({user: state.user}))(NavBar)

export default NavBarSmart;
