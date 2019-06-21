import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
const reset = () => ({
    type: 'reset',
})

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
        <div className="button" onClick={props.reset}>Reset</div>
        </div>
    )
}

const mapStateToProps = state => ({
    burgersArray: state,
});

export default connect(mapStateToProps, {reset})(Receipt);