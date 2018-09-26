import React from 'react';

let PostStep = (props) =>
    <div>
        Step {props.step.stepcount}: {props.step.title}.
    </div>

export default PostStep;