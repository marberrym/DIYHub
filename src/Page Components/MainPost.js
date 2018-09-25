import React from 'react';

let MainPost = (props) =>
    <div className="flexC fbasis45">
        {console.log(props.project.img)}
        <img src={props.project.img} className="projectImg"/>
        <div className="subText projectSub">{props.project.name + ' - ' + props.project.cost
         + ' - ' + props.project.time}
        </div>
    </div>

export default MainPost;