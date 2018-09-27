import React from 'react';

let MaterialQuantity = (props) =>
    <label className="marginB">{props.text}<input type="text" value={props.title} 
        placeholder="Step" onChange={event => {
            props.update('materialquantity', event.target.value)
        }}/>
    </label>

export default MaterialQuantity;