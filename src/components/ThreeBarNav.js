import React, { Component } from 'react';
import url from '../globalVars';
import enhanceWithClickOutside from 'react-click-outside';
import { Link } from 'react-router-dom';

class ThreeBarNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        }
    }
    handleClickOutside() {
        this.setState({isOpened: false});
    }
     
    toggle() {
        this.setState(prevstate => ({isOpened: !prevstate.isOpened}));
    }

    render() {
        return <div className="navRightSide flex">
            <Link to="/my-profile" className="navLink">
                <div>
                    <div className="greeting">Hello {this.props.user.name}</div>
                    <img className="avatar" src={`${url}/uploads/avatar/${this.props.user.avatar}`} />
                    {this.props.user.collaborations && this.props.user.collaborations.length > 0 && <div className="avatar-notification threeNavBarNotification">
                        <span className="collabNotification">{this.props.user.collaborations.length}</span>
                    </div>}
                </div>
            </Link>
            <i className="fas fa-bars fa-2x barsIcon" onClick={event => this.toggle()}/>
            {this.state.isOpened === false ?
                null
            :
                <div className="navMenu">
                    <Link to="/my-projects/inprogress" className="navLink navLink3"> My Projects</Link>
                    <Link to="/post" className="navLink navLink3"> Post Project</Link>
                    <span className="navLink navLink3" onClick={event =>{
                        localStorage.removeItem('token');
                        this.props.dispatch({type: "LOGOUT",  empty: ""})
                        this.props.dispatch({
                            type: 'SET_TOAST',
                            toast: {
                                text: 'You logged out.',
                                type: 'info'
                            }
                        });
                    }}> Log Out</span>
                </div>
            }
        </div>
    }

} 

export default enhanceWithClickOutside(ThreeBarNav);