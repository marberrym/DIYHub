import React from 'react';
import CollabRequest from './CollabRequest';
import Collaborator from './Collaborator';


let CollabPanel = (props) => {
    let activecollabs;
    let collabrequests;
    if (props.collaborators) {
        activecollabs = props.collaborators.filter(collab => collab.collab_status === 2);
        collabrequests = props.collaborators.filter(collab => collab.collab_status === 1);
    } else {
        null;
    }

    return <div className="postProjectFormH">
        <div className="formVert">
            <div>
                {props.collaborators ?
                    activecollabs.length > 0 ?
                        <div>Your project has {activecollabs.length}
                            {activecollabs.length === 1 ?
                                <span> collaborator.</span>
                            :
                                <span> collaborators.</span>}
                        </div>
                    :
                        <div>Your project doesn't have any collaborators.</div>
                :
                    <div>
                        Your project doesn't have any collaborators.
                    </div>
                } 
            </div>
            <div>
                {props.collaborators ?
                    collabrequests.length > 0 ?
                        <div>You have {collabrequests.length}
                            {collabrequests.length === 1 ?
                                <span>
                                    <span> request for collaboration.</span>
                                    <CollabRequest collab={collabrequests[0]}/>
                                </span>
                            :
                                <span> 
                                    <span> requests for collaboration.</span>
                                    {collabrequests.map(collab => <CollabRequest collab={collab}/>)}
                                </span>}
                        </div>
                    :
                        <div>You don't have any requests for collaboration.</div>
                :
                    <div>You don't have any requests for collaboration.</div>
                }
            </div>
        </div>
        {props.collaborators.length > 0 ? 
            <div className="postProjectForm">
                <div className="stepListHeader">Current Collaborators:</div>
                    <div className="stepContainer">
                        {props.collaborators.map(collab => <Collaborator collab={collab}/>)}
                </div>  
            </div>
        :
            null
        }
    </div>
}

export default CollabPanel;