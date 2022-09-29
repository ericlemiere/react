import React from "react";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaMusic } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { images } from "../constants";
import "./SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div className="social-barrier">
      <div className="app__social">
        <div className="app__social-div">
          <a
            href="https://github.com/ericlemiere"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </div>
        <div className="app__social-div">
          <a
            href="https://www.linkedin.com/in/ericlemiere/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </div>
        <div className="app__social-div">
          <a
            href="https://www.instagram.com/ericlemiere/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
        </div>
        <div className="app__social-div">
          <a href="http://www.ericlemiere.com" target="_blank" rel="noreferrer">
            <FaMusic />
          </a>
        </div>
        <div className="app__social-div">
          <a href="mailto:lemierecs@gmail.com">
            <FiMail />
          </a>
        </div>
        {/* <div className="email-button">
        <img src={images.email} alt="email" />
        <a href="mailto:lemierecs@gmail.com" className="p-text">
          Send Me An Email
        </a>
      </div> */}
      </div>
    </div>
  );
};

export default SocialMedia;
