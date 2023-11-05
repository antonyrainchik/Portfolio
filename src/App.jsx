import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './components/Portfolio';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe'
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
    title: 'Project Two',
    description: 'This is a brief description of Project Two.',
    imageUrl: 'src/assets/Z2WuGgz0_400x400.png',
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
    title: 'Project 5',
    description: 'This is a brief description of Project 5.',
    imageUrl: 'url-to-image-5.jpg',
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
    </React.StrictMode>
  );
}



export default App;