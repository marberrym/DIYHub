import React from 'react';
import url from '../../globalVars';

let capitalize = (string) => {
    let name = string[0].toUpperCase() + string.slice(1);
    return name;
}

let PostedComment = (props) =>
    <div className="commentBox">
        <img className="commentAvatar" src={`${url}/uploads/avatar/${props.comment.avatar}`}/>
        <div>
            <div>{capitalize(props.comment.name)} commented:</div>
            <div>{props.comment.comment}</div>
            <div>{props.comment.creation_date}</div>
        </div>
    </div>


export default PostedComment;