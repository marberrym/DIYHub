import React from 'react';
import ImageUploader from 'react-images-upload';
import url from '../../globalVars';

let ProjectImage = (props) => (
    <div className="formVert">
        <ImageUploader
            withIcon={true}
            singleImage={true}
            buttonText='Choose image'
            onChange={props.projectOnDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
        />
        {props.projecturl ?
        <div className="image-container">
            <img className="image-preview" src={props.projecturl} />
        </div> :
        props.image && typeof props.image === 'string' && 
        <div className="image-container">
            <img className="image-preview" src={url + '/uploads/project/' + props.image} />
        </div>}
    </div>
);
export default ProjectImage;