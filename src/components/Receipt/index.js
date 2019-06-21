import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Receipt = props => {
    const total = props.burgersArray.reduce(
        (sum, price) => price + sum
    , 0);

    return (
        <div className="container receipt">
            {props.burgersArray.map( (price, key) =>
                <h2 className="receipt-row" key={key}>{`Burger ${key + 1} x $ ${price}`}</h2>
            )}
        <h1>{`Total: $${total}`}</h1>
        <Link to="/">
          <div className="button">Return to builder</div>
        </Link>
        </div>
    )
}

const mapStateToProps = state => ({
    burgersArray: state,
});

export default connect(mapStateToProps)(Receipt);