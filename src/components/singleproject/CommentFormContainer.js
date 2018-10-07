import React, { Component } from 'react';
import CommentForm from './CommentForm';
import { connect } from 'react-redux';
import url from '../../globalVars';
import { getPost } from '../inject-project';

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
                comment: this.state.comment,
                avatar: this.props.user.avatar,
            }
            fetch(`${url}/comment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",     
                },
                body: JSON.stringify(newComment)
            })
            .then(response => {console.log(response)
                getPost(this.props.dispatch, this.props.projectID)
            })
        }
        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string});

        return <CommentForm {...this.state} {...this.props} postComment={postComment} update={updateState}/>
    }
}

let CommentFormContainerSmart = connect(state => ({user: state.user}))(CommentFormContainer)
export default CommentFormContainerSmart;

