import React from 'react';
import Select from 'react-select';

let Time = (props) => {
    let labels = ['All', '0-2 hours', '2-4 hours', '4-8 hours', '8-16 hours', '16-32 hours', '32+ hours']
    return (
        <label className="formInputField">Time
            <div className="select-container">
                <Select onChange={event => {
                        props.update('time', event.value);
                    }}
                    className="select-container"
                    classNamePrefix="select"
                    value={{value: props.time, label: labels[props.time]}}
                    options={[
                    { value: '0', label: labels[0] },                
                    { value: '1', label: labels[1] },
                    { value: '2', label: labels[2] },
                    { value: '3', label: labels[3] },
                    { value: '4', label: labels[4] },
                    { value: '5', label: labels[5] },
                    { value: '6', label: labels[6] },
                ]} />
            </div>
        </label>
    )
}

export default Time;