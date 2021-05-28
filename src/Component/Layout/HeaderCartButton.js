import React from 'react';
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {
    return (
        <span>
            <button className={classes.button}>
                <span className={classes.icon}>< CartIcon /></span>
                    Cart
                <span className= {classes['badge']}> 3 </span>
            </button>
        </span>
    );
}

export default HeaderCartButton; 