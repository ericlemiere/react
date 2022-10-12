import React from "react";
import { useState } from "react";
//import { useRef } from "react";
//import { useEffect } from "react";
import "./NavigationDots.scss";
import ReactToolTip from "react-tooltip";

const NavigationDots = ({ active }) => {
  // const [scrollPosition, setScrollPosition] = useState(0);

  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);


  const [isToolTipMounted, setIsToolTipMounted] = useState(true);

  const navBarMenuLinks = [
    "home",
    "about",
    "portfolio",
    "skills",
    "notables",
    "contact",
  ];

  // const bgHandler = (e) => {
  //   for (let ii = 0; ii < navBarMenuLinks.length; ii++) {
  //     if (e.target.id === `${navBarMenuLinks[ii]}ID`) {
  //       document
  //         .getElementById(e.target.id)
  //         .classList.add("app__navigation-dot-active");
  //     } else {
  //       document
  //         .getElementById(`${navBarMenuLinks[ii]}ID`)
  //         .classList.remove("app__navigation-dot-active");
  //     }
  //   }
  // };

  return (
    <div className="app__navigation" id="navigationDots">
      {navBarMenuLinks.map((item) => (
        <React.Fragment key={item}>
          <a
            href={`#${item}`}
            className="app__navigation-dot"
            id={`${item}ID`}
            //onClick={bgHandler}
            onMouseEnter={() => setIsToolTipMounted(true)}
            onMouseLeave={() => {
              setIsToolTipMounted(false);
              setTimeout(() => setIsToolTipMounted(true), 50);
            }}
            data-tip
            data-for={`${item}`}
          >
            {" "}
          </a>
          {isToolTipMounted && (
            <ReactToolTip id={item} effect="solid" className="nav-dots-tooltip">
              {`${item}`}
            </ReactToolTip>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavigationDots;
