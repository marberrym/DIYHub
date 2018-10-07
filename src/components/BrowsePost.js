import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import timeRange from './timeRange';
import priceRange from './priceRange';
import url from '../globalVars';

let BrowsePost = (props) =>
    props.project.publish_status ?
        <Link to={`/editproject/${props.project.id}`} className="browsePost">
            <img src={url + '/uploads/project/' + props.project.feature_image_file} className="browseImg" alt={props.project.name}/>
            <div> 
                <div>{props.project.project_title}</div>
                <div>{priceRange[props.project.cost_range]}</div>
                <div>{timeRange[props.project.time_range]}</div>
            </div>
        </Link>
    :
        <Link to={"/project/" + props.project.id} className="browsePost">
            {console.log(props)}
            <img src={url + '/uploads/project/' + props.project.feature_image_file} className="browseImg" alt={props.project.name}/>
            <div> 
                <div>{props.project.project_title}</div>
                <div>{priceRange[props.project.cost_range]}</div>
                <div>{timeRange[props.project.time_range]}</div>
            </div>
        </Link>

let BrowsePostSmart = connect(state =>({user: state.user}))(BrowsePost)


export default BrowsePostSmart;