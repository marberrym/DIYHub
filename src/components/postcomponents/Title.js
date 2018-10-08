import React from 'react';

let Title = (props) =>
    <label className="formLabel formInputField">Title: <input className="fieldInput" type="text" value={props.title} 
    onChange={(event) =>
        props.update('title', event.target.value)
    } required/></label>

export default Title;
