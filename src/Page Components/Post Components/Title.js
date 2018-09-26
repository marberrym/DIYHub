import React from 'react';

let Title = (props) =>
    <label className="margRight">Title: <input type="text" value={props.title} 
    placeholder="title" onChange={(event) =>
        props.update('title', event.target.value)
    }/></label>

export default Title;
