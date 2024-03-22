import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Group from './components/Group';
import Header from './components/Header';
import { NavLink, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Shop from './components/Shop';
import { ProductProvider } from './components/ProductContext';
import ProductDetail from './components/ProductDetail';
import { ShoppingCartProvider } from './components/ShoppingCartContext';
import Cart from './components/Cart';
import WrongPage from './components/WrongPage';
function App() {
  return (
    <ProductProvider>
      <ShoppingCartProvider>
        <div className="App">
          <div className="socialMedia">
            <NavLink
              to="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </NavLink>
            <NavLink
              to="https://www.instagram.com/sea.rslan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </NavLink>
          </div>
          <Header />
          <Routes>
            <Route path="/" exact element={<Body />} />
            <Route path="/group" exact element={<Group />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/shop" exact element={<Shop />} />
            <Route path="/product/:id" exact element={<ProductDetail />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/*" exact element={<WrongPage />} />
          </Routes>
          <Footer />
        </div>
      </ShoppingCartProvider>
    </ProductProvider>
  );
}

export default App;
