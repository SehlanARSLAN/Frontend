import React, { useState } from 'react';
import '../styles/productslider.css';
import { useProductContext } from './ProductContext';

function ProductSlider() {
  const { images } = useProductContext();
  const [startIndex, setStartIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const nextSlide = () => {
    const newStartIndex = (startIndex + 1) % (images.length - 4);
    setStartIndex(newStartIndex);
  };

  const prevSlide = () => {
    const newStartIndex = (startIndex - 1 + (images.length - 4)) % (images.length - 4);
    setStartIndex(newStartIndex);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='productSliderContain'>
      <h3>You Might Also Like</h3>
      <div className='slider'>
        <button className='prev' onClick={prevSlide}>
          &lt;
        </button>
        <div className='sliderItems'>
          {images.slice(startIndex, startIndex + 5).map((image, index) => (
            <div key={index} className={`sliderItem`} onClick={() => openModal(image)}>
              <img
                src={`http://192.168.56.128:1337${image?.attributes?.image?.data?.attributes?.url}`}
                alt={image?.attributes?.name}
              />
            </div>
          ))}
        </div>
        <button className='next' onClick={nextSlide}>
          &gt;
        </button>
      </div>

      {isModalOpen && (
        <div className='modal-overlay'>
          <div className='modal'>
            <img
              src={`http://192.168.56.128:1337${selectedImage?.attributes?.image?.data?.attributes?.url}`}
              alt={selectedImage?.attributes?.name}
            />
            <button onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductSlider;
