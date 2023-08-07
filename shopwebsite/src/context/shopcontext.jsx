import React, { createContext } from 'react';
import { PRODUCTS } from '../products';
import { useState } from 'react';
export const Shopcontext = createContext(null);


const getDefaultCart = () =>{
    let cart ={}
    for(let i=1;i<PRODUCTS.length+1;i++){
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {

  const [cartItems,SetCartItems] = useState(getDefaultCart()); 

  const getTotalAmount =() =>{
    let totalAmount = 0;
    for (const item in cartItems){
      if (cartItems[item]>0){
        let iteminfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * iteminfo.price;
      }
      
    } 
    return totalAmount;
      
  }
 

  const addToCart = (ItemID)=>{
    SetCartItems((prev)=>({ ...prev,[ItemID]:prev[ItemID] + 1 }));
  }
  const RemoveFromCart = (ItemID)=>{
    SetCartItems((prev)=>({ ...prev,[ItemID]:prev[ItemID] - 1 }));
  }
  
  const updateCartItemCount = (newAmount,ItemdId)=>{
    SetCartItems((prev)=>({...prev, [ItemdId]:newAmount}))

  }

  const checkout = () => {
    SetCartItems(getDefaultCart());
  };

  const contextvalue = {cartItems,addToCart,RemoveFromCart,updateCartItemCount,getTotalAmount,checkout};
  
  return (
    <Shopcontext.Provider value = {contextvalue}>
        {props.children}
        </Shopcontext.Provider>
  )
}
