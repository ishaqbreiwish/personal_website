import React from 'react';
import ProjectCard from './ProjectCard';
import snakeImage from '../images/SnakeScreenshot.png';


const projects = [
  {
    title: 'AI Movie Recommender',
    skills: ['Django', 'React', 'OpenAI API'],
    description: 'Built a movie recommendation system where users describe the type of movie they want to watch, and the backend processes the description with the OpenAI API to generate a list of movie recommendations. Integrated the TMDB API to fetch detailed movie information, including posters and overviews, displayed through a dynamic React frontend.',
    image: '', // Leave empty for now
    link: 'https://github.com/ayubxhunter/ai-movie-recommender'
  },
  {
    title: 'Spotify Wrapped App',
    skills: ['React', 'Firebase', 'OpenAI API'],
    description: 'Developed a Spotify Wrapped-style application that provides users with a personalized summary of their listening habits. Integrated the OpenAI API to generate artist recommendations and insights based on user data. Used Firebase for user authentication and data storage, ensuring data continuity across devices.',
    image: '', // Leave empty for now
    link: 'https://github.com/ayubxhunter/spotify-wrapped-app'
  },
  {
    title: 'Dental Health Chatbot',
    skills: ['AWS Lambda', 'AWS DynamoDB', 'OpenAI API', 'Pinecone'],
    description: 'A user-friendly chatbot designed to encourage better oral health practices by providing accurate and context-aware information using OpenAI. It leverages Retrieval-Augmented Generation (RAG) to ensure responses are highly relevant and personalized. The chatbot is capable of remembering patient information, allowing for persistent, personalized interactions to guide users toward healthier dental habits.',
    image: '', // Leave empty for now
    link: 'https://github.com/ayubxhunter/dental-health-chatbot'
  },
  {
    title: 'Deep Learning Agriculture Project',
    skills: ['TensorFlow', 'FastAPI', 'AWS SageMaker', 'React'],
    description: 'An end-to-end deep learning application that helps farmers detect diseases in potato plants using a CNN model built with TensorFlow. The model is served via FastAPI and deployed on Google Cloud, using Cloud Functions for inference. The project includes both a React.js web interface and a React Native mobile app, with model optimization techniques like TensorFlow Lite for faster mobile deployment.    ',
    image: '', 
    link: 'https://github.com/ayubxhunter/personal-portfolio'
  },
];


const ProjectsSection = () => {
  return (
    <section id="projects" className="work-experience-section">
      <h2 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
        Projects
      </h2>
      <div className="projects-section">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
