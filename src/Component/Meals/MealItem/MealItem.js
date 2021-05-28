import React from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {

    const price = props.meal.price.toFixed(2);

    return (
        <li>
            <div className={classes.meal}>
                <h3>
                    {props.meal.name}
                </h3>
            </div>
            <div>
                <h3 className={classes.description}>
                    {props.meal.description}
                </h3>
            </div>
            <div>
                <h3 className={classes.price}>
                    ${price}
                </h3>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    )
}

export default MealItem;