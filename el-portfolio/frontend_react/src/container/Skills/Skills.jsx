import "./Skills.scss";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
//import { easeInOut } from "popmotion";
//import ReactToolTip from "react-tooltip";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  //const [experience, setExperience] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });

    // const experienceQuery = '*[_type == "workExperience"]';
    // client.fetch(experienceQuery).then((data) => {
    //   setExperience(data);
    // });
  }, []);

  return (
    <div className="app__skills">
      <h2 className="head-text">
        <span>Skills</span> & <span>Education</span>
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

        <div className="ed-section">
          <motion.div className="app__skills-ed">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-ed-item "
            >
              <div className="img-school">
                <a
                  href="https://www.learncodinganywhere.com/codingbootcamps"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.img
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: [1, 1.03] }}
                    src={images.techAcademy}
                    alt="Tech Academy"
                  ></motion.img>
                </a>
              </div>
              <div className="ed-description">
                <h4 className="bold-text ">The Tech Academy</h4>
                <p className="p-text ">
                  Full-Stack Software Developer Bootcamp
                </p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div className="app__skills-ed">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-ed-item "
            >
              <div className="img-school">
                <a
                  href="www.lowercolumbia.edu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.img
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: [1, 1.03] }}
                    src={images.lcc}
                    alt="LCC"
                  ></motion.img>
                </a>
              </div>
              <div className="ed-description">
                <h4 className="bold-text ed-h">Lower Columbia College</h4>
                <p className="p-text ed-p">
                  AS - Computer Science <br></br> AA - Mathematics <br></br> AA
                  - General Studies
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

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
    </div>
  );
};

export default AppWrap(Skills, "skills");
