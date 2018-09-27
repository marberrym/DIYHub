import React from 'react';

let MaterialASIN = (props) =>
    <label className="marginB">{props.text}<input type="text" value={props.title} 
        placeholder="Material" onChange={event => {
            props.update('materialasin', event.target.value)
        }}/>
    </label>

export default MaterialASIN;