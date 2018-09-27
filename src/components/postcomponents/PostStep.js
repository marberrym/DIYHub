import React from 'react';

let PostStep = (props) =>
    <li>
        Step {props.step.stepcount}: {props.step.title}.
    </li>

export default PostStep;