import React from 'react';
import HomePost from './HomePost';

let PostList = (props) =>
    <div className="flex fwrap justC">
        {props.projects.map(project => <HomePost project={project} key={project.id}/>)}
    </div>

export default PostList;