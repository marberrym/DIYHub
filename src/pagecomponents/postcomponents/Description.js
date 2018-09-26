import React from 'react';

let Description = (props) =>
    <div className="width80">
        <label className="flexC marginB">
            Description: <textarea className="submitTextArea" onChange={(event) => 
                props.update('description', event.target.value)
            } value={props.description} required></textarea>
        </label>
    </div>

export default Description;