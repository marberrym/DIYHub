import React from 'react';
import Button from '../Button';

let CommentForm = (props) =>
    props.user.id ?
        <form className="commentSubmit" onSubmit={event => {
            event.preventDefault()
            props.postComment()
            props.update('comment', "")}}>
            Leave a comment:
            <textarea className="formInputField" value={props.comment}
            onChange={event => props.update('comment', event.target.value)}></textarea>
            <Button text="Post Comment"/>
        </form>
    :
        <div className="commentSubmit">Uh oh, you must be logged in to submit a comment</div>
    
export default CommentForm;