import React from 'react';
import url from '../globalVars';

export let getPost = (dispatch, postId) => {
  fetch(url + `/editproject/${postId}`, {
    headers: {token: localStorage.token}
  })
  .then(response => 
    response.json())
  .then(data => {
    dispatch({
      type: "LOAD_EDIT",
      edit: {project: data.project,
        steps: data.steps,
        materials: data.materials
      }
    })
  })
  
}

export default (Component) => 
  class Container extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      getPost(this.props.dispatch, this.props.match.params.projectid, this.setState);
    }
    componentDidUpdate(prevProps) {
      if (this.props.match.params.projectid !== prevProps.match.params.projectid) {
        getPost(this.props.dispatch, this.props.match.params.projectid, this.setState);
      }
    }
    render() {
      return (
        <Component {...this.props} />
      )
    }
  }