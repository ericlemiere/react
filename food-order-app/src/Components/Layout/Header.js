import React, {Fragment} from "react";
import mealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCardButton from "./HeaderCartButton";

const Header = props => {

    return <Fragment>
        <header className={classes.header}>
            <h1>Meal Orders</h1>
            <HeaderCardButton />
        </header>
        <div className={classes['main-image']}> 
            <img src={mealsImg} alt="food table header"/>
        </div>
    </Fragment>
};

export default Header;


// For the className on the img div, must use 
// the [''] notation since the class name has a - in it
