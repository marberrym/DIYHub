import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectProjects from '../components/inject-projects';
import url from '../globalVars';
import BrowseList from '../components/BrowseList';

class BrowseContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: '',
            category: '',
            cost: '',
            time: '',
        }
        this.getPosts = this.getPosts.bind(this);
    }
    getPosts() {
        fetch(`${url}/project/?q=${this.state.keyword}&cat=${this.state.category}&cost=${this.state.cost}&time=${this.state.time}`)
        .then(response => 
            response.json())
        .then(data => {
            this.props.dispatch({
            type: "LOAD_PROJECTS",
            projects: data.projectList
            });
        })
    }
    componentDidUpdate (prevProps, prevState) {
        if (this.state.keyword !== prevState.keyword || this.state.category !== prevState.category || this.state.cost !== prevState.cost || this.state.time !== prevState.time){
            this.getPosts();
        }
    }

    render() {
        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string})
        return <BrowseList {...this.state} {...this.props} update={updateState}/>;
    }
}


let BrowseContainerSmart = connect(state => ({projects: state.projects}))(injectProjects(BrowseContainer));
export default BrowseContainerSmart;