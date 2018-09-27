import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectProjects from '../components/inject-projects'
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
    }

    render() {
        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string})
        return <BrowseList {...this.state} {...this.props} update={updateState}/>;
    }
}


let BrowseContainerSmart = connect(state => ({projects: state.projects}))(injectProjects(BrowseContainer));
export default BrowseContainerSmart;