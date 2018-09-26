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
        <form className="flexC submitForm subText">
            <Title title={props.title} update={props.update}/>
            <Cost cost={props.cost} update={props.update}/>
            <Time time={props.time} update={props.update}/>
            <Category category={props.category} update={props.update}/>
            <Description description={props.description} update={props.update}/>
            {props.steps ?
                props.steps.map(step => <PostStep step={step}/>)    
            :
                null
            }
            <form className="flexC">
                <StepTitle title={props.currentstep.title} updateStep={props.updateStep}/>
                <StepDescription description={props.currentstep.description} 
                updateStep={props.updateStep}/>
                <Button text="Add Step"/>
            </form>
            
        </form>
    
    </div>

export default PostForm;