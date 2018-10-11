import React from 'react';
import url from '../globalVars';

export let getPost = (dispatch, postId) => {
  if(localStorage.token) {
    fetch(url + `/project/${postId}`, {
      headers: {token: localStorage.token}
    })
    .then(response => 
      response.json())
    .then(data => {
      dispatch({
        type: "LOAD_PROJECT",
        project: {project: data.project,
          steps: data.steps,
          materials: data.materials,
          comments: data.comments,
          votes: data.votes,
          votestatus: data.votestatus,
          collaborators: data.collaborators
        }
      });
    })
  } else {
    fetch(`${url}/project/${postId}`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: "LOAD_PROJECT",
        project: {project: data.project,
          steps: data.steps,
          materials: data.materials,
          comments: data.comments,
          votes: data.votes,
          votestatus: data.votestatus,
          collaborators: data.collaborators
        }
      });
    })
  }
}

export default (Component) => 
  class Container extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      getPost(this.props.dispatch, this.props.match.params.projectid);
    }
    componentDidUpdate(prevProps) {
      if (this.props.match.params.projectid !== prevProps.match.params.projectid) {
        getPost(this.props.dispatch, this.props.match.params.projectid);
      }
    }
    render() {
      return (
        <Component {...this.props} />
      )
    }
  }

