import { useState } from 'react';
import '../kampanyaLink/styles/productlinkleftside.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
function ProductLinkLeft({ onFilterChange }) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMinPriceChange = (e) => {
    const newMinPrice = e.target.value;
    setMinPrice(newMinPrice);
    onFilterChange(newMinPrice, maxPrice);
  };

  const handleMaxPriceChange = (e) => {
    const newMaxPrice = e.target.value;
    setMaxPrice(newMaxPrice);
    onFilterChange(minPrice, newMaxPrice);
  };
  
  return (
    <div className="productLinkFilter">
      <div className="productLinkFilterContain">
        <div className="filterLeftTitle">
          <h2>Ürün Grupları</h2>
        </div>
        <div className="filterProductSide">
          <h3>Ürün ismi</h3>
          <p>Bileklik</p>
          <p>Kolye</p>
          <button>
            <KeyboardArrowLeftIcon />
            Tüm Kategoriler
          </button>
        </div>
        <div className="filterPrice">
          <h3>Fiyat Filtreleme</h3>
          <div className="filterPriceInput">
            <input
              type="number"
              id="fiyatfiltre"
              placeholder="MİN"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
            <input
              type="number"
              id="fiyatfiltre"
              placeholder="MAX"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductLinkLeft;