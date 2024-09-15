import React from 'react';
import '../css/style.scss';

const AnimatedButton = ({ link }) => {
  return (
    <a href={link} className="view-button" target="_blank" rel="noopener noreferrer">
      Live Link
      <span className="arrow">→</span>
    </a>
  );
};

export default AnimatedButton;