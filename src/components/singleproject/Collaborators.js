import React from 'react';
import { getPost } from '../inject-project';
import url from '../../globalVars';
import { connect } from 'react-redux';

let Collaborators = (props) => {
    let activecollabs;
    if (props.collaborators) {
        activecollabs = props.collaborators.filter(collab => collab.collab_status === 2);
    } else {
        null;
    }

    return <div className="postTraits">
        {props.collaborators ?
            <div>
                This project has {activecollabs.length}
                {activecollabs.length === 1 ?
                    <span> collaborator.</span>
                :
                    <span> collaborators.</span>
                } 
            </div>
        :
            <div>This project has no collaborators.</div>
        }
        {props.user.id && props.collaborators ?
            props.collaborators.filter(collab => collab.id === props.user.id).length === 1 ?
                props.collaborators.filter(collab => collab.id === props.user.id && collab.collab_status === 1).length === 1 ?
                    <div>You have requested to collaborate.</div>
                :
                    <div>You are a collaborator.</div>
            :
                <button className="button" onClick={event => {
                    fetch(`${url}/collab/${props.id}`, {
                        headers: {token: localStorage.token}
                    })
                    .then(response => response.json())
                    .then(response => {
                        console.log(response);
                        getPost(props.dispatch, props.id)
                    })
                }
                }>Collaborate</button>
        :
            null
        }
    </div>
}

let CollaboratorsSmart = connect()(Collaborators);
export default CollaboratorsSmart;