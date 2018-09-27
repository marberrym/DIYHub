import React from 'react';
import { Link } from 'react-router-dom';
import timeRange from './timeRange';
import priceRange from './priceRange';

let BrowsePost = (props) =>
    <div className="flex">
        <Link to={"/project/" + props.project.id} className="flexC projectBG spaceB noDec">
            <img src={props.project.feature_image_url} className="browseImg" alt={props.project.name}/>
            <div className="subText"> 
                <div>{props.project.project_title}</div>
                <div className="width100">{priceRange[props.project.cost_range]}</div>
                <div className="width100">{timeRange[props.project.time_range]}</div>
            </div>
        </Link>
    </div>

export default BrowsePost;