import React from 'react';
import '../AboutMe.css'; // Make sure to create a corresponding CSS file for styling

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <section className="about-me-section">
        <h1>About Me</h1>
        <img 
          src="/bioPic.jpg" // Replace with your image URL
          alt="Me!"
          className="profile-picture"
        />
        <p>
          Hello! I'm Antony Rainchik, a Mechanical Engineer and Computer Scientist
          passionate about creating solutions that bridge the physical and digital worlds.
          With a background in both disciplines, I bring a unique perspective to problem-solving
          and innovation.
        </p>
        <p>
          My journey has taken me through a diverse set of experiences, from designing
          intricate support structures for 3D printing to developing software that optimizes
          engineering processes. I thrive on challenges and continuously seek to learn and grow
          in my career.
        </p>
        <p>
          When I'm not engineering or coding, I'm likely tinkering with gadgets, exploring
          the great outdoors, or watching tool restoration videos on YouTube. Let's connect 
          and create something amazing together!
        </p>
      </section>
    </div>
  );
};

export default AboutMe;
