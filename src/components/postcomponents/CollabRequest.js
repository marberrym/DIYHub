import React from 'react';
import { capitalize } from '../singleproject/PostedComment';
import url from '../../globalVars';
import { connect } from 'react-redux';

let approveCollab = (projectId, userid, method) => {
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
    .then(response => console.log(response))
}

let CollabRequest = (props) =>
    <div>{`${capitalize(props.collab.first_name)} ${capitalize(props.collab.last_name)}`}
        <button className="collabBtn" onClick={event => 
            approveCollab(props.projectId, props.collab.id, 'approve')}>Accept</button>
        <button className="collabBtn remove" onClick={event =>
            approveCollab(props.projectId, props.collab.id, 'deny')}>Deny</button>
    </div>

let CollabRequestSmart = connect(state => ({projectId: state.edit.project.id}))(CollabRequest)
export default CollabRequestSmart;