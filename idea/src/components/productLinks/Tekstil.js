import DataFetching from "../datafetch/DataFetching";
import '../../styles/productLinks.css'
import ProductLinkLeft from "./ProductLinkLeft";
import { useState } from "react";
function Tekstil() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilterChange = (newMinPrice, newMaxPrice) => {
    setMinPrice(newMinPrice);
    setMaxPrice(newMaxPrice);
  };
    return (
      <div className="productLinksContainer">
        <div className="productLinksMargin">
          <div className="productLinksLeft">
            <ProductLinkLeft onFilterChange={handleFilterChange} />
          </div>
          <div className="productLinksRight">
            <DataFetching
              categoryId={6}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />
          </div>
        </div>
      </div>
    );
}

export default Tekstil;