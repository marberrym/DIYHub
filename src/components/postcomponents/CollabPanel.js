import React from 'react';
import CollabRequest from './CollabRequest';
import Collaborator from './Collaborator';
import { connect } from 'react-redux';


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
                        <div>This project has {activecollabs.length}
                            {activecollabs.length === 1 ?
                                <span> collaborator.</span>
                            :
                                <span> collaborators.</span>}
                        </div>
                    :
                        <div>This project doesn't have any collaborators.</div>
                :
                    <div>
                        This project doesn't have any collaborators.
                    </div>
                } 
            </div>
            <div>
                {props.user === props.owner ?
                    collabrequests.length > 0 ?
                        <div>There is {collabrequests.length}
                            {collabrequests.length === 0 ?
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
                        <div>There are no requests for collaboration.</div>
                :
                    null
                }
            </div>
        </div>
        <div className="formVert">
            <div className="postProjectForm">
                <div className="stepListHeader">Project Creator:</div>
                <div className="stepContainer">
                    <div className="stepList">
                        {`${props.owner_first} ${props.owner_last}`}
                    </div>
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
    </div>
}

let CollabPanelSmart = connect(state => ({user: state.user.id, owner: state.edit.project.owner,
    owner_first: state.edit.project.first_name, owner_last: state.edit.project.last_name}))(CollabPanel)
export default CollabPanelSmart;