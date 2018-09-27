import React from 'react';

let PostStep = (props) =>
    <li>
        Step {props.step.step_order}: {props.step.steptitle}.
    </li>

export default PostStep;