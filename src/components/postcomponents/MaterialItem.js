import React from 'react';

let MaterialItem = (props) =>
    <div className="material-title">{props.title || 'Search for a material'}</div>;

export default MaterialItem;