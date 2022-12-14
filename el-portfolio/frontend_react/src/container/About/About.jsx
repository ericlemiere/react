import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
//import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import { urlFor, client } from "../../client";

const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => setAbouts(data));
  }, []);

 

  return (
    <div className="about-container" id="about">
      <h2 className="head-text">
        Combining<span> Artistry</span>
        <br />
        With<span> Industry</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0,1] }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7, type: "tween" }}
            className="app__profile-item"
            key={index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MotionWrap(About, 'app__about');
