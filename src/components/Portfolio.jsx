import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../Portfolio.css'; // Importing a CSS file for styling

const Project = ({ title, description, imageUrl, liveLink, moreDetail, index, setFocusedIndex, isFocused }) => {
  const projectStyle = {
    // Other styles can be included here if needed
    width: isFocused ? '1000px' : '200px', // or any other size you prefer
    height: isFocused ? '1000px' : '300px', // adjust '450px' as needed for your default height
  };

  return (
    <div className={`project ${isFocused ? 'focused' : ''}`} style = {projectStyle}>
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        {isFocused && <div className="more-detail">{moreDetail}</div>}
        <div className="project-links">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              Live Link
            </a>
          )}
          <Button className="btn" onClick={() => setFocusedIndex(isFocused ? null : index)}>
            {isFocused ? "Show less" : "Show more"}
          </Button>
        </div>
      </div>
    </div>
  );
};

const Portfolio = ({ projects }) => {
  const [focusedIndex, setFocusedIndex] = useState(null);

  return (
    <section id="portfolio">
      <h2>Welcome to my Portfolio!</h2>
      <p>Here's a list of some of my favorite projects:</p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project
            key={index}
            index={index}
            {...project}
            setFocusedIndex={setFocusedIndex}
            isFocused={index === focusedIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
