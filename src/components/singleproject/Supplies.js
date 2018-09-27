import React from 'react';

let Supplies = (props) =>
    <div className="marginTop">
        <div className="stepHead">What You Will Need:</div>
            {props.supplies.map(supply => 
            <div>
                <h3>{supply.title}</h3>
                <div>{supply.amazon_asin}</div>
                <div>Quantity: {supply.quantity}</div>
            </div>)}
    </div>

export default Supplies