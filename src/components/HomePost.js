import React from 'react';
import { Link } from 'react-router-dom';
import fetchProducts from 'fetchfeatured';

let HomePost = (props) =>
    <Link to={"/project/" + props.featured.id} className="noDec flexC feature alignC justC">
        <div className="alignC featureText">FEATURED PROJECT</div>
        <div className="flexC">
            <div className="subText projectTitle">{props.featured.name}</div>
        </div>
    </Link>

export default connect (
        (state) =>
        ({featured: state.featured}) )(fetchFeatured(HomePost))