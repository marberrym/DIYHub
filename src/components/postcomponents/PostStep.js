import React from 'react';

let PostStep = (props) =>
    <div className="stepsList" onClick={event => props.editStep(props.step.step_order, props.step.step_title, props.step.step_text, props.step.step_image_url)}>
        <li>
            Step {props.step.step_order}: {props.step.step_title}.
        </li>
    </div>

export default PostStep;