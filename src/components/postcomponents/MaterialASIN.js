import React from 'react';

let MaterialASIN = (props) =>
    <label className="formInputField">{props.text}<input type="text" value={props.title} 
        placeholder="Material" onChange={event => {
            props.update('materialasin', event.target.value)
        }} required/>
    </label>

export default MaterialASIN;