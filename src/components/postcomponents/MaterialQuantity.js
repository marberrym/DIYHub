import React from 'react';

let MaterialQuantity = (props) =>
    <label className="formLabel formInputField">{props.text}<input type="text" value={props.title} 
        placeholder="Quantity" onChange={event => {
            props.update('materialquantity', event.target.value)
        }} required/>
    </label>

export default MaterialQuantity;