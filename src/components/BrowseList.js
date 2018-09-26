import React from 'react';
import NavBar from './NavBar';
import BrowseParams from './BrowseParams';
import BrowsePost from './BrowsePost';

let BrowseList = (props) =>
    <div className="flexC fwrap justC">
        <NavBar/>
        <BrowseParams {...props}/>
            <div className="flex fwrap justC alignC">
                {props.projects.map(project => <BrowsePost project={project} key={project.id}/>)}
            </div>
    </div>

export default BrowseList;