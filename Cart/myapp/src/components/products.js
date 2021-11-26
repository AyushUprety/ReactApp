/** Here in productList when you donot return productlist in line 12 the output
 * isnot displayed. The logic inside the productlist merely runs bur no output is
 * returned.First I tried to display product using state but the problem was that
 * there was different product so if state is used we need to write state for each and 
 * every product. Thus, I made data.js file where I gave a manual id to each product.
 */

import React from "react";
import { useState, useEffect } from "react";

// const productList = products => {
//   const productList = products.map(prod => {
//     return <div className="image">
//           <img src={prod.img} />
//         </div>
//   })
//   return productList
// }

const Product = ({ Products }) => {
  const [quantity, setquantity] = useState(0);
  const [Quantity, setQuantity] = useState(0);
  // const increase =()=>{
  //    setquantity(quantity+1)
  // }
  // const decrease =()=>{
  //    setquantity(quantity-1)
  // }
  const handleIncrease = () => {
    setquantity((q) => q + 1);
  };
  const handleDecrease = () => {
    setquantity((q) => q - 1);
  };
  return (
    <div className="ui card">
      {Products.map((product) => {
        return (
          <Product key={product.id} product={product}/>
          // <div>
          //   <div className="image">
          //     <img src={product.img} />
          //   </div>
          //   <div className="content">
          //     {/* <a className="header">{Name}</a> */}
          //     <div className="meta">
          //       <span className="date">Added in 2020</span>
          //     </div>
          //   </div>
          //   <div className="extra content">
          //     <a>
          //       <button onClick={handleIncrease} className="increase">
          //         <i class="fas fa-arrow-up"></i>
          //       </button>
          //       {quantity}
          //       <button onClick={handleDecrease} className="decrease">
          //         <i class="fas fa-arrow-down"></i>
          //       </button>
          //     </a>
          //   </div>
        
        // </div>
        )
       
      })}
  </div>
  );
};
export default Product
