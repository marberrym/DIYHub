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
            materials: [],
            steptitle: '',
            stepdescription: '',
            materialtitle: '',
            materialquantity: '',
            materialasin: '',
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
            let newStep = [...this.state.steps].concat(currentStep);
            let newCount = this.state.stepcount + 1;
            this.setState({stepcount: newCount});
            this.setState({steps: newStep});
        }
        
        let submitMaterial = () => {
            let currentMaterial = {title: this.state.materialtitle,
                                    quantity: this.state.materialquantity,
                                    amazon_asin: this.state.materialasin}
            let newMaterial = [...this.state.materials].concat(currentMaterial);
            this.setState({materials: newMaterial})
        }

        return <PostForm {...this.state} update={updateState} submitStep={submitStep}
            submitMaterial={submitMaterial}/>
    }
}

export default PostContainer;

