import React, { Component } from 'react';
import CommentForm from './CommentForm';
import { connect } from 'react-redux';
import url from '../../globalVars';

class CommentFormContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            comment: ""
        }
    }

    render() {
        let postComment = () => {
            let newComment = {
                token: localStorage.token,
                project_id: this.props.projectID,
                user_id: this.props.user.id,
                comment: this.state.comment
            }
            fetch(`${url}/comment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",     
                },
                body: JSON.stringify(newComment)
            })
            .then(response => console.log(response))
            console.log(newComment);
        }
        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string});

        return <CommentForm {...this.state} postComment={postComment} update={updateState}/>
    }
}

let CommentFormContainerSmart = connect(state => ({user: state.user}))(CommentFormContainer)
export default CommentFormContainerSmart;

