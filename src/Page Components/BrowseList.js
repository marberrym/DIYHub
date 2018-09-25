import React from 'react';
import HomePost from './HomePost';
import NavBar from './NavBar';

let BrowseList = (props) =>
    <div className="flex fwrap justC">
        <NavBar/>
        {props.projects.map(project => <HomePost project={project} key={project.id}/>)}
    </div>

export default BrowseList;