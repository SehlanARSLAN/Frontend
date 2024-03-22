// ShoppingCartContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    // Load cart items from localStorage on component mount
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const addToCart = (product) => {
    const newCartItem = { ...product, quantity: 1, addedOrder: cartItems.length };
    const newCartItems = [...cartItems, newCartItem];
    setCartItems(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1); // Sadece belirli index'teki ürünü kaldır
    setCartItems(newCartItems);
    // Save cart items to localStorage
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  return (
    <ShoppingCartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItemQuantity, clearCart,setCartItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};
