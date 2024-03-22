import { NavLink } from 'react-router-dom';
import '../styles/footer.css'
function Footer() {
    const links = ["FAQ","Groups","Shipping & Returns","Terms & Conditions"]
    const urls =["/google","/facebook","/instagram","/twitter"]
    return (
      <div className="footerContain">
        <div>© 2035 by NORTHPOLE. Powered and secured by Wix</div>
        <div className='linksDiv'>{links.map((links,index)=>{
          return <NavLink to={urls[index]} key={index}>{links}</NavLink>
        })}</div>
      </div>
    );
}

export default Footer;