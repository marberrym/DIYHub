import React from 'react';
import url from '../globalVars';

let getPosts = (dispatch) => {
  fetch(url + '/project')
  .then(response => 
    response.json())
  .then(data => {
    console.log(data)
    dispatch({
      type: "LOAD_PROJECTS",
      projects: data.projectList
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
    render() {
      return (
        <Component {...this.props} />
      )
    }
  }