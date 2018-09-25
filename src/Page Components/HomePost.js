import React from 'react';
import { Link } from 'react-router-dom';

let HomePost = (props) =>
    <Link to={"/project/" + props.project.id} className="noDec flexC feature alignC justC">
        <div className="alignC featureText">FEATURED PROJECT</div>
        <div className="flexC">
            <div className="subText projectTitle">{props.project.name}</div>
        </div>
    </Link>

export default HomePost;