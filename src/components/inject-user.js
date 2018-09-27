import React from 'react';
import url from '../globalVars';

let getUser = (dispatch, token) => {
  fetch(url + '/validate', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",     
    },
    body: JSON.stringify({token})
  })
  .then(response => response.json())
  .then(data => {
    console.log({name: data.name,
      id: data.id})
    dispatch({
      type: "ASSIGN_USER",
      package: {name: data.name,
      id: data.id}
    });
  })
}

export default (Component) => 
  class Container extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      getUser(this.props.dispatch, localStorage.getItem('token'));
    }
    render() {
      return (
        <Component {...this.props} />
      )
    }
  }