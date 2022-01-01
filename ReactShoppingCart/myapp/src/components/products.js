import React from 'react';
import Data from './data';
import Item from './Product';

const Product = (props)=>{
    const{cartItems,addToCart} = props;
    return(
        <div>
           {Data.map(product =>{
               return(
                    <Item key={product.id} product={product} addToCart={addToCart}/>
               )
            })}
        </div>
    )
}
export default Product;