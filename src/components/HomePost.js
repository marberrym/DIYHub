import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

let HomePost = (props) => {
    return props.featured.project ?
    <Link to={"/project/" + props.featured.project.id} style={{backgroundImage: 'url(' + props.featured.project.feature_image_url + ')'}} className="banner">
        <div className="bannerFeatureHead">FEATURED PROJECT</div>
        <div className="bannerTitle">{props.featured.project.project_title}</div>
    </Link>
    :
    <p>Loading... plz to waiting...</p>
}

let ConnectedHomePost = connect((state) => ({featured: state.featured}) )(HomePost);

export default ConnectedHomePost;