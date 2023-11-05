import React, {useEffect, useState} from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import '../Portfolio.css'; // Importing a CSS file for styling



// A single Project component
const Project = ({ title, description, imageUrl, liveLink, moreDetail, contextImages = []}) => {
  const [showMore, setShowMore] = useState(false);
  const butt = <Button className="btn" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</Button>

  const images = contextImages.map((image,index) =>{
    return(<img key = {index} src = {image} style={{width:'50%'}}></img>)
  })


  return (
    <div className="project" style={{ width: showMore ? '1000px':'320px',justifyContent: showMore ? 'center':'left'}}>
      <img src={imageUrl} style = {{width: showMore ? '192px':'64px'}}alt={title} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="detail-container" style={{height: showMore ? '650px' : '0'}}>
          {showMore && <div className="more-detail">{moreDetail} </div>}
          {showMore && <div className="detail-images">{images}</div>}
        </div>
        <div className="project-links">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              Live Link
            </a>
          )}
          {butt}
        </div>
      </div>
    </div>
  );
};

// The Portfolio component that renders a list of Project components
const Portfolio = ({ projects }) => {
  return (
    <section id="portfolio">
      <h2 style = {{fontSize:30}}>Welcome to my Portfolio!</h2>
      <p style = {{fontWeight: 300,fontSize:20}}>Here's a list of some of my favorite projects:</p>
      <div className="projects-container">
        
      <Row  xl = {3} lg = {3} md = {3} sm = {3} xs = {3}>
            <Col xl = {3} lg = {3} md = {3} sm = {3} xs = {3}>
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}

            </Col>
          </Row>
      </div>
    </section>
  );
};

export default Portfolio;
