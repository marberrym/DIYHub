import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

let HomePost = (props) => {
    return props.featured.project ?
    <Link to={"/project/" + props.featured} style={{backgroundPositionY: '90%', backgroundImage: 'url(' + props.featured.project.feature_image_url + ')'}} className="noDec flexC feature alignC justC">
        <div className="alignC featureText">FEATURED PROJECT</div>
        <div className="flexC">
            <div className="subText projectTitle">{props.featured.project.project_title}</div>
        </div>
    </Link>
    :
    <p>Loading... plz to waiting...</p>
}

let ConnectedHomePost = connect((state) => ({featured: state.featured}) )(HomePost);

export default ConnectedHomePost;