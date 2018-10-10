import React from 'react';

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
                <button className="button">Collaborate</button>
        :
            null
        }
    </div>
}

export default Collaborators;