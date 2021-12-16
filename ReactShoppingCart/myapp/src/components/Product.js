import React from 'react';

const Item = ({product})=>{
    const{title,price} = product;
    console.log(title)

    return(
        <div>
            {title}
            {price}
        </div>
    )
}
export default Item;