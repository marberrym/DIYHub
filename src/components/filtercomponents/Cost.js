import React from 'react';
import Select from 'react-select';

let Cost = (props) =>
    <label className="formInputField">Cost: 
        <div className="select-container">
            <Select onChange={event => {
                    props.update('cost', event.value);
                }}
                className="select-container"
                classNamePrefix="select"
                options={[
                { value: '', label: 'All' },                
                { value: '1', label: '$0-$25' },
                { value: '2', label: '$25-$50' },
                { value: '3', label: '$50-$100' },
                { value: '4', label: '$100-$250' },
                { value: '5', label: '$250-$500' },
                { value: '6', label: '$500+' },
            ]} />
        </div>
    </label>

export default Cost;