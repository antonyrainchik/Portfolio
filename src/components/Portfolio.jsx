import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AnimateHeight from 'react-animate-height';
import '../Portfolio.css'; // Importing a CSS file for styling

const Project = ({ title, description, imageUrl, liveLink, moreDetail, isFocused, contextImages = [] }) => {
   const images = contextImages.map((image, idx) => (
    <img key={idx} src={image} style={{ width: '50%',height:'400px',objectFit:'contain' }} alt={`Context ${idx}`} />
  ));
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const toggleWrapper = () => {
    setIsOpen(!isOpen);
    console.log("Toggled Open")
  }

  return (
    <div className={`project`}>
      <p></p>
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <AnimateHeight duration={1000} height={height}>
          <div className="more-detail">{moreDetail}</div>
          <div className="detail-images">{images}</div>
        </AnimateHeight>  
      </div>
      <div className="project-links">
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer"style={{padding:'5px'}} >
            Live Link
          </a>
        )}
      <Button className="btn" onClick={()=>{setHeight(height === 0 ? 'auto' : 0),toggleWrapper()}} style={{padding:'5px'}}>
          {isOpen ? "Show less" : "Show more"}
      </Button>
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
