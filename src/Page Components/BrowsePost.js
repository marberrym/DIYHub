import React from 'react';
import { Link } from 'react-router-dom';

let BrowsePost = (props) =>
    <div className="flexC width80">
        <Link to={"/project/" + props.project.id} className="flex browseBg spaceB">
            <img src={props.project.img} className="browseImg" alt={props.project.name}/>
            <div className="subText flexC width100">
                <div className="flex spaceB width100">
                    <div>{props.project.name}</div>
                    <div>Submitted by Jaydoe</div>
                </div>
                <div className="width100">{props.project.cost}</div>
                <div className="width100">{props.project.time}</div>
            </div>
        </Link>
    </div>

export default BrowsePost;