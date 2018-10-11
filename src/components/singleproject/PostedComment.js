import React from 'react';
import url from '../../globalVars';
import moment from 'moment';

let capitalize = (string) => {
    let name = string[0].toUpperCase() + string.slice(1);
    return name;
}

export { capitalize };

let PostedComment = (props) =>
    <div className="commentBox">
        <img className="commentAvatar" src={`${url}/uploads/avatar/${props.comment.avatar}`} alt="avatar"/>
        <div>
            <div className="commentHead">{capitalize(props.comment.name)} commented:</div>
            <div className="commentContent">{props.comment.comment}</div>
            <div className="commentTime">{moment(props.comment.creation_date).format('MMMM Do YY h:mm A')}</div>
        </div>
    </div>


export default PostedComment;