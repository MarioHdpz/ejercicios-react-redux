import React from "react";
import { connect } from 'react-redux';

// Acciones
const addAction = () => ({type: 'add'})
const substractAction = () => ({type: 'substract'})

const Counter = props => {

    return (
        <div className="counter">
            <div onClick={props.substract}>-</div>
            <h1>{props.count}</h1>
            <div onClick={props.add}>+</div>
        </div>
    );
}

const mapStateToProps = reduxState => ({
    count: reduxState,
});

const mapDispatchToProps = dispatch => ({
    add: () => dispatch(addAction()),
    substract: () => dispatch(substractAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
