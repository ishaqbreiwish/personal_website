import React from 'react';
import './WorkExperience.css'; // Make sure to create this CSS file
import flexboneLogo from '../images/flexbone_logo.svg';
import mbruLogo from '../images/mbru_icon.png'


const WorkExperience = () => {
  const experiences = [
    {
      company: "Flexbone",
      position: "Software Engineer Intern",
      period: "July 2024 - Present",
      achievements: [
        "Built the initial landing page using HTML/CSS to support business growth and provide a user-friendly client experience.",
        "Developed a Django backend to handle form submissions and route client data to company email.",
        "Currently developing a landing page generator using OpenAI to automate the creation of customized landing pages from templates, reducing project setup time and enhancing scalability.",
        "Developed a Python script utilizing Pandas to extract hospital pricing data from a large-scale database."
      ]
    },
    {
      company: "Mohammad Bin Rashid University",
      position: "Software Engineer Intern",
      period: "June 2024",
      achievements: [
        "Built a chatbot using Flask and OpenAI API to provide personalized oral hygiene advice from dental guidelines.",
        "Set up Firebase authentication to securely store user profiles and enable persistent, personalized interactions.",
        "Leveraged Retrieval-Augmented Generation (RAG) to enhance the chatbot's accuracy and context awareness, ensuring better recommendations based on relevant dental guidelines.",
        "Integrated Pinecone as a vector database, optimizing read/write operations to significantly improve performance and retrieval speed for personalized user interactions."
      ]
    },
  ];

  return (
    <section id="experience" className="work-experience-section">
      <h2 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
        Work Experience
      </h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="company-info flex items-center mb-4"> {/* Flexbox for alignment */}
            <h3 className="text-xl font-bold">{exp.company}</h3> {/* Adjusted text size */}
            {exp.logo && <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />}
            </div>
            <p className="position text-gray-600">{exp.position}</p>
            <p className="period text-gray-500 mb-4">{exp.period}</p>
            <ul className="achievements list-disc ml-6"> {/* Bullet points with margin */}
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="mb-2">{achievement}</li> 
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;