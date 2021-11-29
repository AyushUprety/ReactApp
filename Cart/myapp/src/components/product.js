import React from "react";
import Products from "./products";
import {useState,useEffect} from "react"

const Product = ({ product ,quantity,setquantity}) => {
    // const [quantity, setquantity] = useState(0);
    // const [Quantity, setQuantity] = useState(0);
    const handleIncrease = (e) => {
        setquantity((q) => q + 1);
      };
      const handleDecrease = () => {
        setquantity((q) => q - 1);
      };
  return (
    <div>
      <div>
        <div className="image">
          <img src={product.img} width='150px' height='150px' />
        </div>
        <div className="content">
          <a className="header">{product.Title}</a>
          <div className="meta">
            <span className="date">Added in 2020</span>
          </div>
        </div>
        <div className="extra content">
          <a>
            <button onClick={handleIncrease} className="increase">
              <i class="fas fa-arrow-up"></i>
            </button>
            {quantity}
            <button onClick={handleDecrease} className="decrease">
              <i class="fas fa-arrow-down"></i>
            </button>
            <p>price:{product.price}</p>
            <p>Totalprice:{(product.price)*quantity}</p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Product;
