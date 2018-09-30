import React from 'react';

let MaterialItem = (props) =>
    <label className="formInputField">{props.text}<input type="text" value={props.title} 
        placeholder="Material" onChange={event => {
            props.update('materialtitle', event.target.value)
        }} required/>
    </label>

export default MaterialItem;