/**The confusion was in line 13. item.id=== le kun sanga compare garnu
item.id===product.id ma product xi kaha bata launu.I came to conclusion
that for this to work we will pass product as an argument. So product click
huda tyo addToCart function run garna which will also take an product as an argument
jastai tyo product ma products map vayera individual product aako hunxa
Now that product can be passed as an argument in addToCart function.
**/

import React from "react";
import Header from "./header";
import Product from "./products";
import Cart from "./cart";
import {useState} from 'react';
import Items from './data';

const App = () => {
  const[cartItems,setCartItems] =useState([]);
  const addToCart =(product)=>{
    // const item = Items.find((item)=>item.id===)
    const exist = cartItems.find(item=>item.id===product.id)
    if(exist){
      setCartItems(cartItems.map(item=>item.id===product.id?{...item,qty:qty+1}:null))
    }
    else{
      setCartItems([...cartItems,{...product,qty:1}])
    }
  }

  return (
    <div>
      <Header />
      <div className="productandcart">
        <div className="items-container">
          <Product /> 
        </div>
        <div className="cart">
          <Cart />
        </div>
      </div>
    </div>
  );
};
export default App;
