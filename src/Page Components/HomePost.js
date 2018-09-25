import React from 'react';
import { Link } from 'react-router-dom';

let HomePost = (props) =>
    <div className="flexC width80">
        <div className="alignC featureText">Featured Project</div>
        <Link to={"/project/" + props.project.id} className="flexC fbasis35 projectBG noDec">
            {console.log(props.project.img)}
            <img src={props.project.img} className="projectImg" alt={props.project.name}/>
            <div className="subText projectSub">{props.project.name}</div>
            <div className="subText projectSub">{props.project.cost}</div>
            <div className="subText projectSub">{props.project.time}</div>
        </Link>
    </div>

export default HomePost;