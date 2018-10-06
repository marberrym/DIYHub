import React from 'react';

let ProjectImage = (props) =>
    <label className="formInputField">{props.text}
        <input type="file" onChange={(event) =>
                props.update('projectimage', event.target.files[0])} />
    </label>

export default ProjectImage;