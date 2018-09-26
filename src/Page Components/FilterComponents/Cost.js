import React from 'react';

let Cost = (props) =>
    <label className="margRight marginB" onChange={(event) =>
        props.update('cost', event.target.value)
    } value={props.cost}>Cost: <select>
            <option value="0"></option>
            <option value="1">$0-$25</option>
            <option value="2">$25-$50</option>
            <option value="3">$50-$100</option>
            <option value="4">$100-$250</option>
            <option value="5">$250-$500</option>
            <option value="6">$500+</option>
        </select>
    </label>

export default Cost;