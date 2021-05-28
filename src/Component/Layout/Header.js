import React, {Fragment}  from 'react';
import classes from './Header.module.css';
import mealsImg from './../../image/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {


    return (
        <Fragment >
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                    <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="Food pic"/>   
            </div>
        </Fragment>
    )

}

export default Header;