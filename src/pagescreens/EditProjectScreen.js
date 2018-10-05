import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditProject from '../components/postcomponents/EditProject';
import injectProject from '../components/inject-edit';
import url from '../globalVars';

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
            materialSearch: '',
            projectimage: '',
            stepimage: '',
            stepcount: 1,
            modalIsOpen: false
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.edit !== prevProps.edit) {
            this.setState({title: this.props.edit.project.project_title,
                    projectimage: this.props.edit.project.feature_image_url,
                    cost: this.props.edit.project.cost_range||0,
                    time: this.props.edit.project.time_range||0,
                    description: this.props.edit.project.project_description,
                    steps: this.props.edit.steps,
                    materials: this.props.edit.materials,
                    stepcount: this.props.edit.steps.length + 1});
        }
    }

    render() {
        let searchAmazon = (query) => {
            fetch(`${url}/amazon?q=${query}`)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    openModal();
                    this.props.dispatch({
                        type: 'LOAD_AMAZON',
                        items: data.items
                    })
                } else {
                    this.props.dispatch({
                        type: 'SET_TOAST',
                        toast: {
                            text: 'Problem reaching amazon!',
                            type: 'error'
                        }
                    });
                }
            })
            .catch(error => {
                this.props.dispatch({
                    type: 'SET_TOAST',
                    toast: {
                        text: 'Problem reaching amazon!',
                        type: 'error'
                    }
                });
            })
        }
        let openModal = () => {
            this.setState({modalIsOpen: true});
        }
        let closeModal = () => {
            this.setState({modalIsOpen: false});
        }
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

            fetch(`${url}/editproject/${this.props.edit.project.id}`, {
                method: "POST",
                headers: {token: localStorage.token,
                    "Content-Type": "application/json; charset=utf-8"},
                body: JSON.stringify(project)
            })
            .then(response => response.json())
            .then(response => console.log(response))
            
        }
        let editStep = (count, title, description, image) => {
            this.setState({stepcount: count,
                            steptitle: title,
                            stepdescription: description,
                            stepimage: image
                        })
        }

        let submitStep = () => {
            let currentStep = {step_title: this.state.steptitle,
                                step_text: this.state.stepdescription,
                                step_order: this.state.stepcount,
                                step_image_URL: this.state.stepimage,
                            }
            let newStep = [...this.state.steps].concat(currentStep);
            let newCount = this.state.steps.length + 1;
            
            this.setState({stepcount: newCount,
                            steps: newStep,
                            steptitle: '',
                            stepdescription: '',
                            stepimage: '',});
        }

        let publishProject = () => {
            fetch(`${url}/publishproject/${this.props.edit.project.id}`, {
                method: "GET",
                headers: {token: localStorage.token,
                    "Content-Type": "application/json; charset=utf-8"}
            })
            .then(response => response.json())
            .then(response => console.log(response))
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
        return (
            <EditProject
                {...this.state}
                update={updateState}
                save={saveProject}
                submitStep={submitStep}
                submitMat={submitMaterial}
                project={this.props.edit}
                editStep={editStep}
                publish={publishProject}
                amazonSearch={this.props.amazonSearch}
                searchAmazon={searchAmazon}
                openModal={openModal}
                closeModal={closeModal}
            />
        )
    }
}
let mapStateToProps = (state) => ({
    edit: state.edit,
    amazonSearch: state.amazonSearch
})

let EditProjectScreenSmart = connect(mapStateToProps)(injectProject(EditProjectScreen))
export default EditProjectScreenSmart;
