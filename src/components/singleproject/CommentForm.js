import React from 'react';
import Button from '../Button';

let CommentForm = (props) =>
    <form onSubmit={event => {
        event.preventDefault()
        props.postComment()
        props.update('comment', "")}}>
        Leave a comment:
        <textarea value={props.comment}
        onChange={event => props.update('comment', event.target.value)}></textarea>
        <Button text="Post Comment"/>
    </form>
    
export default CommentForm;