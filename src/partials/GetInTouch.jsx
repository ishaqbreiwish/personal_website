import React from 'react';
import mail_icon from '../images/mail_icon.png';
import location_icon from '../images/location_icon.png';
import phone_icon from '../images/phone_icon.png';
import linkedin_icon from '../images/linkedin_icon.png';
import '../css/GetInTouch.css';

const GetInTouch = () => {
  const contactInfo = [
    { icon: mail_icon, text: 'ishaq.breiwish@gmail.com', link: 'mailto:ishaq.breiwish@gmail.com' },
    { icon: linkedin_icon, text: 'ishaqbreiwish', link: 'https://linkedin.com/in/ishaq-breiwish' },
    { icon: location_icon, text: 'Atlanta, Georgia' },
    { icon: phone_icon, text: '+1 (971)-712-8429' },
  ];

  return (
    <section id="contact" className="get-in-touch-section">
      <div className="container">
        <h2>Get in Touch</h2>
        <div className="contact-card">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-item">
              <img src={info.icon} alt={`${info.text} icon`} className="contact-icon" /> {/* Updated to use images */}
              {info.link ? (
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                  {info.text}
                </a>
              ) : (
                <span>{info.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
