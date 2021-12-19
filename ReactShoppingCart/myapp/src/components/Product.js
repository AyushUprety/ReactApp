import React from 'react';

const Item = ({product})=>{
    const{title,price,url} = product;
    console.log(title)

    return(
        <div className='item-container'>
            <img src={url} width="100px" height="100px"/>
            <h3>{title}</h3>
            <h3>{price}</h3>
        </div>
    )
}
export default Item;