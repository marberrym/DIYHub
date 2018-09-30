import React, { Component } from 'react';
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
    console.log(data)
    dispatch({
      type: "LOAD_PROJECTS",
      projects: data.projectList
    });
  })
}

class MyProjectsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: 'inprogress'
        }
    }
    componentDidMount() {
      getPosts(this.props.dispatch, this.state.status);
    }
    componentDidUpdate (prevProps, prevState) {
        if (this.state.status !== prevState.status){
            getPosts(this.props.dispatch, this.state.status);
        }
    }
    render() {
      return (
        <div className="flexC fwrap justC">
          <NavBar/>
          <div className="navBar">
              <div className="flex">
                  <div
                    className="noDec navLink myprojects-filter-all"
                    onClick={() => {
                      this.setState(() => ({
                        status: 'all'
                      }))
                    }}>All</div>
                  <div
                    className="noDec navLink myprojects-filter-todo"
                    onClick={() => {
                      this.setState(() => ({
                        status: 'todo'
                      }))
                    }}>To Do</div>
                  <div
                    className="noDec navLink myprojects-filter-inprogress selected"
                    onClick={() => {
                      this.setState(() => ({
                        status: 'inprogress'
                      }))
                    }}>In Progress</div>
                  <div
                    className="noDec navLink myprojects-filter-completed"
                    onClick={() => {
                      this.setState(() => ({
                        status: 'completed'
                      }))
                    }}>Completed</div>
              </div>
          </div>
            {this.props.porjects ?
              <div className="flex fwrap justC alignC">
                {this.props.projects.map(project => <BrowsePost project={project} key={project.id}/>)}
              </div>
            :
              <div>
                Oops, you don't have any projects saved!
              </div>
            }
        </div>
      );
    }
}


export default connect(state => ({projects: state.projects}))(MyProjectsScreen);