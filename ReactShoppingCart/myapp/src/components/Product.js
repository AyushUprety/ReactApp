/**first question was how to connect products with cart. How could I write a code 
so that upon clicking add to cart items will go to cart. I decided
to use event listener in button and invoke a function after clicking event listener
It didnot work the title was not passed to the cart component.syntheticEventListener
was returned when is consoled the event. Since title was not being passed in cart component
I directly called the function inside jsx which to no avail only added redundant 'Cart Items'
Now what?**/


import React from 'react';
import Cart from './cart'

const Item = (props)=>{
    const {product}= props;
    const{title,price,url} =product;
    const{cartItems,addToCart} = props;

    const addItem = ()=>{
        return <Cart title={title}/>
    }

    return(
        <div className='item-container'>
            <img src={url} width="100px" height="100px"/>
            <h3>{title}</h3>
            <h3>${price}</h3>
            <button onClick={()=>addToCart(product)}>Add to Cart</button>
            {/* {addItem()}  */}
        </div>
    )
}
export default Item;