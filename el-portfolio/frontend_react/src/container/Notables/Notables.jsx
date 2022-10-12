import "./Notables.scss";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
//import { AppWrap } from "../../wrapper";
import MotionWrap from "../../wrapper/MotionWrap";
import { urlFor, client } from "../../client";
import { useRef } from "react";

const Notables = () => {
  const [notables, setNotables] = useState([]);

  const pageRef = useRef();
  const [yCoord, setYCoord] = useState();

  const getPosition = () => {
    const y = pageRef.current?.offsetTop;
    setYCoord(y);
  };

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", getPosition);
    return () => {
      window.removeEventListener("scroll", getPosition);
    };
  }, []);

  useEffect(() => {
    const notablesQuery = '*[_type == "notables"] | order(order asc)';

    client.fetch(notablesQuery).then((data) => {
      setNotables(data);
    });
  }, []);

  return (
    <div className="app__notables-container" id="notables" ref={pageRef}>
      <h2 className="head-text">Notable <span>Achievements</span></h2>
      
      <p className="p-text app__flex" id="notableP1">
        I hate "bragging" about myself, but I am trying to get hired! 😁
      </p>
      <p className="p-text app__flex" id="notableP2">
        I hate "bragging" about myself,
        <br />
        but I am trying to get hired! 😁
      </p>

      <div className="">
        <motion.div className="app__notables">
          {notables.map((notable) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              whileHover={{ x: "1vw" }}
              transition={{ duration: 0.2 }}
              className="app__notables-item app__flex"
              key={notable.title}
            >
              <div className="app__flex">
                <img src={urlFor(notable.icon)} alt={notable.title} />
              </div>
              <div className="notables-desc">
                <h4>{notable.title}</h4>
                <p>{notable.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MotionWrap(Notables, 'app__notables')
