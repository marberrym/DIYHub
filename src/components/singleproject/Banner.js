import React from 'react';

let Banner = (props) =>
    <div>
        <img className="banner" src={props.feature_image_url}/>
        <div className="bannerMain">{props.project_title}</div>
    </div>

export default Banner;