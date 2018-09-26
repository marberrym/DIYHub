import React from 'react';

let Title = (props) =>
    <label className="margRight marginB">Title: <input type="text" value={props.title} 
    placeholder="title" onChange={(event) =>
        props.update('title', event.target.value)
    }/></label>

export default Title;
