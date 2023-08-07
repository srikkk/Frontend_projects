import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { Shopcontext } from '../../context/shopcontext';
import { CartItem } from './cartItem';
import './cart.css';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { cartItems, getTotalAmount, checkout } = useContext(Shopcontext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      
      {totalAmount === 0 ? (
        <h1>Your cart is empty.</h1>
      ) : (
        <>
        <h1>Your Cart Items</h1>
          <div className="cart">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem key={product.id} data={product} />;
              }
              return null;
            })}
          </div>
          <div className="checkout">
            <p>Subtotal:  ${totalAmount}</p>
            <button onClick={() => navigate('/')}>Continue Shopping</button>
            <button
              onClick={() => {
                checkout();
                navigate('/checkout');
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};
