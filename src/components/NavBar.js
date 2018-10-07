import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import url from '../globalVars';
import windowSize from 'react-window-size';
import ThreeBarNav from './ThreeBarNav';

class NavBar extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            screen: 'mobile'
        }
    }
    componentDidMount() {
        if(this.props.windowWidth < 500) {
            this.setState({screen: 'mobile'})
        } else {
            this.setState({screen: 'computer'})
        }
    } 
    componentDidUpdate(prevProps) {
        if(prevProps.windowWidth !== this.props.windowWidth) {
            if(this.props.windowWidth < 500) {
                this.setState({screen: 'mobile'})
            } else {
                this.setState({screen: 'computer'})
            }
        }
    }
    render(){
        return <div className="navBar">
            <div className="flex">
                <Link to="/"><img src="./images/DIYHubLogo.png" className="navGear navLogoRepo" alt="DIY Cog"/></Link>
                <NavLink exact to="/" className="navLink" activeClassName="navLinkActive">Home</NavLink>
                <NavLink to="/browse" className="navLink" activeClassName="navLinkActive">Browse</NavLink>
                <NavLink to="/about" className="navLink" activeClassName="navLinkActive">About</NavLink>
            </div>
            <div className="flex">
                {this.props.user.name ?
                    this.state.screen === 'computer' ?
                        <div className="navRightSide flex">
                            <NavLink to="/my-profile" className="navLink"  activeClassName="navLinkActive">
                                <div>
                                    <div className="greeting">Hello {this.props.user.name}</div>
                                    <img className="avatar" src={`${url}/uploads/avatar/${this.props.user.avatar}`} />
                                </div>
                            </NavLink>
                            <NavLink to="/my-projects" className="navLink"  activeClassName="navLinkActive"> My Projects</NavLink>
                            <NavLink to="/post" className="navLink" activeClassName="navLinkActive"> Post Project</NavLink>
                            <span className="navLink" onClick={event =>{
                                localStorage.removeItem('token');
                                this.props.dispatch({type: "LOGOUT",  empty: ""})
                                this.props.dispatch({
                                    type: 'SET_TOAST',
                                    toast: {
                                        text: 'You logged out.',
                                        type: 'info'
                                    }
                                });
                                this.props.history.push('/')
                            }}> Log Out</span>
                        </div>
                    :
                        <ThreeBarNav user={this.props.user} dispatch={this.props.dispatch}/>
                : 
                    <div className="navRightSide">
                        <Link to="/signup" className="navLink">Sign Up</Link>
                        <Link to="/login" className="navLink"> Log In</Link>
                    </div>
            }</div>
        </div>
    }}

let NavBarSmart = connect(state => ({user: state.user}))(NavBar)

export default windowSize(NavBarSmart);
