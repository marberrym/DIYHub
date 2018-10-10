import React from 'react';
import Select from 'react-select';

let Cost = (props) => {
    let labels = ['All', '$0-$25', '$25-$50', '$50-$100', '$100-$250', '$250-$500', '$500+']
    return(
        <label className="formInputField">Cost: 
            <div className="select-container">
                <Select onChange={event => {
                        props.update('cost', event.value);
                    }}
                    value={{value: props.cost, label: labels[props.cost]}}
                    className="select-container"
                    classNamePrefix="select"
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

export default Cost;