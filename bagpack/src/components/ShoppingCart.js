import React, { useEffect, useState } from 'react';
import { useShoppingCartContext } from './ShoppingCartContext';
import '../styles/shoppingcart.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { NavLink, useNavigate } from 'react-router-dom';
import Drawer from './Drawer';

function ShoppingCart() {
  const { cartItems, removeFromCart, updateCartItemQuantity,setCartItems,addToCart,clearCart  } = useShoppingCartContext();
  const [itemQuantities, setItemQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const { closeCartDrawer} = Drawer();
  const navigate = useNavigate(); // useNavigate hook'u ekle

  useEffect(() => {
    // Sepet içeriği değiştikçe toplam fiyatı güncelle
    const calculatedTotalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(calculatedTotalPrice);
  }, [cartItems]);

  const handleRemoveFromCart = (productId, price) => {
    // Find all occurrences of the item with the given productId
    const itemsToRemove = cartItems.filter((item) => item.id === productId);
  
    // Check if any occurrences are found before removing
    if (itemsToRemove.length > 0) {
      // Remove each occurrence of the item from the cart
      itemsToRemove.forEach((itemToRemove) => {
        const updatedCartItems = cartItems.filter((item) => item !== itemToRemove);
        setCartItems(updatedCartItems);
      });
  
      // Calculate the total price by subtracting the total price of the removed items
      const totalRemovedPrice = itemsToRemove.reduce((total, item) => total + item.price * item.quantity, 0);
      setTotalPrice((prevTotalPrice) => prevTotalPrice - totalRemovedPrice);
    }
    localStorage.removeItem('cartItems');
  };
  

  const handleQuantityChange = (productId, newQuantity,price) => {
    // Ürün adedini güncelle
    updateCartItemQuantity(productId, newQuantity);

    // Güncellenmiş ürünleri al
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    // Sepet içeriğini güncelle
    setCartItems(updatedCartItems);

    // Ürün adedini yerel state'e de güncelle
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
    const itemTotalPrice = price * newQuantity;
    setTotalPrice((prevTotalPrice) => prevTotalPrice - itemTotalPrice);
  };
  const handleDeleteAll = () => {
    // Sepeti temizle
    clearCart();
    setTotalPrice(0);

  };
  const handleViewCartClick = () => {
    // View Cart butonuna tıklandığında Drawer'ı aç veya kapat
    closeCartDrawer();
    navigate('/cart');
  };
  return (
    <div className="drawer">
      <h2>Shopping Cart</h2>
      <p>Total Items: {cartItems.length}</p>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {[...new Set(cartItems.map((item) => item.id))].map((productId) => {
            const item = cartItems.find(
              (cartItem) => cartItem.id === productId
            );
            const itemCount = cartItems.filter(
              (cartItem) => cartItem.id === productId
            ).length;

            return (
              <li key={item.id} className="itemCart">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  width={"150"}
                  height={"120"}
                />
                <div className="infoProductSide">
                  {item.name} - {item.price}$
                  <span className="buttonSpan">
                    <button
                      className="removeButton"
                      type="button"
                      onClick={() => handleRemoveFromCart(item.id, item.price)}
                    >
                      <RemoveIcon />
                    </button>
                    <div>{itemCount}</div>
                    <button
                      className="addButton"
                      type="button"
                      onClick={() => addToCart(item)}
                    >
                      <AddIcon />
                    </button>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <div className="totalPrice">Total Price: ${totalPrice.toFixed(2)}</div>
      {cartItems.length > 0 && ( // Sepette ürün varsa Delete butonunu göster
        <button className="cartDelete" onClick={handleDeleteAll}>
          Delete
        </button>
      )}
      {cartItems.length > 0 && ( // Sepette ürün varsa Delete butonunu göster
        <button className="cartLink" onClick={handleViewCartClick}>
          <NavLink onClick={closeCartDrawer} to="/cart">View Cart</NavLink>
        </button>
      )}
    </div>
  );
}

export default ShoppingCart;
