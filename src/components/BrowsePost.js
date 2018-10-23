import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import timeRange from './timeRange';
import priceRange from './priceRange';
import url from '../globalVars';
import { withRouter } from 'react-router-dom';

let BrowsePost = (props) =>
    props.project.publish_status ?
        <Link to={`/editproject/${props.project.id}`} className="browsePost">
            <div className="browseImg-container">
                <img src={url + '/uploads/project/' + props.project.feature_image_file} className="browseImg" alt={props.project.name}/>
            </div>
            <div className="postInfoCard"> 
                <div className="collabTab">{props.project.project_title}
                    {props.project.requests > 0 ?
                        <div className="cardNotification">
                            <span className="collabNotification">{props.project.requests}</span>
                        </div>
                    :
                        null
                    }
                </div>
                <div>{priceRange[props.project.cost_range]}</div>
                <div>{timeRange[props.project.time_range]}</div>
            </div>
        </Link>
    :
        <div>
            <Link to={"/project/" + props.project.id} className="browsePost">
                <div className="browseImg-container">
                    <img src={url + '/uploads/project/' + props.project.feature_image_file} className="browseImg" alt={props.project.name}/>
                </div>
                <div className="postInfoCard"> 
                    <div>{props.project.project_title}</div>
                    <div>{priceRange[props.project.cost_range]}</div>
                    <div>{timeRange[props.project.time_range]}</div>
                </div>
            </Link>
            {props.user.admin === 1 ?
                <button className="button remove" onClick={ event => {
                    fetch(`${url}/project/${props.project.id}`, {
                        headers: {token: localStorage.token},
                        method: "DELETE"
                    })
                    .then(response => response.json())
                    .then(response => {
                        if (response.status === 'success') {
                            props.dispatch({
                                type: 'SET_TOAST',
                                toast: {
                                    text: 'Project Deleted.',
                                    type: 'error'
                                }
                            })
                            props.dispatch({
                                type: 'REMOVE_PROJECT',
                                id: props.project.id
                            })
                        }
                        console.log(response)
                    })
                }
                }>Delete</button>
            :
                null
            }
        </div>

let BrowsePostSmart = connect(state =>({user: state.user}))(withRouter(BrowsePost))


export default BrowsePostSmart;