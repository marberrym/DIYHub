import React from 'react';

let StepDescription = (props) =>
        <label className="formLabel formInputField">{props.text}
            <textarea className="width100 submitTextArea" onChange={(event) => {
                    props.update('stepdescription', event.target.value)
            }   
                } value={props.description} required></textarea>
        </label>

export default StepDescription;