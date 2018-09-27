import React from 'react';
import url from '../globalVars';

let getFeature = (dispatch) => {
    fetch(url + '/project/featured')
    .then(response => 
      response.json())
    .then(data => {
      console.log(data)
      dispatch({
        type: "LOAD_FEATURED",
        featured: {project_title: data.project.project_title,
                    project_image: data.project.feature_image_url,}
      });
    })
  }

export default (Component) => 
  class Container extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      getFeature(this.props.dispatch);
    }
    render() {
      return (
        <Component {...this.props} />
      )
    }
  }

