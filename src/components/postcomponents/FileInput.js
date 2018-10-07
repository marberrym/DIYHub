import React from 'react';
import ImageUploader from 'react-images-upload';

export default class App extends React.Component {

    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    render() {
        return (
            <ImageUploader
                withIcon={true}
                withPreview={true}
                singleImage={true}
                buttonText='Choose images'
                onChange={event => {
                this.onDrop()
                this.props.update('projectimage', this.state.pictures)}}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}