import React from 'react';

let Banner = (props) =>
    <div style={{backgroundPositionY: '70%', backgroundImage: 'url(' + props.feature_image_url + ')'}} className="banner">
        <div className="pageLayout">
            <div className="bannerTitle">{props.project_title}</div>
        </div>
    </div>

export default Banner;