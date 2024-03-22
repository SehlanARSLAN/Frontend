import DataFetching from "../datafetch/DataFetching";
  import "../../styles/productLinks.css";
import { useState } from "react";
import ProductLinkLeft from "./ProductLinkLeft";
function Market() {
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
              categoryId={2}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />
          </div>
        </div>
      </div>
    );
    
}

export default Market;