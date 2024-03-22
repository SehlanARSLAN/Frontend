import { useState } from "react";
import '../styles/slider.css'

function Slider() {
    const slides = [
      {
        src: 'https://ideacdn.net/idea/ed/42/themes/selftpl_651582b96dbcc/assets/uploads/slider_picture_8.png?revision=7.2.7.3-2-1703598658',
        title: 'Özel Tasarım Bileklikler',
        description: 'Birbirinden şık aksesuar modellerini keşfetmeye hazır mısın?'
      },
      {
        src: 'https://ideacdn.net/idea/ed/42/themes/selftpl_651582b96dbcc/assets/uploads/slider_picture_6.png?revision=7.2.7.3-2-1703598658',
        title: 'Bedava Kargo Bildirimi',
        description: 'Kargo Bildirimi ile Müşterileriniz Bedavaya Kargo İçin Tutar Hedefine İlerleyecek'
      },
      {
        src: 'https://ideacdn.net/idea/ed/42/themes/selftpl_651582b96dbcc/assets/uploads/slider_picture_5.png?revision=7.2.7.3-2-1703598658',
        title: 'Ideasoft Whatsapp',
        description: 'Sipariş almanın en kolay yolu.Sipariş almanın en kolay yolu.'
      },
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const goToNext = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
    return (
      <div className="slider-container">
        <div className="slide">
          <div className="slide-text">
            <h2>{slides[currentIndex].title}</h2>
            <p>{slides[currentIndex].description}</p>
            <button className="slide-button">İncele</button>
          </div>
          <div className="slide-image">
            <img src={slides[currentIndex].src} alt="Slide" />
          </div>
        </div>
        <button className="control-button prev" onClick={goToPrevious}>&lt;</button>
        <button className="control-button next" onClick={goToNext}>&gt;</button>
      </div>
    );
  }
  
  export default Slider;