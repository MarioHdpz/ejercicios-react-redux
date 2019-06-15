import React from "react";
import { connect } from 'react-redux';

// Acciones
//const addAction = () => ({type: 'add'})
//const substractAction = () => ({type: 'substract'})

const Counter = props => {

    return (
        <div className="counter">
            <div onClick={props/* props.? Acción obtenida desde props */}>-</div>
            <h1>{props.count}</h1>
            <div onClick={props/* props.? Acción obtenida desde props */}>+</div>
        </div>
    );
}

const mapStateToProps = reduxState => ({
    count: reduxState,
});

export default connect(mapStateToProps, {/** dispatch de acciones */})(Counter);
