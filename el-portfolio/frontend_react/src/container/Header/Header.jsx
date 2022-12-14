import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
//import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex" id="home-bg">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Eric</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Programmer</p>
            <p className="p-text">Softwarer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{}}
        transition={{ duration: 1.5 }}
        className="app__header-myHead"
      >
        <motion.img
          animate={{ x: [200, 0], y: [200, 0] }}
          transition={{ duration: 0.6, delay: 1 }}
          src={images.myHead}
          alt="it's me"
          className="myHead"
        />
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <motion.img
          whileInView={{ y: [-300, 0]  }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.astronaut1}
          alt="profile_bg"
        ></motion.img>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[
          images.html,
          images.javascript,
          images.css,
          images.react,
          images.python,
        ].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MotionWrap(Header, 'app__header')
