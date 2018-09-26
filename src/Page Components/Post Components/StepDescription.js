import React from 'react';

let StepDescription = (props) =>
    <div>
        <label className="flexC">Step Description:
            <textarea onChange={(event) => 
                    props.updateStep('description', event.target.value)
                } value={props.description} required></textarea>
        </label>
    </div>

export default StepDescription;