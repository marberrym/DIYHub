import React from 'react';
import Button from '../Button';

let CommentForm = (props) =>
    props.user.id ?
        <form className="formLabel commentSubmit" onSubmit={event => {
            event.preventDefault();
            props.postComment();
            props.update('comment', "")}}>
            Leave a comment:
            <textarea className="commentInput" value={props.comment}
            onChange={event => props.update('comment', event.target.value)}></textarea>
            <Button text="Post Comment"/>
        </form>
    :
        <div className="commentSubmit">Please register and sign in to submit a comment.</div>
    
export default CommentForm;