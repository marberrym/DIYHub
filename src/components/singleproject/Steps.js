import React from 'react';
import url from '../../globalVars';

let Steps = (props) =>
    <div>
        {props.steps.map(task => 
            <div key={task.step_order} className="stepHeader">
                <div className="stepHeadContainer">
                    <h3>Step {task.step_order}: {task.step_title}</h3>
                    <img className="task-image" src={url + '/uploads/project/' + task.step_image_file} alt={task.title} />
                </div>
                <div className="stepContent">{task.step_text}</div>     
            </div>)}
    </div>

export default Steps;