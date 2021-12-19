import React from 'react';
import Data from './data';
import Item from './Product';

const Product = ()=>{
    return(
        <div>
           {Data.map(product =>{
               return(
                    <Item key={product.id} product={product}/>
               )
            })}
        </div>
    )
}
export default Product;