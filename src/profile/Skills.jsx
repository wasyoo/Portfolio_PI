import React from 'react';
import skills from '../data';
import styles from './profil.module.css';
import ProgressBar from '../ProgressBar/ProgressBar';

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h2 className={styles.skill_title}>Skills</h2>
      <ul>
        {skills.map(skill => (
          <li>
            <div className={styles.skill_name}>{skill.name}</div>
            <span>{skill.level}%</span>
            <ProgressBar percent={skill.level} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills
