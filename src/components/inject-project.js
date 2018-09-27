import React from 'react';
import url from '../globalVars';

let getPost = (dispatch, postId) => {
  fetch(url + '/project/' + postId)
  .then(response => 
    response.json())
  .then(data => {
    console.log(data)
    dispatch({
      type: "LOAD_PROJECT",
      project: {project: data.project,
        steps: data.steps,
        materials: data.materials
      }
    });
  })
}

export default (Component) => 
  class Container extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      getPosts(this.props.dispatch);
    }
    componentDidUpdate(prevProps) {
      if (this.props.match.params.projectid != prevProps.match.params.projectid) {
        getPosts(this.props.dispatch);
      }
    }
    render() {
      return (
        <Component {...this.props} />
      )
    }
  }