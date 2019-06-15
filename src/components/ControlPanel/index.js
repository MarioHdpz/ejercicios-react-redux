import React from 'react'

const ControlPanel = props => (
    <div className="container">
        <div className="control-panel">
            <div onClick={() => {props.onAdd('meat')}} className="button">Meat</div>
            <div onClick={() => {props.onAdd('salad')}} className="button">Salad</div>
            <div onClick={() => {props.onAdd('cheese')}} className="button">Cheese</div>
            <div onClick={() => {props.onAdd('bacon')}} className="button">Bacon</div>
        </div>
     </div>
)

export default ControlPanel;