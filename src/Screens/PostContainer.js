import React, { Component } from 'react';
import PostForm from '../components/PostForm';

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
            steptitle: '',
            stepdescription: '',
            stepcount: 1,
        }
    }
    render() {
        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string})

        let submitStep = () => {
            let currentStep = {title: this.state.steptitle,
                                description: this.state.stepdescription,
                                stepcount: this.state.stepcount,}
            let newStep = [...this.state.steps].concat(currentStep)
            let newCount = this.state.stepcount += 1;
            this.setState({stepcount: newCount});
            this.setState({steps: newStep});
        }

        return <PostForm {...this.state} update={updateState} submitStep={submitStep}/>
    }
}

export default PostContainer;

