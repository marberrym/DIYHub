import React from 'react';

let Cost = (props) =>
    <label className="formInputField" onChange={(event) => {
        props.update('cost', event.target.value);
    }} value={props.cost}>Cost: 
        <div class="select-container">
            <select>
                <option value=""></option>
                <option value="1">$0-$25</option>
                <option value="2">$25-$50</option>
                <option value="3">$50-$100</option>
                <option value="4">$100-$250</option>
                <option value="5">$250-$500</option>
                <option value="6">$500+</option>
            </select>
        </div>
    </label>

export default Cost;