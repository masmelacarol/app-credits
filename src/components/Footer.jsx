import React from 'react';
import iconLinkedin from '../assets/images/linkedin.svg'
import iconGit from '../assets/images/github.svg';


const Footer = () => (
  <div className="Footer">
    <div className="Footer__autor">
      <p>Carol Estefanny Masmela</p>
      <span>FrontEnd Developer</span>
    </div>
    <div className="Footer__social-media">
      <a href="https://www.linkedin.com/in/carol-masmela/"><img src={iconLinkedin} alt="icono de linkendin"/></a>
      <a href="https://github.com/masmelacarol"><img src={iconGit} alt="icono de github"/></a>
    </div>
  </div>
);

export default Footer;