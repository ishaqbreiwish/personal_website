import React from 'react';
import ProjectCard from './ProjectCard';
import movieImage from '../images/MovieScreenshot.png';
import spotifyImage from '../images/SpotifyScreenshot.png';
import dentalImage from '../images/DentalScreenshot.png';
import potatoImage from '../images/PotatoScreenshot.png';


const projects = [
  {
    title: 'AI Movie Recommender',
    skills: ['Django', 'React', 'OpenAI API'],
    description: 'Built a movie recommendation system where users describe the type of movie they want to watch, and the backend processes the description with the OpenAI API to generate a list of movie recommendations. Integrated the TMDB API to fetch detailed movie information, including posters and overviews, displayed through a dynamic React frontend.',
    image: movieImage, // Leave empty for now
    link: 'https://github.com/ishaqbreiwish'
  },
  {
    title: 'Spotify Wrapped App',
    skills: ['React', 'Firebase', 'OpenAI API'],
    description: 'Developed a Spotify Wrapped-style application that provides users with a personalized summary of their listening habits. Integrated the OpenAI API to generate artist recommendations and insights based on user data. Used Firebase for user authentication and data storage, ensuring data continuity across devices.',
    image: spotifyImage, // Leave empty for now
    link: 'https://github.com/ishaqbreiwish'
  },
  {
    title: 'Dental Health Chatbot',
    skills: ['Langchain', 'OpenAI API', 'Pinecone', 'AWS Lambda'],
    description: 'A user-friendly dental chatbot, designed to encourage better oral health practices. The chatbot uses Langchain for Retrieval-Augmented Generation (RAG) to ensure accurate and context-aware information from relevant dental documents stored in a Pinecone vector database. It leverages OpenAI for LLM processing to provide insightful, personalized advice. AWS Lambda powers the chatbot through serverless functions, making it efficient and scalable.    ',
    image: dentalImage, // Leave empty for now
    link: 'https://github.com/ishaqbreiwish'
  },
  {
    title: 'Deep Learning Agriculture Project',
    skills: ['TensorFlow', 'AWS S3', 'FastAPI', 'React Native'],
    description: 'An end-to-end deep learning application that helps farmers detect diseases in potato plants using a CNN model built with TensorFlow. The model is served via FastAPI and deployed on AWS using S3 for data storage and AWS Lambda for serverless inference. The project includes both a React.js web interface and a React Native mobile app, with model optimization techniques like TensorFlow Lite for faster mobile deployment',
    image: potatoImage, 
    link: 'https://github.com/ishaqbreiwish'
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
