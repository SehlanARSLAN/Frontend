import Table from "../assets/masa.jpg";
import NailColor from "../assets/oje.jpg";
import Neck from "../assets/kolye.jpg";
// eslint-disable-next-line no-unused-vars
import NeckOne from "../assets/kolye1.jpg";
import Tv from "../assets/tv.jpg";
import "../styles/bestselling.css";

function BestSelling() {
  const image = [
    {
      name: "Mermer Masa",
      price: "8.000",
      oldPrice: "9.500",
      url: Table,
      alt: "masa",
    },
    {
      name: "Oje",
      price: "100",
      oldPrice: "150",
      url: NailColor,
      alt: "oje",
    },
    {
      name: "Kolye",
      price: "15.000",
      oldPrice: "16.500",
      url: Neck,
      alt: "kolye",
    },
    {
      name: "Televizyon",
      price: "10.000",
      oldPrice: "12.500",
      url: Tv,
      alt: "tv",
    },
  ];
  return (
    <div className="bestSellingContainer">
      <h1>Çok Satan Ürünler</h1>
      <div className="bestSellingCart">
        {image.map((image, index) => (
          <div key={index} className="cartInfo">
            <div className="containImage">
              <img src={image.url} alt={image.alt} />
            </div>
            <div className="containInfo">
              <div className="productName">{image.name}</div>
              <div className="price">{image.price} TL - <span>{image.oldPrice} TL</span></div>
              <button>Sepete Ekle</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSelling;
