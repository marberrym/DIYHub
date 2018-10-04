import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditProject from '../components/postcomponents/EditProject';
import injectProject from '../components/inject-edit';
import postProject from '../fetchreqs/postProject';

class EditProjectScreen extends Component {
    constructor(props) {
        super(props)
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
            projectimage: '',
            stepimage: '',
            stepcount: 1,
        }
    }

    render() {
        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string})

        let saveProject = () => {
            let project = {
                token: localStorage.token,
                title: this.state.title,
                feature_image_url: this.state.projectimage,
                time: this.state.time,
                cost: this.state.cost,
                category: this.state.category,
                description: this.state.description,
                steps: this.state.steps,
                materials: this.state.materials,
            }

            postProject(project, this.props.history.push)
            
            this.setState({title: '',
                            projectimage: '',
                            time: '',
                            cost: '',
                            category: '',
                            description: '',
                            steps: [],
                            materials: [],
                        })
            
        }

        let submitStep = () => {
            let currentStep = {steptitle: this.state.steptitle,
                                stepdescription: this.state.stepdescription,
                                step_order: this.state.stepcount,
                                step_image_URL: this.state.stepimage,
                            }
            let newStep = [...this.state.steps].concat(currentStep);
            let newCount = this.state.stepcount + 1;
            
            this.setState({stepcount: newCount,
                            steps: newStep,
                            steptitle: '',
                            stepdescription: '',
                            stepimage: '',});
        }
        
        let submitMaterial = () => {
            let currentMaterial = {title: this.state.materialtitle,
                                    quantity: this.state.materialquantity,
                                    amazon_asin: this.state.materialasin}
            let newMaterial = [...this.state.materials].concat(currentMaterial);
            this.setState({materials: newMaterial,
                            materialtitle: '',
                            materialquantity: '',
                            materialasin: '',})
        }
        return <EditProject {...this.state} update={updateState} save={saveProject}
        submitStep={submitStep} submitMat={submitMaterial}/>
    }
}

let EditProjectScreenSmart = connect(state => ({project: state.project}))(injectProject(EditProjectScreen))
export default EditProjectScreenSmart;
