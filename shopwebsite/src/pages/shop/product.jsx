import React, { useContext } from 'react'
import {Shopcontext} from "../../context/shopcontext"
export const Product = (props) => {
    const {id,productName,price,productImage} = props.data;
    const {addToCart,cartItems} = useContext(Shopcontext);
    const cartIemsAmount = cartItems[id]
  return (
    <div className='product'>
        <img  src={productImage}/>
        <div className="description">
            <p><b>{productName}</b></p>
            <p id="price">${price}</p>
        </div>
        <button className="addToCart" onClick={()=> addToCart(id)}>
          Add To Cart{cartIemsAmount > 0 && <>({cartIemsAmount})</>}
        </button>
    </div>
  )
}
