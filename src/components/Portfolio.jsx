import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../Portfolio.css'; // Importing a CSS file for styling

const Project = ({ title, description, imageUrl, liveLink, moreDetail, index, setFocusedIndex, isFocused, contextImages = [] }) => {
  const projectStyle = {
    // Other styles can be included here if needed
    width: isFocused ? '100%' : '400px', // or any other size you prefer
    height: isFocused ? '1000px' : '225px', // adjust '450px' as needed for your default height
  };
  const images = contextImages.map((image, idx) => (
    <img key={idx} src={image} style={{ width: '50%',height:'400px',objectFit:'contain' }} alt={`Context ${idx}`} />
  ));

  return (
    <div className={`project ${isFocused ? 'focused' : ''}`} style = {projectStyle}>
      <p></p>
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        {isFocused && <div className="more-detail">{moreDetail}</div>}
        {isFocused && <div className="detail-images">{images}</div>}

        <div className="project-links">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer"style={{padding:'5px'}} >
              Live Link
            </a>
          )}
        <Button className="btn"  onClick={() => setFocusedIndex(isFocused ? null : index)} style={{padding:'5px'}}>
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
