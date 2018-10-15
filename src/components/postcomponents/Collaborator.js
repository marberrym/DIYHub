import React from 'react';
import { connect } from 'react-redux';
import url from '../../globalVars';
import { getPost } from '../inject-edit';

let deleteCollaborator = (projectId, userid, dispatch) => {
    fetch(`${url}/collab/${projectId}?userid=${userid}`, {
        method: "DELETE",
        headers: {token: localStorage.token}
    })
    .then(response => response.json())
    .then(response => {
        if (response.status === 'success') {
            dispatch({type: "SET_TOAST", toast: {
                type: 'error',
                text: 'You removed the collaborator.'
                }
            })
        }
        getPost(dispatch, projectId)
    })
}

let Collaborator = (props) => 
    props.collab.collab_status === 2 ?
        <div className="collab-list">
            <div>{`${props.collab.first_name} ${props.collab.last_name}`}</div>
            {props.owner === props.user ?
                <button className="collabBtn remove" onClick={event =>
                deleteCollaborator(props.projectId, props.collab.id, props.dispatch)}>Remove</button>
            :
                null
            }
        </div>
    :
        null

let CollaboratorSmart = connect(state => ({projectId: state.edit.project.id,
    user: state.user.id, owner: state.edit.project.owner}))(Collaborator)
export default CollaboratorSmart;