import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div className={classes.input}>
            <label className={classes.label}>{props.label}</label>
            <input 
                htmlFor={props.input.id}
                id={props.input.id}
                {...props.input}
            />
        </div>
    )
}

export default Input;