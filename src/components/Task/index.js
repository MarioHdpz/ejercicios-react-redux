import React from 'react';
import './Task.css';

/**
 * Recibe un objeto con la siguiente estructora
 * 
 * props = {
 *  name: str
 *  description: str
 * }
 * 
 * @param {*} props 
 */
function Task(props) {
    const classes = `task ${props.color}`;
    return (
        <div className={classes}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default Task;