import React from 'react';
import url from '../../globalVars';

let Banner = (props) =>
    <div className="banner-container">
        <img className="banner" src={url + '/uploads/project/' + props.feature_image_file}/>
        <div className="bannerMain">{props.project_title}</div>
    </div>

export default Banner;