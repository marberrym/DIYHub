import React, { Component } from 'react';
import PostForm from '../Page Components/PostForm';

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            cost: '',
            category: '',
            time: '',
            description: '',
            steps: [],
            currentstep: {
                title: '',
                description: '',
            }
        }
    }
    render() {
        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string})

        let updateStep = (keyvalue, string) =>
            this.setState({currentstep: {[keyvalue]: string}})

        return <PostForm {...this.state} update={updateState} updateStep={updateStep}/>
    }
}

export default PostContainer;

