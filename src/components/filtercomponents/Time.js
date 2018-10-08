import React from 'react';
import Select from 'react-select';

let Time = (props) =>
    <label className="formInputField">Time
        <div class="select-container">
            <Select onChange={event => {
                    props.update('time', event.value);
                }}
                className="select-container"
                classNamePrefix="select"
                options={[
                { value: '', label: 'All' },               
                { value: '1', label: '0-2 hours' },
                { value: '2', label: '2-4 hours' },
                { value: '3', label: '4-8 hours' },
                { value: '4', label: '8-16 hours' },
                { value: '5', label: '16-32 hours' },
                { value: '6', label: '32+ hours' },
            ]} />
        </div>
    </label>

export default Time;