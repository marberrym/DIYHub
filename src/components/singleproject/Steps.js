import React from 'react';

let Steps = (props) =>
    <div className="marginTop">
        {props.steps.map(task => 
            <div key={task.step_order}>
                <div className="flex path step">
                    <div>
                        <h3>Step {task.step_order}: {task.step_title}</h3>
                        <img className="task-image" src={task.step_image_url} alt={task.title} />
                    </div>
                    <div className="alignC path">{task.step_text}</div>
                </div>
            </div>)}
    </div>

export default Steps;