import Logo from '../../assets/logo.jpg'
import './styles/header.css'
import Video from '../../assets/kampanya.mp4'
import { NavLink } from 'react-router-dom';
function Header() {
    return (
      <div className="headerBackground">
        <div className="headerContainer">
          <div className="headerLeft">
          <NavLink to="/"><img src={Logo} alt="logo" /></NavLink>
            
          </div>
          <div className="headerRight">
            <p>Aklındaki ihtiyaçları erteleme!</p>
            Şimdi Al 3 Ay Sonra Öde
          </div>
        </div>
        <div className="videoContain">
          <div className="videoContainTwo">
            <video autoPlay muted loop>
              <source src={Video} type="video/mp4" />
              Tarayıcınız videoyu desteklemiyor.
            </video>
            <div className="videoDetail">
              Yılbaşı Hediyeleriniz Hazır Mı?
              <p>
                Phasellus vestibulum ante sit amet nibh suscipit viverra. Nam
                bibendum velit eu augue euismod maximus.
              </p>
              <NavLink to="/taki">
                <button>Ürünleri Keşfet</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header;