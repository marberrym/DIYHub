import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import url from '../globalVars';
import Loader from './Loader';


let HomePost = (props) => 
    props.featured ?
        <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} showStatus={false} stopOnHover={false}>
            {props.featured.map(feature => 
                <Link to={`/project/${feature.id}`} key={feature.id}>
                    <div>
                        <img className="banner" src={url + '/uploads/project/' + feature.pic} alt={`Feature Project ${feature.id}`}/>
                        <p className="bannerFeatureHead">FEATURED PROJECTS</p>
                        <div className="bannerTitle">{feature.project_title}</div>
                    </div>
                </Link>
            )}
        </Carousel>
    :
        <Loader />

let HomePostSmart = connect((state) => ({featured: state.featured}))(HomePost)
export default HomePostSmart;