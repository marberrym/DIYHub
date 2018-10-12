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
            <div className="collaborators">
                This project has {activecollabs.length}
                {activecollabs.length === 1 ?
                    <span>
                        <span> collaborator.</span>
                        <ul>
                            {activecollabs.map(collab => <li>{`${collab.first_name} ${collab.last_name}`}</li>)}
                        </ul>
                    </span>
                :
                    <span>   
                        <span> collaborators.</span>
                        <ul>
                            {activecollabs.map(collab => <li>{`${collab.first_name} ${collab.last_name}`}</li>)}
                        </ul>
                    </span> 
                } 
            </div>
        :
            <div className="collaborators">This project has no collaborators.</div>
        }
        {props.user.id && props.collaborators && (props.user.id !== props.owner) ?
            props.collaborators.filter(collab => collab.id === props.user.id).length === 1 ?
                props.collaborators.filter(collab => collab.id === props.user.id && collab.collab_status === 1).length === 1 ?
                    <div className="collaborators">You have requested to collaborate.</div>
                :
                    <div className="collaborators">You are a collaborator.</div>
            :
                <button className="collabBtn" onClick={event => {
                    fetch(`${url}/collab/${props.id}`, {
                        headers: {token: localStorage.token}
                    })
                    .then(response => response.json())
                    .then(response => {
                        getPost(props.dispatch, props.id)
                    })
                }
                }>Collaborate</button>
        :
            null
        }
    </div>
}

let CollaboratorsSmart = connect(state => ({owner: state.project.project.owner}) )(Collaborators);
export default CollaboratorsSmart;