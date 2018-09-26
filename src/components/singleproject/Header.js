import React from 'react';

let Header = (props) =>
    <div>
        <div className="mainHead">{props.name}</div>
        <div>By Jaydoe</div>
        <img className="mainImg" src={props.img}/>
    </div>

export default Header;