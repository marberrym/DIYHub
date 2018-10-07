import React from 'react';

let StepImage = (props) =>
    <label className="formInputField">{props.text}
        <input type="file" value={props.stepimagevalue} onChange={(event) => {
            props.update('stepimage', event.target.files[0]);
            props.update('stepimagevalue', event.target.value);
        }} />
    </label>

export default StepImage;