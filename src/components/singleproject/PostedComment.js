import React from 'react';

let PostedComment = (props) =>
    <div>
        <div>{props.comment.name} commented:</div>
        <div>{props.comment.comment}</div>
        <div>{props.comment.creation_date}</div>
    </div>

export default PostedComment;