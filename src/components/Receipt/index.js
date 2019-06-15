import React from 'react';
import { connect } from 'react-redux';

const Receipt = props => {
    const total = props.burgersArray.reduce(
        (sum, price) => price + sum
    , 0);

    return (
        <div className="container receipt">
            {props.burgersArray.map( price =>
                <h2 className="receipt-row">{`1 x $ ${price}`}</h2>
            )}
        <h1>{`Total: $${total}`}</h1>
        </div>
    )
}

const mapStateToProps = state => ({
    burgersArray: state,
});

export default connect(mapStateToProps)(Receipt);