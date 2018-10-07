import React from 'react';

let PostMat = (props) =>
    <div className="materialList">
        {props.mat.quantity + " " + props.mat.title.slice(0,50) + (props.mat.length > 50 ? '...' : '')}.
    </div>
    

export default PostMat;
