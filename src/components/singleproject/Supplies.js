import React from 'react';

let Supplies = (props) => {
    let queryString = '';
    for (let i = 0; i < props.supplies.length; i++){
        let supply = props.supplies[i];
        queryString += `ASIN.${i+1}=${supply.amazon_asin}&Quantity.${i+1}=${supply.quantity}&`;
    }
    queryString = queryString.slice(0, -1);
    return (
    <div className="materials">
        <div className="materialHead">What You Will Need:</div>
                <div className="shop-link-container">
                <a className="shop-link" href={`https://www.amazon.com/gp/aws/cart/add.html?${queryString}`}>
                    <img className="amazon-logo" src="https://upload.wikimedia.org/wikipedia/commons/7/70/Amazon_logo_plain.svg" />
                    <br /><div>Add to Cart!</div>
                </a>
            </div>
            {props.supplies.map(supply => 
            <div key={supply.amazon_asin} className="supplyList">
                <div className="supplyTitle">{supply.title}</div>
                <div>{supply.amazon_asin}</div>
                <div>Quantity: {supply.quantity}</div>
            </div>)}
    </div>
    );
}

export default Supplies