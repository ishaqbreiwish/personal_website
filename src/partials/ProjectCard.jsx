import React from 'react';
import '../css/style.scss';

const ProjectCard = ({ title, skills, description, image, link }) => {
  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="project-card" onClick={handleClick} role="link" tabIndex={0}>
      <div className="project-image">
        <img 
          src={image} 
          alt={`${title} screenshot`} 
          className="project-thumbnail"
        />
      </div>
      <div className="project-content">
        <div className="project-details">
          <div className="project-title">
            <h3>{title}</h3>
          </div>
          <div className="skills">
            {skills.map(skill => (
              <span className={`skill-tag ${skill.toLowerCase()}`} key={skill}>
                {skill}
              </span>
            ))}
          </div>  
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;