import React from 'react';

let StepTitle = (props) =>
    <label className="margRight">Step Title: <input type="text" value={props.title} 
        placeholder="Step" onChange={event => props.updateStep('title', event.target.value)}/>
    </label>

export default StepTitle;