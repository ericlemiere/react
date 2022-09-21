
import './Skills.scss';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { easeInOut } from "popmotion";
import ReactToolTip from 'react-tooltip';

const Skills = () => {

  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const experienceQuery = '*[_type == "workExperience"]';

    client.fetch(experienceQuery).then((data) => {
      setExperience(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);


  return (
    <div>
      <h2 className='head-text'><span>Skills</span> & <span>Experience</span></h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
            whileInView={{ opacity: [0, 1] }}whileHover={{ scale: [1, 1.1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key={skill.name}
          >
            <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
              <img src={urlFor(skill.icon)} alt={skill.name}/>
            </div>
            <p className='p-text'>{skill.name}</p>
          </motion.div>
          ))}
        </motion.div>

        <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        >
          <div>
            <h4 className='bold-text'></h4>
            <p className='p-text'></p>
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
    
    </div>
  )
}

export default Skills