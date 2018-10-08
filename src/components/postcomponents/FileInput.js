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
    componentDidUpdate(prevProps, prevState) {
        if (this.state.pictures[0] !== prevState.pictures[0]) {
            console.log(this.state.pictures[0]);
            this.props.update('projectimage', this.state.pictures[0]);
        }
    }

    render() {
        return (
            <ImageUploader
                withIcon={true}
                withPreview={true}
                singleImage={true}
                buttonText='Choose image'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}