/** Here in productList when you donot return productlist in line 12 the output
 * isnot displayed. The logic inside the productlist merely runs bur no output is
 * returned.First I tried to display product using state but the problem was that
 * there was different product so if state is used we need to write state for each and 
 * every product. Thus, I made data.js file where I gave a manual id to each product.
 * Then the problem was to increase the item that is clicked now how would I identify 
 * these items. First thought was event listener which was obviously silly. Because 
 * when we use map function and pass id to them each will be unique upon iteration.Since 
 * mapping is just a loop.
 */

import React from "react";
import { useState, useEffect } from "react";
import Product from './product'

// const productList = products => {
//   const productList = products.map(prod => {
//     return <div className="image">
//           <img src={prod.img} />
//         </div>
//   })
//   return productList
// }

const Products = ({ Products }) => {
 
  // const increase =()=>{
  //    setquantity(quantity+1)
  // }
  // const decrease =()=>{
  //    setquantity(quantity-1)
  // }
 
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
  )
};
export default Products;
