import React from 'react'

const Ingredient = props => {
    switch (props.id) {
        case 'bread-top':
            return (
                <div className='bread-top'>
                    <div className='seeds1'></div>
                    <div className='seeds2'></div>
                    <div className='seeds1'></div>
                </div>
            )
        default:
            return (
                <div onClick={() => props.onClick()} className={props.id}></div>
            )
    }
}

export default Ingredient
