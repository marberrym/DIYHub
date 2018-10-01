import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

let HomePost = (props) => {
    return <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true}>
        <div>
            <img className="banner" src="images/DIYchess.jpg" />
            <div className="bannerFeatureHead">FEATURED PROJECT</div>
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img className="banner" src="images/DIYchess.jpg"/>
            <div className="bannerFeatureHead">FEATURED PROJECT</div>
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img className="banner" src="images/DIYchess.jpg" />
            <div className="bannerFeatureHead">FEATURED PROJECT</div>
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img className="banner" src="images/DIYchess.jpg" />
            <div className="bannerFeatureHead">FEATURED PROJECT</div>
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img className="banner" src="images/DIYchess.jpg" />
            <div className="bannerFeatureHead">FEATURED PROJECT</div>
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img className="banner" src="images/DIYchess.jpg" />
            <div className="bannerFeatureHead">FEATURED PROJECT</div>
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
    // return props.featured.project ?
    // <Link to={"/project/" + props.featured.project.id} style={{backgroundImage: 'url(' + props.featured.project.feature_image_url + ')'}} className="banner">
    //     <div className="bannerFeatureHead">FEATURED PROJECT</div>
    //     <div className="bannerTitle">{props.featured.project.project_title}</div>
    // </Link>
    // :
    // <p>Loading... plz to waiting...</p>
}

let ConnectedHomePost = connect((state) => ({featured: state.featured}) )(HomePost);

export default ConnectedHomePost;