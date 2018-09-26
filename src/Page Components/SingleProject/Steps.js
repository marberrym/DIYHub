import React from 'react';

let Steps = (props) =>
    <div className="marginTop">
        <div className="stepHead">Steps:</div>
        {props.steps.map(task => <div>{task}</div>)}
    </div>

export default Steps;