import React, { Component } from 'react';
import { connect } from 'react-redux';
import StartProject from '../components/postcomponents/StartProject';
import url from '../globalVars';


class PostNewContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
        }
    }

    render() {
        let startProject = () => {
            let data = {
                title: this.state.title,
                description: this.state.description,
                token: localStorage.token
            }
            fetch(`${url}/startproject`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",     
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                this.props.history.push(`/editproject/${response.projectId}`)
            })
        }
        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string})

        return <StartProject updateState={updateState} startProject={startProject}/>
    }
}

let PostNewContainerSmart = connect()(PostNewContainer);
export default PostNewContainerSmart;
