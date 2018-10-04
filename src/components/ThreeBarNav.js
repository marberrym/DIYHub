import React from 'react';
import url from '../globalVars';

let ThreeBarNav = (props) => 
    <div className="navRightSide flex">
        <div>
            <div className="greeting">Hello {props.user.name}</div>
            <img className="avatar" src={`${url}/uploads/avatar/${props.user.avatar}`} />
        </div>
        <i className="fas fa-bars fa-2x barsIcon"/>
    </div>

export default ThreeBarNav;