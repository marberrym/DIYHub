import React from 'react';

let StepTitle = (props) =>
    <label className="formInputField">{props.text}<input type="text" value={props.title} 
        placeholder="Step" onChange={event => {
            props.update('steptitle', event.target.value)
        }} required/>
    </label>

export default StepTitle;