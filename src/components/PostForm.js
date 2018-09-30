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
import MaterialItem from './postcomponents/MaterialItem';
import MaterialQuantity from './postcomponents/MaterialQuantity';
import MaterialASIN from './postcomponents/MaterialASIN'
import PostMat from './postcomponents/PostMat';
import ProjectImage from './postcomponents/ProjectImage';
import StepImage from './postcomponents/StepImage';

let PostForm = (props) =>
    <div className="pageLayout">
        <NavBar/>
        <HeadLogo/>
        <div className="pageLayout width100 alignC submitFlex">
            <form className="pageLayout newPostForm subText" onSubmit={event => props.submitProject()}>
                <div className="flex">
                    <div className="pageLayout width80">
                        <Title title={props.title} update={props.update}/>
                        <ProjectImage title={props.projectimage} update={props.update} text="Image URL: "/>
                        <Cost cost={props.cost} update={props.update}/>
                        <Time time={props.time} update={props.update}/>
                        <Category category={props.category} update={props.update}/>
                    </div>
                    <Description className="width80" description={props.description} update={props.update}/>
                </div>
                <Button text="Submit Project"/>
            </form>
            <form className="flex newPostForm subText width80 justC" onSubmit={props.submitStep}>
                <div className="width45 pageLayout">
                    <StepTitle title={props.steptitle} update={props.update} text="Step Title: "/>
                    <StepImage title={props.stepimage} update={props.update} text="Image URL: "/>
                    <StepDescription description={props.stepdescription} 
                        update={props.update} text="Step Description: " type="step"/>
                    <Button text="Add Step"/>
                </div>
                <div className="pageLayout newPostForm subText width45">
                    <div>Current steps:</div>
                    {props.steps ?
                        props.steps.map(step => <PostStep step={step} key={step.stepcount}/>)    
                    :
                        null
                    }
                </div>
            </form>
            <form className="flex newPostForm subText width80 justC" onSubmit={props.submitMaterial}>
                <div className="width45 pageLayout">
                    <MaterialItem title={props.materialtitle} update={props.update} text="Material Title: "/>
                    <MaterialQuantity title={props.materialquantity} update={props.update} text="Material Quantity: "/>
                    <MaterialASIN title={props.materialasin} update={props.update} text="Material Amazon ASIN: "/>
                    <Button text="Add Material"/>
                </div>
                <div className="pageLayout newPostForm subText width45">
                    <div>Current Materials:</div>
                    {props.materials ?
                        props.materials.map(mat => <PostMat mat={mat}/>)    
                    :
                        null
                    }
                </div>
            </form>
            
        </div>
    </div>

export default PostForm;