import React from 'react';
import HeadLogo from './HeadLogo';
import NavBar from './NavBar';
import Cost from './FilterComponents/Cost';
import Category from './FilterComponents/Category';
import Time from './FilterComponents/Time';
import Title from './Post Components/Title';
import Description from './Post Components/Description';
import StepTitle from './Post Components/StepTitle';
import PostStep from './Post Components/PostStep';
import Button from './Button';
import StepDescription from './Post Components/StepDescription';

let PostForm = (props) =>
    <div className="flexC">
        <NavBar/>
        <HeadLogo/>
        <div className="flex">
            <form className="flexC submitForm subText">
                <Title title={props.title} update={props.update}/>
                <Cost cost={props.cost} update={props.update}/>
                <Time time={props.time} update={props.update}/>
                <Category category={props.category} update={props.update}/>
                <Description description={props.description} update={props.update}/>
            </form>
            <div className="flexC submitForm subText">
                <div>Current steps:</div>
                {props.steps ?
                    props.steps.map(step => <PostStep step={step} key={step.stepcount}/>)    
                :
                    null
                }
            </div>
            <form className="flexC submitForm subText" onSubmit={props.submitStep}>
                <StepTitle title={props.steptitle} update={props.update}/>
                <StepDescription description={props.stepdescription} 
                update={props.update}/>
                <Button text="Add Step"/>
            </form>
        </div>
    </div>

export default PostForm;