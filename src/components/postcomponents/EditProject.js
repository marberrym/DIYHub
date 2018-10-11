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
import CollabPanel from './CollabPanel';

let EditProject = (props) =>
    <div className="pageLayout">
        <NavBarSmart />
        <HeadLogo />
        <div className="projectStatus">Project Status: 
            {props.publish_status === 4 ?
                <span className="unpublished"> Unpublished</span>
            :
                <span>
                    <span className="published"> Published</span>
                    <button className="remove button" onClick={
                        event => props.unpublish()
                    }>Unpublish</button>
                </span>
            }
        </div>
        <Tabs selectedTabClassName="selectedTab" className="tabSection">
            <TabList className="tabs">
                <Tab className="tab">
                    Project
                </Tab>
                <Tab className="tab">
                    Steps
                </Tab>
                <Tab className="tab">
                    Materials
                </Tab>
                <Tab className="tab">
                    Collaborators
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
                        <StepImage image={props.stepimage} url={props.stepurl} update={props.update} />
                        <StepDescription description={props.stepdescription} 
                            update={props.update} text="Step Description: " type="step"/>
                        <Button text="Add Step"/>
                    </div>
                    <div className="postProjectForm">
                        <div className="stepListHeader">Current steps:</div>
                        {props.steps.length > 0 ?
                            <div className="stepContainer">
                                {props.steps.map(step => <PostStep editStep={props.editStep} step={step} key={step.stepcount}/>)}
                                <label className="stepX" onClick={event => props.deleteStep()}>
                                    <div className="stepXLabel">Remove Last Step</div>
                                    <i className="far fa-times-circle xicon fa-2x"></i>
                                </label>
                            </div>  
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
                        <MaterialSearch {...props} text="Search for Materials" searchAmazon={props.searchAmazon} />
                        {props.materialtitle && <div><MaterialItem title={props.materialtitle} update={props.update} text="Material Title: "/>
                        <MaterialQuantity title={props.materialquantity} update={props.update} text="How many? "/></div>}
                        <Button text="Add Material"/>
                    </div>
                    <div className="postProjectForm">
                        <div className="materialListHeader">Current Materials:</div>
                        {props.materials ?
                            props.materials.map(mat => <PostMat deleteMat={props.deleteMat} mat={mat}/>)    
                        :
                            null
                        }
                    </div>
                </form>
            </TabPanel>
            <TabPanel>
                <CollabPanel collaborators={props.collaborators}/>
            </TabPanel>
        </Tabs>
        <div className="submitButtonContainer">
            <button className="submitBtn" onClick={event => props.save()}>Save Project</button>
            <button className="submitBtn" onClick={event => {props.save(props.publish)}}>Publish Project</button>
        </div>
        <div className="deleteButtonContainer">
            <button className="submitBtn remove" onClick={event => props.deleteProject()}>Delete Project</button>
        </div>
        <MaterialModal {...props} />
    </div>

export default EditProject;