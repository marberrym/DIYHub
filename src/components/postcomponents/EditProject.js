import React from 'react';
import NavBarSmart from '../NavBar';
import HeadLogo from '../HeadLogo';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import StepTitle from './StepTitle';
import StepImage from './StepImage';
import StepDescription from './StepDescription';
import Button from '../Button';
import PostStep from './PostStep';
import MaterialItem from './MaterialItem';
import MaterialQuantity from './MaterialQuantity';
import MaterialSearch from './MaterialSearch';
import MaterialModal from './MaterialModal';
import PostMat from './PostMat';
import Title from './Title';
import ProjectImage from './ProjectImage';
import Cost from '../filtercomponents/Cost';
import Time from '../filtercomponents/Time';
import Description from './Description';
import ImageUploader from './FileInput';

let EditProject = (props) =>
    <div className="pageLayout">
        <NavBarSmart />
        <HeadLogo />
        <Tabs selectedTabClassName="selectedTab" className="tabSection">
            <TabList className="tabs">
                <Tab className="tab">
                    Project Overview
                </Tab>
                <Tab className="tab">
                    Steps
                </Tab>
                <Tab className="tab">
                    Materials
                </Tab>
            </TabList>
            <TabPanel>
                <form className="postProjectFormH" onSubmit={event => {
                    event.preventDefault()
                    props.submitProject()
                }}>
                    <div className="formVert">
                        <Title title={props.title} update={props.update}/>
                        <ProjectImage update={props.update} image={props.projectimage}/>
                        <Cost cost={props.cost} update={props.update}/>
                        <Time time={props.time} update={props.update}/>
                    </div>
                    <Description description={props.description} update={props.update}/>  
                </form>
            </TabPanel>
            <TabPanel>
                <form className="postProjectFormH" onSubmit={event => {
                    event.preventDefault();
                    props.submitStep();
                }}>
                    <div className="formVert">
                        <StepTitle title={props.steptitle} update={props.update} text="Step Title: "/>
                        <StepImage image={props.stepimage} update={props.update} />
                        <StepDescription description={props.stepdescription} 
                            update={props.update} text="Step Description: " type="step"/>
                        <Button text="Add Step"/>
                    </div>
                    <div className="postProjectForm">
                        <div className="stepListHeader">Current steps:</div>
                        {props.steps.length > 0 ?
                            props.steps.map(step => <PostStep editStep={props.editStep} step={step} key={step.stepcount}/>)    
                        :
                            null
                        }
                    </div>
                </form>
            </TabPanel>
            <TabPanel>
                <form className="postProjectFormH" onSubmit={event => {
                    event.preventDefault();
                    props.submitMat()
                }}>
                    <div className="formVert">
                        <div>Search for Material</div>
                        <MaterialSearch {...props} searchAmazon={props.searchAmazon} />
                        {props.materialtitle && <div><MaterialItem title={props.materialtitle} update={props.update} text="Material Title: "/>
                        <MaterialQuantity title={props.materialquantity} update={props.update} text="How many? "/></div>}
                        <Button text="Add Material"/>
                    </div>
                    <div className="postProjectForm">
                        <div className="materialListHeader">Current Materials:</div>
                        {props.materials ?
                            props.materials.map(mat => <PostMat mat={mat}/>)    
                        :
                            null
                        }
                    </div>
                </form>
            </TabPanel>
        </Tabs>
        <div className="submitButtonContainer">
            <button className="submitBtn" onClick={event => props.save()}>Save Project</button>
            <button className="submitBtn" onClick={event => props.publish()}>Publish Project</button>
        </div>
        <MaterialModal {...props} />
    </div>

export default EditProject;