import React from "react";
import Header from "./header";
import Product from "./products";
import Cart from "./cart";

const App = () => {
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
