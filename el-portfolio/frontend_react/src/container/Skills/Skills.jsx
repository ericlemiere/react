import "./Skills.scss";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { easeInOut } from "popmotion";
import ReactToolTip from "react-tooltip";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [notables, setNotables] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const experienceQuery = '*[_type == "workExperience"]';
    const notablesQuery = '*[_type == "notables"]';

    client.fetch(experienceQuery).then((data) => {
      setExperience(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });

    client.fetch(notablesQuery).then((data) => {
      setNotables(data);
    });
  }, []);

  return (
    <div>
      <h2 className="head-text">
        <span>Skills</span> & <span>Experience</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              whileHover={{ scale: [1, 1.1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2>Education</h2>
            <p className="p-text">Words go here</p>
          </div>
        </motion.div>

        {/* <motion.div className='app__skills-exp'>
            {experience?.map((exp) => (
              <React.Fragment key={exp.name}>
                <motion.div 
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-work app__flex"
                data-tip
                data-for={exp.name}
                >
                  <h4 className='bold-text'>{exp.name}</h4>
                  <p className='p-text'>{exp.company}</p>
                </motion.div>
                <ReactToolTip
                id={exp.name}
                effect="solid"
                arrowColor="#fff"
                class='skills-tooltip'
                >
                  {exp.desc}
                </ReactToolTip>
              </React.Fragment>
            ))}
        </motion.div> */}
      </div>

      <h2 className="head-text">
        Notable <span>Acheivements</span>
      </h2>
      <p className="p-text app__flex">
        I hate "bragging" about myself, but I <i>&nbsp;am&nbsp;</i> trying to get hired! 😁
      </p>
      <div className="app__skills-container app__flex">
        <motion.div className="app__notables">
          {notables.map((notable) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              whileHover={{ scale: [1, 1.03] }}
              transition={{ duration: 0.5 }}
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

export default Skills;
