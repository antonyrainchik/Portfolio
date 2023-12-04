import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './components/Portfolio';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe'
import ContactInfo from './components/ContactMe';
import TagManager from 'react-gtm-module';

const projects = [
  {
    title: 'Breakaway Supports',
    description: 'Developed a new support structure for Formlabs',
    imageUrl: '/FLogo.png',
    liveLink: 'https://formlabs.com/blog/breakaway-supports-and-editing/',
    contextImages: ['/frangGifA.gif','/frangGifB.gif'],
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
    description: 'Designed a new product for faster print speeds',
    imageUrl: '/FLogo.png',
    contextImages:['/FA.png','/FATeeth.JPG'],
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
    title: 'DIY Electric Longboard',
    description: 'Built an 18650 battery pack and used a Vesc brushless motor system',
    imageUrl: '/VescLogo.png',
    contextImages:['/kongboard.jpg','/boardParts.jpg'],
    liveLink: 'https://github.com/antonyrainchik/VESC_BT_SERIAL',
    moreDetail:<div>
    <p>
      <b>Objective:</b> Had previously purchased a commercial electric longboard but ended up returning that board because the price point for the low performance of that board was unjustifiable. Decided to instead spend that money to learn about brushless motor systems and outbuild the commercial board.
    </p>
    <p><b>
      Technical Details:
    </b></p>
    <ul>
      <li>
        10S4P 18650 Samsung 3500 MAh Li-ion Cell battery pack, spot welded with nickel strips
      </li>
      <li>
        2 6355 Brushless 260KV Motors
      </li>
      <li>
        Dual FSESC 100A ESC (VESC clone)
      </li>
      <li>
        2.4 GHz Radio Controller
      </li>
      <li>
        ESP8266 and a Bluetooth Serial app on my phone for live telemetry (Voltage, Amperage, calculated range, etc)
      </li>
    </ul>
    <p>
      <b>Process:</b> I sourced and purchased lithium-ion battery cells, a spot welder, and nickel strips to assemble them into two battery packs with balance charge connectors. Those two packs were connected to make a singular large pack, while still allowing me to separate them to use my hobby grade balance charger to charge them. I forked code from GitHub for reading from the serial port of the VESC to an LCD display and modified it to communicate telemetry to my phone.
    </p>
    <p>
      <b>Conclusion:</b> The board was absurdly powerful, and fast enough to make me worry for my safety and not push it any further without significant investment in safety gear. I rode it enough to make my feet hurt and never really put much of a dent into the range, so I achieved my goal of making a higher performance board for the same cost. My future plans involve building a more aesthetically pleasing enclosure, as the whole Tupperware enclosure doesn’t look all too professional.
    </p>
  </div>
  
  },{
    title: 'OCR Receipt Analyzer',
    description: 'Attempting to simplify splitting the bill with just a picture',
    imageUrl: '/OpenCV_logo.png',
    contextImages:['/receipt.jpg','/csvScreenshot.png'],
    liveLink: 'https://github.com/antonyrainchik/ReceiptOCR',
    moreDetail:<div>
    <p>
      <b>Objective:</b> Designed and programmed an OCR program that could read receipts for me from a photo, so that I could automate splitting the bill with my friends.
    </p>
    <p><b>
      Technical Details:
    </b></p>
    <ul>
      <li>
        Python
      </li>
      <li>
        OpenCV
      </li>
      <li>
        PyTesseract
      </li>
    </ul>
    <p>
      <b>Process:</b> Wrote the functions to first grayscale the image, to make it easier to process. Then, it would crop the bounds of the receipt, assuming a dark background and a white reciept. Finally, I would run OCR, and then filter and parse the extracted contents based on what would be the item and what would be the price.
    </p>
    <p>
      <b>Conclusion:</b> Successfully created a CSV with relatively accurate data from the photo of a receipt, but has some flaws likely due to the open source optical character recognition, so would need a higher end OCR to function reliably enough to trust with finances.
    </p>
  </div>
  
  },
  {
    title: 'Compression Testing of ASTM 3D Printed Samples',
    description: 'Determining optimum orientation for compression',
    imageUrl: '/compSamp.jpg',
    contextImages:['/compSamples.JPG','/allCompSamples.JPG'],
    liveLink: 'https://tinyurl.com/yszyrvft',
    moreDetail:<div>
    <p>
      <b>Objective:</b> Designed and tested own experiment as a team. Chose 3D printed parts at different orientations to empirically determine strongest print orientations to improve my own 3D printed projects.
    </p>
    <p><b>
      Technical Details:
    </b></p>
    <ul>
      <li>
        22 3D Printed PLA ASTM D695 samples
      </li>
      <li>
        100% Infill
      </li>
      <li>
        Sintech GL/10 Machine
      </li>
      <li>
        Prints oriented normal to, angled, and axial to the compression loading
      </li>
    </ul>
    <p>
      <b>Process:</b> Primarily responsible for production of samples, and designing and carrying out the experiment. The different samples were tested at differing deformation rates, to determine the impact of rates on the stress/strain relationships.
    </p>
    <p>
      <b>Conclusion:</b> Determined that the samples with the greatest yield and ultimate strengths were samples that were oriented at a 45 degree angle at higher rates, but when the deformation rate was slow, the vertical orientation was strongest. One angled sample achieved 3375 pounds of force. Before this experiment, I thought that print layers angled normal to the loading would be strongest, but I wanted to prove it. I now use this information to design parts that are undergoing compression to make them stronger.
    </p>
  </div>
  
  },
  {
    title: 'Affordable Angle Visualizer',
    description: 'Visualizing angle telemetry with arduino',
    imageUrl: '/spinning.png',
    contextImages:[],
    liveLink:'https://github.com/antonyrainchik/trimpot-visualization',
    moreDetail: 
    <div>
    <p>
      <b>Objective:</b> To meld my experience in 3D printing with my experience in Computer Science, to create a digital and physical representation of data. Also helped me learn C in preparation for a class. Inspired by seeing different robotic arms, to eventually develop an arm with joints that are visualized on a computer monitor in real time.
    </p>
    <p><b>
      Technical Details:
    </b></p>
    <ul>
      <li>
        Arduino Uno clone
      </li>
      <li>
        A cheap (50 cents ish) trimmer potentiometer
      </li>
      <li>
        OpenGL and Protothreading C libraries
      </li>
    </ul>
    <p>
      <b>Process:</b> Began by figuring out how to read serial output from arduino to terminal by opening and scanning the correct USB port. Wrote some simple code to spit out the position values to ensure accuracy. Encountered some noise, so wrote a simple filter, then tried displaying position values as an angle of rotation. Program was super slow and completely lagged behind the real position data, so solved this by discovering protothreading to concurrently read values and display said values, resulting in accurate and quick real time data.
    </p>
    <p>
      <b>Conclusion:</b> Program works really well, and shows accurate live position values for cheap. Future plans to rewrite code in more modern language and build whole arm using these as joints.
    </p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/QgfQsFTfq70?si=_q9OoVgDxMhiMxtx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

  </div>
  },
  {
    title: 'My Portfolio Website',
    description: 'Wrote a portfolio website using React',
    imageUrl: '/react2.png',
    moreDetail:<div>
      <p>You're looking at it! I wrote this in a weekend, and spend some time keeping it up to date and flowing smoothly.</p>
    </div>
  }
  // ... more projects
];

function App(){
  const [introVisible, setIntroVisible] = useState(true);
  useEffect(() => {
    TagManager.initialize({ gtmId: 'G-0TQ6C8ZF2E' });
  }, []);

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
      {introVisible && <Intro onFadeComplete={handleFadeComplete} backgroundImage="/linkedinBackground.jpeg"/>}
      <AboutMe/>
      <Portfolio projects={projects} />
      <ContactInfo/>
    </React.StrictMode>
  );
}



export default App;