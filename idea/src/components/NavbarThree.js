import { NavLink } from 'react-router-dom';
import '../styles/navbarthree.css'
function NavbarThree() {
  const links = [
    { src: "/Taki", name: "Takı" },
    { src: "/Market", name: "Market" },
    { src: "/Elektronik", name: "Elektronik" },
    { src: "/Kirtasiye", name: "Kırtasiye" },
    { src: "/Oyuncak", name: "Oyuncak" },
    { src: "/Ayakkabi", name: "Ayakkabı" },
    { src: "/Tekstil", name: "Tekstil" },
    { src: "/BeyazEsya", name: "Beyaz Eşya" },
    { src: "/Mobilya", name: "Mobilya" },
    { src: "/Spor", name: "Spor" },
    { src: "/Kozmetik", name: "Kozmetik" },
    { src: "/kampanya", name: "Popüler Kampanyalar" },
  ];
  return (
    <div className="navbarThreeContainer">
      <div  className="navbarThreeLinks">
        {links.map((link, index) => (
          <div key={index} className='lastLinks' >
            <NavLink to={link.src}>{link.name}</NavLink>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default NavbarThree;