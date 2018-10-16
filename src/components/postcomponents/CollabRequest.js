import React from 'react';
import { capitalize } from '../singleproject/PostedComment';
import url from '../../globalVars';
import { connect } from 'react-redux';
import { getPost } from '../inject-edit';

let approveCollab = (projectId, userid, method, dispatch) => {
    let data = {
        user_id: userid,
        method: method
    }
    fetch(`${url}/collab/${projectId}`, {
        method: "POST",
        headers: {token: localStorage.token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        if (response.method === 'approved') {
            dispatch({type: "SET_TOAST", toast: {
                type: 'info',
                text: 'You approved the collaboration.'
                }
            })
        } else if (response.method === 'denied') {
            dispatch({type: "SET_TOAST", toast: {
                type: 'error',
                text: 'You denied the collaboration.'
                }
            })
        }
        getPost(dispatch, projectId);
    })
}

let CollabRequest = (props) =>
    <div className="collab-list">
        <div className="collab-name">{`${capitalize(props.collab.first_name)} ${capitalize(props.collab.last_name)}`}</div>
        <button className="collabBtn" onClick={event => 
            approveCollab(props.projectId, props.collab.id, 'approve', props.dispatch)}>Accept</button>
        <button className="collabBtn remove" onClick={event =>
            approveCollab(props.projectId, props.collab.id, 'deny', props.dispatch)}>Deny</button>
    </div>

let CollabRequestSmart = connect(state => ({projectId: state.edit.project.id}))(CollabRequest)
export default CollabRequestSmart;