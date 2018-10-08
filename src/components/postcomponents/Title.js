import React from 'react';

let Title = (props) =>
    <label className="formInputField">Title: <input className="keywordInput" type="text" value={props.title} 
    onChange={(event) =>
        props.update('title', event.target.value)
    } required/></label>

export default Title;
