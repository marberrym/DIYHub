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
import MaterialASIN from './postcomponents/MaterialASIN';
import MaterialSearch from './postcomponents/MaterialSearch';
import PostMat from './postcomponents/PostMat';
import ProjectImage from './postcomponents/ProjectImage';
import StepImage from './postcomponents/StepImage';
import Modal from 'react-modal';
import url from '../globalVars';
import { connect } from 'react-redux';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
        this.searchAmazon = this.searchAmazon.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    searchAmazon(query) {
        fetch(`${url}/amazon?q=${query}`)
        .then(response => {
            if (response) {
                return response.json()
            } else {
                this.props.dispatch({
                    type: 'SET_TOAST',
                    toast: {
                        text: 'Problem reaching amazon!',
                        type: 'error'
                    }
                });
            }
        })
        .then(data => {
            if (data.status === 'success') {
                this.openModal();
                this.props.dispatch({
                    type: 'LOAD_AMAZON',
                    items: data.items
                })
            } else {
                this.props.dispatch({
                    type: 'SET_TOAST',
                    toast: {
                        text: 'Problem reaching amazon!',
                        type: 'error'
                    }
                });
            }
        })
        .catch(error => {
            this.props.dispatch({
                type: 'SET_TOAST',
                toast: {
                    text: 'Problem reaching amazon!',
                    type: 'error'
                }
            });
        })
    }
    openModal() {
        this.setState({modalIsOpen: true});
    }
    
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }
    render() {
        return (
        <div className="pageLayout">
            <NavBar/>
            <HeadLogo/>
            <form className="postProjectForm" onSubmit={event => this.props.submitProject()}>
                <div className="topPostSection">
                    <div className="formVert">
                        <Title title={this.props.title} update={this.props.update}/>
                        <ProjectImage title={this.props.projectimage} update={this.props.update} text="Image URL: "/>
                        <Cost cost={this.props.cost} update={this.props.update}/>
                        <Time time={this.props.time} update={this.props.update}/>
                        <Category category={this.props.category} update={this.props.update}/>
                    </div>
                    <Description description={this.props.description} update={this.props.update}/>
                </div>
                <Button text="Submit Project"/>
            </form>
            <form className="postProjectFormH" onSubmit={this.props.submitStep}>
                <div className="formVert">
                    <StepTitle title={this.props.steptitle} update={this.props.update} text="Step Title: "/>
                    <StepImage title={this.props.stepimage} update={this.props.update} text="Image URL: "/>
                    <StepDescription description={this.props.stepdescription} 
                        update={this.props.update} text="Step Description: " type="step"/>
                    <Button text="Add Step"/>
                </div>
                <div className="postProjectForm">
                    <div>Current steps:</div>
                    {this.props.steps ?
                        this.props.steps.map(step => <PostStep step={step} key={step.stepcount}/>)    
                    :
                        null
                    }
                </div>
            </form>
            <form className="postProjectFormH" onSubmit={this.props.submitMaterial}>
                <div className="formVert">
                    <MaterialSearch {...this.props} searchAmazon={this.searchAmazon} />
                    <MaterialItem title={this.props.materialtitle} text="Material Title: "/>
                    <MaterialQuantity title={this.props.materialquantity} update={this.props.update} text="Material Quantity: "/>
                    <Button text="Add Material"/>
                </div>
                <div className="postProjectForm">
                    <div>Current Materials:</div>
                    {this.props.materials ?
                        this.props.materials.map(mat => <PostMat mat={mat}/>)    
                    :
                        null
                    }
                </div>
            </form>
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                className="modal"
                // overlayClassName="modal-overlay"
                contentLabel="Add Material"
            >
                {this.props.amazonSearch.map(item => (
                    <div className="amazon browsePost" onClick={() => {
                        this.props.update('materialtitle', item.title);
                        this.props.update('materialasin', item.ASIN);
                        this.closeModal();
                    }}>
                        <div className="amazon-img">
                        <img src={item.image} alt={item.title} /></div>
                        <div className="amazon-text-container">
                            <div className="amazon-title">{item.title.slice(0,100) + (item.title.length > 100 ? '...' : '')}</div>
                            <div className="amazon-price">{item.price}</div>
                        </div>
                    </div>
                ))}
            </Modal>
        </div>
        );
    }
}
export default connect(state => ({amazonSearch: state.amazonSearch}))(PostForm);