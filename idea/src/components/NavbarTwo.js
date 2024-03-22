import Logo from '../assets/logo.jpg'
import '../styles/navbartwo.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import { useAlisverisSepeti } from './context/BucketContext';
function NavbarTwo() {
  const { sepetUrunleri } = useAlisverisSepeti();
    const toplamUrunSayisi = sepetUrunleri.reduce((acc, curr) => acc + curr.adet, 0);
  return (
    <div className="navbarTwoContainer">
      <div className="navbarTwoContain">
        <div className="leftSideTwo">
          <NavLink to='/'><img src={Logo} alt="logo" /></NavLink>
        </div>
        <div className="rightSideTwo">
          <div className="rightSideİnput">
            <input type="text" placeholder="Search" />
            <SearchIcon />
          </div>
          <div className='rightSideİcons'>
            <NavLink to="/login"><PersonIcon /></NavLink>
            <NavLink to="/bucket"><div className='card'><ShoppingCartIcon /><span>{toplamUrunSayisi}</span></div></NavLink>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default NavbarTwo;