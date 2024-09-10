import React, { useEffect, useState } from 'react';
import '../Intro.css';
import {GoGear} from 'react-icons/go'

// const Intro = ({ onFadeComplete, backgroundImage }) => {
//   const [fadeOut, setFadeOut] = useState(false);

//   useEffect(() => {
//     // Set a timeout to fade out the intro after a certain time period
//     const timer = setTimeout(() => setFadeOut(true), 0); // 0 seconds, might be easier than deleting

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (fadeOut) {
//       // When fade out starts, set another timeout to remove the intro
//       const timer = setTimeout(() => {
//         onFadeComplete();
//       }, 0); 

//       return () => clearTimeout(timer);
//     }
//   }, [fadeOut, onFadeComplete]);

  return (
    // <div className={`intro ${fadeOut ? 'fade-out' : ''}`} style={{ backgroundImage: `url(${backgroundImage})`} }>
    //   {/* Content of your intro here */}
    //   <div className={'intro-content'}>
    //     <h1 style={{fontSize:50}}>Antony Rainchik's Engineering Portfolio</h1>
    //     <GoGear className="loaderIcon" size='40'/>
    //   </div>
    // </div>
    <div></div>
  );
// };

export default Intro;
