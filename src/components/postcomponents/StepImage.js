import React from 'react';
import ImageUploader from 'react-images-upload';
import url from '../../globalVars';
import ExifOrientationImg from 'react-exif-orientation-img';

let StepImage = (props) => (
    <div className="formVert">
        <ImageUploader
            withIcon={true}
            singleImage={true}
            buttonText='Choose image'
            onChange={props.stepOnDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
        />
        {props.url ?
        <div className="image-container">
            <ExifOrientationImg className="image-preview" src={props.url} />
        </div> :
        props.image && typeof props.image === 'string' && 
        <div className="image-container">
            <ExifOrientationImg className="image-preview" src={url + '/uploads/project/' + props.image} />
        </div>}
    </div>
);
export default StepImage;