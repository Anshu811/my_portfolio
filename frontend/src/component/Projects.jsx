import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Library Management System",
      description: "Backend project using Node.js and MongoDB for managing library operations like book issuance, returns, and user management.",
      tech: ["Node.js", "MongoDB", "Express", "JWT"],
      github: "https://github.com/Anshu811/library-management",
      live: "https://library-management.onrender.com"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built using React with modern UI/UX design principles and responsive layout.",
      tech: ["React", "CSS3", "JavaScript", "Vite"],
      github: "https://github.com/Anshu811/my_portfolio",
      live: "https://my-portfolio.onrender.com"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span className="tech-tag" key={i}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub →</a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;