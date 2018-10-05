import React from 'react';
import url from '../globalVars';

export let getStats = (dispatch) => {
    fetch(url + `/userstats`, {
      headers: {token: localStorage.token}
    })
    .then(response => 
      response.json())
    .then(data => {
        console.log(data)
        dispatch({
            type: "LOAD_USER_STATS",
            stats: data.stats  
        })
    })
  }

  export default (Component) => 
  class Container extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      getStats(this.props.dispatch, this.props.match.params.projectid, this.setState);
    }
    render() {
      return (
        <Component {...this.props} />
      )
    }
  }

