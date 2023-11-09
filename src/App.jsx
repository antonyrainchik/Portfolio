import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './components/Portfolio';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe'
import ContactInfo from './components/ContactMe';
const projects = [
  {
    title: 'Breakaway Supports',
    description: 'A new support structure for Formlabs',
    imageUrl: 'src/assets/FLogo.png',
    liveLink: 'https://formlabs.com/blog/breakaway-supports-and-editing/',
    contextImages: ['src/assets/frangGifA.gif','src/assets/frangGifB.gif'],
    moreDetail: <div>
      <p>
      <b>Objective:</b> Worked across teams (Marketing, Software, R&D) to develop reliable frangible support structures that are crushable, via notches on vertical pillars and truncated trusses between pillars
      </p>
      <p><b>
      Technical Details:
      </b></p>
      <ul>
        <li>
          Formlabs General Purpose Resins (Grey V4, White V4, Black V4, Clear V4)
        </li>
        <li>
          100um layer height
        </li>
        <li>
          Formlabs Form 3/3+, Form 3B/3B+, Form 3L, Form 3BL
        </li>
      </ul>
      <p>
      <b>Process:</b> Primarily responsible for the implementation of Breakaway Supports, which involved developing a testing methodology to ensure the reliability of the supports structures by varying the intensity of the notching and the degree of the truncation
      </p>
      <p>
      <b>Conclusion:</b> Support post processing time was reduced significantly, by approximately 66% for intricate models, tested internally.
      </p>
    </div>
  },
  {
    title: 'Fast Arches',
    description: 'A new product for faster print speeds',
    imageUrl: 'src/assets/FLogo.png',
    contextImages:['src/assets/FA.png','src/assets/FATeeth.JPG'],
    liveLink: 'https://dental.formlabs.com/blog/fast-arch-settings/',
    moreDetail:
    <div>
  <p>
    <b>Objective:</b> Worked across teams (Marketing, Software, Dental, R&D) to develop printer settings optimized for speed and accuracy, targeting orthodontic models for thermoforming retainers, with the potential of a complete retainer within a single visit to the dentist.
  </p>
  <p><b>
    Technical Details:
  </b></p>
  <ul>
    <li>
      Draft V2 Resin and Grey V4 Resin
    </li>
    <li>
      100um and 200um layer heights
    </li>
    <li>
      Formlabs 3B/3B+
    </li>
  </ul>
  <p>
    <b>Process:</b> Primarily responsible for the development of the 100um Draft v2 printer setting, which involved testing changes to the printing process to increase speed while still maintaining accuracy. Performed validations and accuracy scan work with all developed settings to ensure specifications were met.
  </p>
  <p>
    <b>Conclusion:</b> Print time was reduced from over an hour to about 20 minutes for a full set of 8 arches, or under 10 minutes for a single arch.
  </p>
</div>

  },
  {
    title: 'Project 3',
    description: 'This is a brief description of Project 3.',
    imageUrl: 'url-to-image-3.jpg',
  },
  {
    title: 'Project 4',
    description: 'This is a brief description of Project 4.',
    imageUrl: 'url-to-image-4.jpg',
  },
  {
    title: 'My Portfolio Website',
    description: 'Wrote a portfolio website using React',
    imageUrl: 'src/assets/react.svg',
  }
  // ... more projects
];

function App(){
  const [introVisible, setIntroVisible] = useState(true);

  // Call this function when the intro should fade out
  const handleFadeComplete = () => {
    setIntroVisible(false);
    document.body.classList.remove('no-scroll');
  };

  // Lock the body scroll when the intro is visible
  if (introVisible) {
    document.body.classList.add('no-scroll');
  }
  return(
    <React.StrictMode>
      {introVisible && <Intro onFadeComplete={handleFadeComplete} backgroundImage="src/assets/linkedinBackground.jpeg"/>}
      <AboutMe/>
      <Portfolio projects={projects} />
      <ContactInfo/>
    </React.StrictMode>
  );
}



export default App;