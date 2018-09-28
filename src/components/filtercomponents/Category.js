import React from 'react';

let Category = (props) =>
    <label className="margRight marginB" onChange={(event) => {
        props.update('category', event.target.value);
    }} value={props.category}>Category: <select>
                <option value=""></option>
                <option value="1">Food</option>
                <option value="2">Drinks</option>
                <option value="3">Crafts</option>
                <option value="4">Tech</option>
                <option value="5">Clothing</option>
            </select>
    </label>

export default Category;