import React from 'react';
import NavBar from '../NavBar';
import HeadLogo from '../HeadLogo';
import Title from './Title';
import Description from './Description';
import Button from '../Button';

let StartProject = (props) =>
    <div className="pageLayout">
        <NavBar/>
        <HeadLogo/>
        <form className="postProjectForm" onSubmit={event => {
            event.preventDefault();
            props.startProject();
        }}>
            <div className="topPostSection">
                <div className="formVert">
                    <Title title={props.title} update={props.updateState}/>
                    <Description description={props.description} update={props.updateState}/>
                </div>
            </div>
            <Button text="Start Project"/>
        </form>
    </div>

export default StartProject;
    