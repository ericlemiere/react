import "./Notables.scss";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Notables = () => {
  const [notables, setNotables] = useState([]);

  useEffect(() => {
    const notablesQuery = '*[_type == "notables"]';

    client.fetch(notablesQuery).then((data) => {
      setNotables(data);
    });
  }, []);

  return (
    <div>
      <h2 className="head-text">
        Notable <span>Acheivements</span>
      </h2>
      <p className="p-text app__flex">
        I hate "bragging" about myself, but I <i>&nbsp;am&nbsp;</i> trying to
        get hired! 😁
      </p>
      <div className="app__skills-container app__flex">
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
              <h4>{notable.title}</h4>
              <p className="p-text notables-desc">{notable.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(Notables, 'notables');
