import { NavLink } from "react-router-dom";
import "../styles/header.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from './Drawer'
import '../styles/drawer.css'
import ShoppingCart from "./ShoppingCart";
import { useShoppingCartContext } from "./ShoppingCartContext";

function Header() {
  const { openCartDrawer, ShoppingCartDrawer} = Drawer();
  const {cartItems} = useShoppingCartContext();
  const itemsCount = Array.isArray(cartItems) ? cartItems.length : 0;

    return (
      <div className="headContain">
        <div className="leftSide">
          <NavLink to="/">THENORTHPOLE</NavLink>
        </div>
        <div className="rightSide">
          <div className="dropDown">
            <NavLink to="/shop">Shop</NavLink>
              <div className="showDropDown" >
                <NavLink to="#">BACKPACK</NavLink>
                <NavLink to="#">DUFFLE BAGS</NavLink>
                <NavLink to="#">TRAVEL PACKS</NavLink>
                <NavLink to="#">GİFT CARD</NavLink>
              </div>
          </div>
          <NavLink>About</NavLink>
          <NavLink to="/group">Groups</NavLink>
          <NavLink>Contact</NavLink>
          <div className="inputDiv">
            <input type="Text" placeholder="SEARCH..." />
            <SearchIcon />
          </div>
          <NavLink id="girisyap" to="/login">
            <AccountCircleIcon />
            Log In
          </NavLink>
          <NavLink onClick={openCartDrawer}>
            <ShoppingCartIcon />{cartItems.length > 0 && <span className="cartItemCount">{itemsCount}</span>}
          </NavLink>
        </div>
        <ShoppingCartDrawer>
          <ShoppingCart/>
        </ShoppingCartDrawer>
      </div>
    );
}

export default Header;