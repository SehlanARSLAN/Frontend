import '../styles/shop.css'
import Products from '../components/Products'
import { useProductContext } from "./ProductContext";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { NavLink} from 'react-router-dom';
function Shop() {
  const { images } = useProductContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortDirection, setSortDirection] = useState(''); 
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredProductCount, setFilteredProductCount] = useState(images.length);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortClick = (direction) => {
    setSortDirection(direction);
    setIsDropdownOpen(false);
  };
  const updateFilteredProductCount = (filteredProducts) => {
    setFilteredProductCount(filteredProducts.length);
  };

    return (
      <div className="shopContain">
        <div className="leftRightContain">
          <div className="shopLeft">
            <div className="browseSide">
              <div className="titleSide">Browse By</div>
              <hr />
              <div className="browseLinks">
                <NavLink
                  to="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  All product
                </NavLink>
                <NavLink
                  to="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bagpack
                </NavLink>
                <NavLink
                  to="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Duffle Bags
                </NavLink>
                <NavLink
                  to="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  New Arrivals
                </NavLink>
                <NavLink
                  to="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Travel Packs
                </NavLink>
              </div>
            </div>
            <div className="filterSide">
              <div className="titleSide">Filter By</div>
              <hr />
              <div className="priceFilter">
                <div className="inputSide">
                  <input
                    type="number"
                    id="minPrice"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="Min Price"
                  />
                </div>
                <div className="inputSide">
                  <input
                    type="number"
                    id="maxPrice"
                    value={maxPrice}
                    placeholder="Max Price"
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="shopRightContain">
            <div className="shopRight">
              <div className="explanation">
                <h1>All Products</h1>
                <p>
                  This is your category description. It’s a great place to tell
                  customers what this category is about, connect with your
                  audience and draw attention to your products.
                </p>
              </div>
              <div className="classification">
                <div>{filteredProductCount} Products</div>
                <div className="sortButton">
                  <button onClick={toggleDropdown}>
                    Sort By: {sortDirection || "Recommended"}
                    {isDropdownOpen ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </button>
                  {isDropdownOpen && (
                    <div className="dropdownContent">
                      <button onClick={() => handleSortClick("A to Z")}>
                        A to Z
                      </button>
                      <button onClick={() => handleSortClick("Z to A")}>
                        Z to A
                      </button>
                      <button onClick={() => handleSortClick("Low To High")}>
                        Price (low to high)
                      </button>
                      <button onClick={() => handleSortClick("High To Low")}>
                        Price (high to low)
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="products">
                <Products sortDirection={sortDirection } minPrice={minPrice} maxPrice={maxPrice} updateFilteredProductCount={updateFilteredProductCount}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Shop;