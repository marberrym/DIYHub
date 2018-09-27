import React from 'react';

let Steps = (props) =>
    <div className="marginTop">
        <div className="stepHead">Steps:</div>
        {props.steps.map(task => 
            <div>
                <h3>{task.step_order}. {task.title}</h3>
                <img className="task-image" src={task.step_image_url} alt={task.title} />
                <div>{task.step_text}</div>
            </div>)}
    </div>

export default Steps;