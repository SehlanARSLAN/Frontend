import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/footer.css";
export const Footer = () => {
  const emailAddress = "mail@example.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  return (
    <div className="footerContain">
      <div className="iconFooter">
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
      <div className="footerNick">@Searslan</div>
    </div>
  );
};