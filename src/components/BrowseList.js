import React from 'react';
import NavBar from './NavBar';
import BrowseParams from './BrowseParams';
import BrowsePost from './BrowsePost';

let BrowseList = (props) =>
    <div className="pageLayout">
        <NavBar/>
        <BrowseParams {...props}/>
            <div className="postList">
                {props.projects.map(project => <BrowsePost project={project} key={project.id}/>)}
            </div>
    </div>

export default BrowseList;