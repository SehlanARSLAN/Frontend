import '../styles/showcase.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useEffect } from 'react';
import AdviceProduct from '../components/AdviceProduct';

function ShowCase() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;
  const totalItems = AdviceProduct.length;
  const delayDuration = 3000;
// eslint-disable-next-line no-lone-blocks
{/*carousel*/}
  const nextSlide = () => {
    if (startIndex + itemsPerPage < totalItems) {
      setStartIndex((prevIndex) => prevIndex === totalItems - 1 ? startIndex : prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    let interval;
    if (startIndex + itemsPerPage >= totalItems) {
      interval = setInterval(() => {
        setStartIndex(0);
      }, delayDuration);
    }

    return () => clearInterval(interval);
  }, [startIndex, totalItems, itemsPerPage, delayDuration]);

  return (
    <div className="showContain">
      <div className="showCaseContainTwo">
        <div className="titleSide">
          <h1>Vitrindekiler</h1>
          <div className="nextPrevButton">
            <button className="prev" onClick={prevSlide}>
              <ArrowBackIosNewIcon />
            </button>
            <button className="next" onClick={nextSlide}>
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
        <div className="sliderContainer">
          {AdviceProduct.slice(startIndex, startIndex + itemsPerPage).map(
            (item, index) => (
              <div key={index} className="slideCart">
                <img src={item.url} alt={item.alt} />
                <div className="slideInfo">
                  <h2>{item.name}</h2>
                  <p>{`Fiyat: ${item.price} TL`} <span>{item.oldPrice} TL</span></p>
                </div>
                <button>Sepete Ekle</button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowCase;
