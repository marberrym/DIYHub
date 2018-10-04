import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import timeRange from './timeRange';
import priceRange from './priceRange';

let BrowsePost = (props) =>
    props.project.publish_status ?
        <Link to={`/editproject/${props.project.id}`} className="browsePost">
            <img src={props.project.feature_image_url} className="browseImg" alt={props.project.name}/>
            <div> 
                <div>{props.project.project_title}</div>
                <div>{priceRange[props.project.cost_range]}</div>
                <div>{timeRange[props.project.time_range]}</div>
            </div>
        </Link>
    :
        <Link to={"/project/" + props.project.id} className="browsePost">
            {console.log(props)}
            <img src={props.project.feature_image_url} className="browseImg" alt={props.project.name}/>
            <div> 
                <div>{props.project.project_title}</div>
                <div>{priceRange[props.project.cost_range]}</div>
                <div>{timeRange[props.project.time_range]}</div>
            </div>
        </Link>

let BrowsePostSmart = connect(state =>({user: state.user}))(BrowsePost)


export default BrowsePostSmart;