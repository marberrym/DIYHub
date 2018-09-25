import React from 'react';
import { Link } from 'react-router-dom';

let HomePost = (props) =>
    <Link to={"/project/" + props.project.id} className="flexC fbasis35 projectBG">
        {console.log(props.project.img)}
        <img src={props.project.img} className="projectImg" alt={props.project.name}/>
        <div className="subText projectSub">{props.project.name + ' - ' + props.project.cost
         + ' - ' + props.project.time}
        </div>
    </Link>

export default HomePost;