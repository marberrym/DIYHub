import React from 'react';

let Button = (props) =>
    props.type === 'remove' ?
        <button className="button remove">{props.text}</button>
    :
        <button className="button">{props.text}</button>

export default Button;