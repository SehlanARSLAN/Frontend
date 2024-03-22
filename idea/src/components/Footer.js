import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.jpg';
import "../styles/footer.css";
import LockIcon from '@mui/icons-material/Lock';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
function Footer() {

    const colmn1 = [
      { name: "İletişim", to: "https://www.google.com.tr/" },
      { name: "Havale Bildiri Formu", to: "https://www.google.com.tr/" },
      { name: "Siparişi Sorgula", to: "https://www.google.com.tr/" },
      { name: "Kargo Takibi", to: "https://www.google.com.tr/" },
    ];
    const colmn2 = [
        { name: "Yardım Merkezi", to: "https://www.google.com.tr/" },
        { name: "Sık Sorulan Sorular", to: "https://www.google.com.tr/" },
        { name: "Sipariş", to: "https://www.google.com.tr/" },
      ];
      const colmn3 = [
        { name: "Satış Sözleşmesi", to: "https://www.google.com.tr/" },
        { name: "Gizlilik ve Güvenlik", to: "https://www.google.com.tr/" },
        { name: "İptal İade Şartları", to: "https://www.google.com.tr/" },
        { name: "KVKK Bildirimi", to: "https://www.google.com.tr/" },
      ];
      const colmn4 = [
        { name: "Blog", to: "https://www.google.com.tr/" },
        { name: "Kampanyalar", to: "https://www.google.com.tr/" },
        { name: "İletişime Geç", to: "https://www.google.com.tr/" },
      ];
      const colmn5 = [
        { name: "Yeni Üyelik", to: "https://www.google.com.tr/" },
        { name: "Üye Girişi", to: "https://www.google.com.tr/" },
        { name: "Şifremi Unuttum", to: "https://www.google.com.tr/" },
      ];
    return (
      <div>
        <div>
          <div className='footerLogo'>
            <img src={Logo} alt="logo" />
          </div>
          <hr />
          <div className="footerLinkContain">
            <div className="colmnOne">
              <div>Kurumsal</div>
              {colmn1.map((item, index) => (
                <div key={index}>
                  <NavLink to={item.to} target='_blank'>{item.name}</NavLink>
                </div>
              ))}
            </div>
            <div className="colmnTwo">
              <div>Yardım</div>
              {colmn2.map((item, index) => (
                <div key={index}>
                  <NavLink to={item.to} target='_blank'>{item.name}</NavLink>
                </div>
              ))}
            </div>
            <div className="colmnThree">
              <div>Alışveriş</div>
              {colmn3.map((item, index) => (
                <div key={index}>
                  <NavLink to={item.to} target='_blank'>{item.name}</NavLink>
                </div>
              ))}
            </div>
            <div className="colmnFour">
              <div>Bilgi</div>
              {colmn4.map((item, index) => (
                <div key={index}>
                  <NavLink to={item.to} target='_blank'>{item.name}</NavLink>
                </div>
              ))}
            </div>
            <div className="colmnFive">
              <div>Üyelik</div>
              {colmn5.map((item, index) => (
                <div key={index}>
                  <NavLink to={item.to} target='_blank'>{item.name}</NavLink>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className='footerTwo'>
            <div>2024 Copyright IdeaSoft - Tüm Hakları Saklıdır.</div>
            <div className='footerIcon'><LockIcon/><PaymentIcon/><LocalAtmIcon/></div>
          </div>
          <div className='footerThree'><NavLink to='https://www.google.com.tr/' target='_blank'>IdeaSoft® | E-Ticaret</NavLink>&nbsp; paketleri ile hazırlanmıştır.</div>
        </div>
      </div>
    );
}

export default Footer;