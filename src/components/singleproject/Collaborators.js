import React from 'react';

let Collaborators = (props) => 
    <div className="postTraits">
        {props.collaborators ?
            <div>This project has {props.collaborators.length}
                {props.collaborators.length === 1 ?
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
                <div>You are a collaborator.</div>
            :
                <button className="button">Collaborate</button>
        :
            null
        }
    </div>

export default Collaborators;