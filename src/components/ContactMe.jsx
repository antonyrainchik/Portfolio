import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'
import '../ContactMe.css'; // Make sure to create a corresponding CSS file for styling

const ContactInfo = () => {
    return (
        <div className="contact-info-container">
          <section className="contact-me-section">
          <h2>We should work together! Contact me!</h2>
            <ul className="contact-list">
                <li>
                <BiLogoGmail style={{position:'relative',top:'-2px' }}/>
                <strong> </strong>
                    <a href="mailto:antony.rainchik@gmail.com">antony.rainchik@gmail.com</a>
                </li>
                <li>            
                    <BsLinkedin style={{position:'relative',top:'-2px' }}/>
                    <strong> </strong>
                    <a href="https://www.linkedin.com/in/antony-rainchik" target="_blank" rel="noopener noreferrer"> linkedin.com/in/antony-rainchik</a>
                </li>
                {/* <li>
                    <strong>Resume:</strong>
                    <a href="path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume (PDF)
                    </a>
                </li> */}
            </ul>
          </section>
        </div>
      );
    }

export default ContactInfo;
