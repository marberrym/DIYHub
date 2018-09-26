import React, { Component } from 'react';
import { connect } from 'react-redux';
import BrowseList from '../components/BrowseList';

class BrowseContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: props.projects,
            keyword: '',
            category: '',
            cost: '',
            time: '',

        }
    }

    render() {
        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string})
        return <BrowseList {...this.state} update={updateState}/>;
    }
}


let BrowseContainerSmart = connect(state => ({projects: state.projects}))(BrowseContainer)
export default BrowseContainerSmart;