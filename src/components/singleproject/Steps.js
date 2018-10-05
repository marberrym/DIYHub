import React from 'react';

let Steps = (props) =>
    <div>
        {props.steps.map(task => 
            <div key={task.step_order} className="stepHeader">
                <div className="stepHeadContainer">
                    <h3>Step {task.step_order}: {task.step_title}</h3>
                    <img className="task-image" src={task.step_image_url} alt={task.title} />
                </div>
                <div className="stepContent">{task.step_text}</div>     
            </div>)}
    </div>

export default Steps;