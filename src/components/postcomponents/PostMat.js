import React from 'react';

let PostMat = (props) =>
    <div className="materialList">
        {props.mat.quantity + " " + props.mat.title.slice(0,50) + (props.mat.length > 50 ? '...' : '')}.
        <i className="far fa-times-circle xicon fa-2x" onClick={event =>
            props.deleteMat(props.mat.amazon_asin)
        }></i>
    </div>
    

export default PostMat;
