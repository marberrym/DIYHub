import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import url from '../globalVars';
import NavBar from '../components/NavBar';
import BrowsePost from '../components/BrowsePost';

let getPosts = (dispatch, status) => {
  fetch(`${url}/project/my?my=${status}`, {
    method: 'GET',
    headers: {
      "token": localStorage.getItem('token')
    }
  })
  .then(response => 
    response.json())
  .then(data => {
    dispatch({
      type: "LOAD_PROJECTS",
      projects: data.projectList
    });
  })
}

class MyProjectsScreen extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
      getPosts(this.props.dispatch, this.props.match.params.status);
    }
    componentDidUpdate (prevProps) {
        if (this.props.match.params.status !== prevProps.match.params.status){
            getPosts(this.props.dispatch, this.props.match.params.status);
        }
    }
    render() {
      return (
        <div className="pageLayout">
          <NavBar/>
          <div className="navBar secondNavBar">
            <div className="flex">
              <NavLink
                className="navLink secondLeftNavLink"
                activeClassName="navLinkActive"
                to="/my-projects/all"
              >All</NavLink>
              <NavLink
                className="navLink secondLeftNavLink"
                activeClassName="navLinkActive"
                to="/my-projects/todo"
              >To Do</NavLink>
              <NavLink
                className="navLink secondLeftNavLink"
                activeClassName="navLinkActive"
                to="/my-projects/inprogress"
              >In Progress</NavLink>
              <NavLink
                className="navLink secondLeftNavLink"
                activeClassName="navLinkActive"
                to="/my-projects/completed"
              >Completed</NavLink>
            </div>
            <div className="navRightSide secondRightNav">
              <NavLink
                className="navLink secondRightNavLink"
                activeClassName="navLinkActive"
                to="/my-projects/collaborations"
              >Collaborations</NavLink>
              <NavLink
                className="navLink secondRightNavLink"
                activeClassName="navLinkActive"
                to="/my-projects/unpublished"
              >Unpublished</NavLink>
              <NavLink
                className="navLink secondRightNavLink"
                activeClassName="navLinkActive"
                to="/my-projects/published"
              >Published</NavLink>
            </div>
          </div>
            {this.props.projects ?
              <div className="postList">
                {this.props.projects.map(project => <BrowsePost project={project} key={project.id}/>)}
              </div>
            :
              <div>
                Unfortunately, you don't have any projects saved.
              </div>
            }
        </div>
      );
    }
}


export default connect(state => ({projects: state.projects}))(MyProjectsScreen);