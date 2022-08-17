import React, { Fragment, useState } from "react";
import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const [opacity, setOpacity] = useState(0.75);

  window.onscroll = () => {
    let newScrollHeight = Math.max(
      Math.min(window.scrollY / 600 + 0.75, 1),
      0.75
    );
    setOpacity(newScrollHeight);
  };

  return (
    <Fragment>
      <header
        className={classes.header}
        style={{ background: `rgba(122, 0, 0, ${opacity})` }}
      >
        <h1>Meal Orders</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="food table header" />
      </div>
    </Fragment>
  );
};

export default Header;

// For the className on the img div, must use
// the [''] notation since the class name has a - in it
