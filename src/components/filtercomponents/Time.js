import React from 'react';

let Time = (props) =>
    <label className="margRight marginB" onChange={(event) => {
        props.update('time', event.target.value);
    }} value={props.time}>Time: <select>
            <option value=""></option>
            <option value="1">0-2 hours</option>
            <option value="2">2-4 hours</option>
            <option value="3">4-8 hours</option>
            <option value="4">8-16 hours</option>
            <option value="5">16-32 hours</option>
            <option value="6">32+ hours</option>
        </select>
    </label>

export default Time;