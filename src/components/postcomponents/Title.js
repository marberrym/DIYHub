import React from 'react';

let Title = (props) =>
    <label className="margRight marginB">Title: <input type="text" value={props.title} 
    placeholder="Title" onChange={(event) =>
        props.update('title', event.target.value)
    } required/></label>

export default Title;
