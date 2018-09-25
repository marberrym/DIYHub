import React from 'react';
import MainPost from './MainPost';

let PostList = (props) =>
    <div className="flex fwrap justC">
        {props.projects.map(project => <MainPost project={project}/>)}
    </div>

export default PostList;