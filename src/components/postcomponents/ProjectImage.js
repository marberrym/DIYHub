import React from 'react';

let ProjectImage = (props) =>
    <label className="formInputField">{props.text}<input type="text" value={props.title} 
        placeholder="URL" onChange={event => {
            props.update('projectimage', event.target.value)
        }} required/>
    </label>

export default ProjectImage;