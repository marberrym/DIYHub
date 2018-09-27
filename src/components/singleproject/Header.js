import React from 'react';
import priceRange from '../priceRange';
import timeRange from '../timeRange';

let Header = (props) =>
    <div>
        <div className="mainHead">{props.project_title}</div>
        <div>By {props.first_name} {props.last_name}</div>
        <img className="mainImg" src={props.feature_image_url}/>
        <div>{props.project_description}</div>
        <div>Time: {timeRange[props.time_range]}</div>
        <div>Cost: {priceRange[props.cost_range]}</div>
    </div>

export default Header;