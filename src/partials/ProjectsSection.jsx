import React from 'react';
import ProjectCard from './ProjectCard';
import snakeImage from '../images/SnakeScreenshot.png';


const projects = [
  {
    title: 'Spotify Wrapped App',
    skills: ['React', 'Firebase', 'OpenAI'],
    description: 'An app that provides users with an engaging summary of their Spotify listening habits...',
    image: snakeImage,
    link: 'https://github.com/yourusername/spotify-wrapped-app'
  },
  {
    title: 'AWS-Powered Photo Hub',
    skills: ['AWS Lambda', 'Node.js', 'Python', 'Django'],
    description: 'Developing a scalable photo storage feature with AWS Lambda...',
    image: 'ishaqImage',
    link: 'https://github.com/yourusername/aws-photo-hub'
  },
  // Add more projects here
];

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsSection;
