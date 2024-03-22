import React from 'react'
import Logom from '../assets/SEHLAN ARSLAN1.png'
import '../styles/header.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export const Header = () => {
  const emailAddress = 'mail@example.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  return (
    <div className="navbarContain">
      <div className="logoContainer">
        <img src={Logom} alt="logom"  />
      </div>
      <div className="iconContainer">
        <a
          href="https://www.instagram.com/sea.rslan/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/sehlan-arslan/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <LinkedInIcon />
        </a>
        <a href="/#" onClick={handleEmailClick} className="email">
          <EmailIcon />
        </a>
      </div>
    </div>
  );
}
