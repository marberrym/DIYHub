import React from 'react';
import ImageUploader from 'react-images-upload';
import url from '../../globalVars';

export default class StepImage extends React.Component {

    constructor(props) {
        super(props);
         this.state = { 
             picture: null, 
             url: '' 
        };
         this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState(() => ({
            picture: picture[picture.length - 1]
        }));
    }
    componentDidUpdate(prevProps, prevState) {
        let reader;
        if (this.state.picture !== prevState.picture) {
            this.props.update('stepimage', this.state.picture);
            if(this.state.picture) {
                reader = new FileReader();
                reader.readAsDataURL(this.state.picture);
                reader.onload = (event) => {
                    this.setState({
                        url: event.target.result
                    });
                }
            } else {
                this.setState({
                    url: ''
                });
                reader = null;
            }
        }
        if (this.props.image !== prevProps.image) {
            if (!this.props.image) {
                this.setState({
                    picture: null,
                    url: ''
                });
            }
        }
    }

    render() {
        return (
            <div>
                <ImageUploader
                    withIcon={true}
                    singleImage={true}
                    buttonText='Choose image'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                />
                {this.state.url ?
                <div className="image-container">
                    <img className="image-preview" src={this.state.url} />
                </div> :
                this.props.image && typeof this.props.image === 'string' && 
                <div className="image-container">
                    <img className="image-preview" src={url + '/uploads/project/' + this.props.image} />
                </div>}
                {this.props.url && !this.state.url && <div className="image-container">
                    <img className="image-preview" src={this.props.url} />
                </div>}
            </div>
        );
    }
}