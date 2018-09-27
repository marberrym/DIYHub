import React from 'react';
import HeadLogo from './HeadLogo';
import NavBar from './NavBar';
import Cost from './filtercomponents/Cost';
import Category from './filtercomponents/Category';
import Time from './filtercomponents/Time';
import Title from './postcomponents/Title';
import Description from './postcomponents/Description';
import StepTitle from './postcomponents/StepTitle';
import PostStep from './postcomponents/PostStep';
import Button from './Button';
import StepDescription from './postcomponents/StepDescription';

let PostForm = (props) =>
    <div className="flexC">
        <NavBar/>
        <HeadLogo/>
        <div className="flexC width100 alignC submitFlex">
            <form className="flexC submitForm subText">
                <div className="flex">
                    <div className="flexC width80">
                        <Title title={props.title} update={props.update}/>
                        <Cost cost={props.cost} update={props.update}/>
                        <Time time={props.time} update={props.update}/>
                        <Category category={props.category} update={props.update}/>
                    </div>
                    <Description className="width80" description={props.description} update={props.update}/>
                </div>
                <Button text="Submit Project"/>
            </form>
            <form className="flex submitForm subText width80 justC" onSubmit={props.submitStep}>
                <div className="width45 flexC">
                    <StepTitle title={props.steptitle} update={props.update} text="Step Title: " 
                        type="mat"/>
                    <StepDescription description={props.stepdescription} 
                        update={props.update} text="Step Description: " type="step"/>
                    <Button text="Add Step"/>
                </div>
                <div className="flexC submitForm subText width45">
                    <div>Current steps:</div>
                    {props.steps ?
                        props.steps.map(step => <PostStep step={step} key={step.stepcount}/>)    
                    :
                        null
                    }
                </div>
            </form>
            <form className="flex submitForm subText width80 justC" onSubmit={props.submitMaterial}>
                <div className="width45 flexC">
                    <StepTitle title={props.materialtitle} update={props.update} text="Material Title: " type="mat"/>
                    <StepDescription description={props.materialdescription} 
                    update={props.update} text="Material Description: " type="mat"/>
                    <Button text="Add Step"/>
                </div>
                <div className="flexC submitForm subText width45">
                    <div>Current steps:</div>
                    {props.materials ?
                        props.materials.map(material => <PostStep material={material}/>)    
                    :
                        null
                    }
                </div>
            </form>
            
        </div>
    </div>

export default PostForm;