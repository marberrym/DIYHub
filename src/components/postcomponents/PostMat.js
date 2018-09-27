import React from 'react';

let PostMat = (props) =>
    <li>
        {props.mat.quantity + " " + props.mat.title}.
        <div>{props.mat.amazon_asin}</div>
    </li>

export default PostMat;
