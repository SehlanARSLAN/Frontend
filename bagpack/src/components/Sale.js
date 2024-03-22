import '../styles/sale.css'
import Canvas from '../assets/pack1.jpg'
import Technical from '../assets/pack2.jpg'
import Camo from '../assets/pack3.jpg'

function Sale() {
    const write = ["CANVAS BACKPACK", "TECHNICAL PACK", "CAMO BACKPACK"];
    const oldPrice = ["$75.00", "$120.00", "$95.00"];
    const newPrice = ["$67.50", "$104.00", "$74.00"];
    const imageUrls = [Canvas, Technical, Camo];
    return (
      <div className="saleContain">
        <h1>NOW ON SALE</h1>
        <h4>UP TO 50% OFF</h4>
        <div className="images">
          {imageUrls.map((imageUrl, index) => (
            <div className="image" key={index}>
              <img src={imageUrl} alt={write[index]} />
              <p className="imagesText">{write[index]}</p>
              <p className="price">
                <strike>{oldPrice[index]}</strike> &nbsp; &nbsp; &nbsp;{" "}
                {newPrice[index]}{" "}
              </p>
              <div className="displayBttn">
                <button className="bttn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Sale;