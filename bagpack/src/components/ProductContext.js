// ProductContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../api/api';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const response = await api.get('products?populate=*');
      setImages(response.data.data);
    } catch (error) {
      console.error('Ürünleri çekerken hata oluştu:', error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <ProductContext.Provider value={{ images}}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
