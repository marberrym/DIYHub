import React from 'react';
import NavBar from './NavBar';
import BrowseParams from './BrowseParams';
import BrowsePost from './BrowsePost';

let BrowseList = (props) =>
    <div className="flexC fwrap justC">
        <NavBar/>
        <BrowseParams {...props}/>
        {props.projects.map(project => <BrowsePost project={project} key={project.id}/>)}
    </div>

export default BrowseList;