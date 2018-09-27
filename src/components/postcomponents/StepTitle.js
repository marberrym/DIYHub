import React from 'react';

let StepTitle = (props) =>
    <label className="marginB">{props.text}<input type="text" value={props.title} 
        placeholder="Step" onChange={event => {
            props.type === "mat" ?
                props.update('materialtitle', event.target.value)
            :
                props.update('steptitle', event.target.value)
        }}/>
    </label>

export default StepTitle;