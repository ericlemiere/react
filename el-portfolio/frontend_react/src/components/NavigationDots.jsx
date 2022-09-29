import React, { useEffect } from "react";
import { useState } from "react";
import "./NavigationDots.scss";

const NavigationDots = ({ active }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBarMenuLinks = ["home", "about", "portfolio", "skills", "notables","contact"];

  const bgHandler = (e) => {
    for (let ii = 0; ii < navBarMenuLinks.length; ii++) {
      if (e.target.id === `${navBarMenuLinks[ii]}ID`) {
        document.getElementById(e.target.id).classList.add("app__navigation-dot-active");
      }
      else {
        document.getElementById(`${navBarMenuLinks[ii]}ID`).classList.remove("app__navigation-dot-active");
      }
    }
  }

  return (
    <div className="app__navigation">
      {/* {["home", "about", "portfolio", "skills", "notables","contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            id={`${item}id`}
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          > </a>
        )
      )} */}
      {
        navBarMenuLinks.map((item) => (
          <a
            href={`#${item}`}
            key={item}
            className="app__navigation-dot"
            id={`${item}ID`}
            onClick={bgHandler}
          > </a>
        ))
      }
    </div>
  );
};

export default NavigationDots;
