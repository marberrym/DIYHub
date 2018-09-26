import React from 'react';

let Supplies = (props) =>
    <div className="marginTop">
        <div className="stepHead">What You Will Need:</div>
            {props.supplies.map(supply => <div>{supply}</div>)}
    </div>

export default Supplies