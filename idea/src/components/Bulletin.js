import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';
import '../styles/bulletin.css'
function Bulletin() {
    const iconLinks = [
        { icon: <FacebookIcon />, to: "https://www.google.com.tr/" },
        { icon: <XIcon />, to: "https://www.google.com.tr/" },
        { icon: <InstagramIcon />, to: "https://www.google.com.tr/" },
        { icon: <LinkedInIcon />, to: "https://www.google.com.tr/" },
      ];
    return (
      <div className="bulletinContainer">
        <div className='bulletinContainerTwo'>
          <h1 className='bulletinTitle'>E-bülten</h1>
          <div className='bulletinDesc'>
            Kampanya ve duyurularımızdan ilk sizin haberiniz olsun! Dilediğiniz
            zaman e-bülten aboneliğimizden ayrılabilirsiniz.
          </div>
          <div className='bulletinInput'>
            <input type='text' placeholder='E-mail Adresinizi Yazınız'/>
            <button><MailIcon /></button>
          </div>
          <div className="rightSideOne">
            {iconLinks.map((iconLink, index) => (
              <NavLink key={index} to={iconLink.to} target="_blank">
                {iconLink.icon}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Bulletin;