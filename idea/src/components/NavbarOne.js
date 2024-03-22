import { NavLink } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/navbarone.css'
function NavbarOne() {
    const links = ['Hakkımızda','iletişim','Mobilya Kombini','Tekstil Kombini','Beyaz Eşya Takımını Seç','Kampanyalar']
    const iconLinks = [
        { icon: <FacebookIcon />, to: "https://www.google.com.tr/" },
        { icon: <XIcon />, to: "https://www.google.com.tr/" },
        { icon: <InstagramIcon />, to: "https://www.google.com.tr/" },
        { icon: <LinkedInIcon />, to: "https://www.google.com.tr/" },
      ];
    return (
      <div className="navbarOneContainer">
        <div className="navbarOneContain">
          <div className="leftSideOne">
            {links.map((link, index) => (
              <NavLink key={index}>{link}</NavLink>
            ))}
          </div>
          <div className="rightSideOne">
          {iconLinks.map((iconLink, index) => (
            <NavLink key={index} to={iconLink.to} target="_blank">
              {iconLink.icon}
            </NavLink>
          ))}
          </div>
        </div>
        <hr/>
      </div>
    );
}

export default NavbarOne;