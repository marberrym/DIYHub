import React from 'react';

let StepTitle = (props) =>
    <label className="formInputField">{props.text}<input className="titleInput" type="text" value={props.title} 
        onChange={event => {
            props.update('steptitle', event.target.value)
        }} required/>
    </label>

export default StepTitle;