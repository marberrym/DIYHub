import React from 'react';

let PostStep = (props) =>
    <div className="stepsList" onClick={event => {
        if(props.step.step_image_file) {
            let reader = new FileReader();
                reader.readAsDataURL(props.step.step_image_file);
                reader.onload = (event) => {
                    props.editStep(props.step.step_order, props.step.step_title, props.step.step_text, props.step.step_image_file, event.target.result);
                }
        } else {
            props.editStep(props.step.step_order, props.step.step_title, props.step.step_text, props.step.step_image_file);
        }
    }}> 
        Step {props.step.step_order}: {props.step.step_title}. 
    </div>

export default PostStep;