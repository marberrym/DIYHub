import React from 'react';

let Description = (props) =>
    <div>
        <label className="flexC">
            Description: <textarea onChange={(event) => 
                props.update('description', event.target.value)
            } value={props.description} required></textarea>
        </label>
    </div>

export default Description;