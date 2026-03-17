import React from 'react';

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"];
  
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span className="skill-item" key={index}>{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;