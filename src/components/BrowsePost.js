import React from 'react';
import { Link } from 'react-router-dom';

let BrowsePost = (props) =>
    <div className="flex">
        <Link to={"/project/" + props.project.id} className="flexC projectBG spaceB noDec">
            <img src={props.project.img} className="browseImg" alt={props.project.name}/>
            <div className="subText"> 
                <div>{props.project.name}</div>
                <div className="width100">{props.project.cost}</div>
                <div className="width100">{props.project.time}</div>
            </div>
        </Link>
    </div>

export default BrowsePost;