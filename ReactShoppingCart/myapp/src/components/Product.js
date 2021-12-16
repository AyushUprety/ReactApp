import React from 'react';

const Item = ({product})=>{
    const{title,price,url} = product;
    console.log(title)

    return(
        <div className='item-container'>
            {title}
            {price}
            <img src={url} width="100px" height="100px"/>
        </div>
    )
}
export default Item;