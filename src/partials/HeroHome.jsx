import React, { useState } from 'react';
import Modal from '../utils/Modal';
import linkedinIcon from '../images/linkedin.png'; 
import resumeIcon from '../images/resume.png'; 
import HeroImage from '../images/hero-image-01.png';
import ishaqImage from '../images/ishaq.jpeg';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems: 'flex-start', 
    maxWidth: '1200px', 
    margin: '0 auto', 
    padding: '0px',
  };

  const imageStyle = {
    width: '400px', 
    height: '400px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Flex container for content */}
        <div style={containerStyle}>
          {/* Hero content */}
          <div style={{ flex: 1 }}>
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Section header */}
              <div className="text-left pb-12 md:pb-16">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
                  Ishaq Breiwish
                </h1>
                <h2 className="text-5xl md:text-5xl bg-clip-text font-extrabold leading-tighter text-transparent bg-gradient-to-r from-blue-500 to-teal-400 tracking-tighter mb-4">
                  Software Engineer
                </h2>

                {/* Social links */}
                <ul className="flex space-x-4 mb-8">
                  {/* Linkedin Button */}
                  <li>
                    <a
                      href="https://www.linkedin.com/in/ishaq-breiwish"
                      className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out w-16 h-16 transform hover:scale-110"
                      aria-label="Linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg 
                        className="w-8 h-8 fill-current" 
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </li>

                  {/* Github Button */}
                  <li>
                    <a
                      href="https://github.com/ishaqbreiwish"
                      className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out w-16 h-16 transform hover:scale-110"
                      aria-label="Github"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg 
                        className="fill-current" 
                        style={{ width: '64', height: '64' }}
                        viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                      </svg>
                    </a>
                  </li>

                  {/* Resume Button */}
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1Ndr2daylppVv4rIW-P8VcaSTSnBfzRnp/view?usp=sharing"
                      className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out w-16 h-16 transform hover:scale-110"
                      aria-label="Resume"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-center text-sm font-semibold">Resume</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Profile photo */}
          <div style={{ flexShrink: 0, transform: 'translateY(100px)' }}>
            <div style={containerStyle}>
              <img src={ishaqImage} alt="Profile" style={imageStyle} />
            </div>

            
            <div className="max-w-3xl mx-auto">
              {/* free trial button, for potential repurposing */}
          {/* <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-start" data-aos="zoom-y-out" data-aos-delay="300">
            <div>
              <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
            </div>
            <div>
              <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
            </div>
          </div> */}
        </div>
          </div>

        </div>


        
        {/* Modal */}
        <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
          <div className="relative pb-9/16">
            <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe>
          </div>
        </Modal>
      </div> {/* Closing div for container */}
    </section>
  );
}

export default HeroHome;
