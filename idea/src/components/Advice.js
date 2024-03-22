import '../styles/advice.css'
import { useState } from 'react'
import AdviceProduct from '../components/AdviceProduct'
function Advice() {
  const [activeButton,setActiveButton] = useState("Kampanyadakiler")
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const filteredProducts = AdviceProduct.filter((image) => {
    switch (activeButton) {
      case 'Kampanyadakiler':
        return image.onSale
      case 'Yeni Gelenler':
        return image.isNew
      case 'İndirimdekiler':
        return image.isSpecial
      default:
        return AdviceProduct;
    }
  });
    return (
      <div className="adviceContainer">
        <div className="adviceContainTwo">
          <div className="adviceButtonContain">
            <button
              className={
                activeButton === "Kampanyadakiler" ? "activeButton" : "filterButton"
              }
              onClick={() => handleButtonClick("Kampanyadakiler")}
            >
              Kampanyadakiler
            </button>
            <button
              className={activeButton === "Yeni Gelenler" ? "activeButton" : "filterButton"}
              onClick={() => handleButtonClick("Yeni Gelenler")}
            >
              Yeni Gelenler
            </button>
            <button
              className={
                activeButton === "İndirimdekiler" ? "activeButton" : "filterButton"
              }
              onClick={() => handleButtonClick("İndirimdekiler")}
            >
              İndirimdekiler
            </button>
          </div>
          <div className="adviceProduct">
            {filteredProducts.map((image, index) => (
              <div key={index} className="cartInfo">
                <div className="containImage">
                  <img src={image.url} alt={image.alt} />
                </div>
                <div className="containInfo">
                  <div className="productName">{image.name}</div>
                  <div className="price">
                    {image.price} TL - <span>{image.oldPrice} TL</span>
                  </div>
                  <button>Sepete Ekle</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Advice;