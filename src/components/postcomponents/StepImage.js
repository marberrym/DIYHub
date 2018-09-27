import React from 'react';

let ProjectImage = (props) =>
    <label className="marginB">{props.text}<input type="text" value={props.title} 
        placeholder="URL" onChange={event => {
            props.update('stepimage', event.target.value)
        }} required/>
    </label>

export default ProjectImage;