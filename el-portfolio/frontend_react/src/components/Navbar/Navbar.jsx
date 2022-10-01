import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { images } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [firstPageLoad, setfirstPageLoad] = useState(true);
  // this is to hide the initial pop out menu.
  // when hamburger menu is clicked, firstPageLoad is set to false
  // and only gets set back to true if the page is reloaded

  const showNavHandler = () => {
    setToggle(true)
    setfirstPageLoad(false)
    document.getElementById("navigationDots").classList.add("hideNavDots");
    document.getElementById("navigationDots").classList.remove("showNavDots");
  }

  const hideNavHandler = () => {
    setToggle(false)
    document.getElementById("navigationDots").classList.remove("hideNavDots");
    document.getElementById("navigationDots").classList.add("showNavDots");
  }
  
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home">
        <img src={images.EL_blackBg} alt="logo"></img>
        </a>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "portfolio", "skills", "notables", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={showNavHandler} />
        {toggle ? (
          <motion.div
            animate={{ x: [300, 0]}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <HiX className="HiX" onClick={hideNavHandler}></HiX>
            <ul>
              {["home", "about", "portfolio", "skills", "notables", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={hideNavHandler}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : (
          firstPageLoad ? (
          <></>
          ) : (
          <motion.div
            animate={{ x: [0, 300] }}
            transition={{ duration: 0.7 }}
          >
            <HiX className="HiX"></HiX>
            <ul>
              {["home", "about", "portfolio", "skills", "notables", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
