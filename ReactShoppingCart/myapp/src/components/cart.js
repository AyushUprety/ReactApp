import React from "react";

const Cart = (props) => {
  console.log(props);
  const { cartItems, addToCart,removeFromCart } = props;
  return (
    <div>
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>{" "}
      {/* && denotes if before condition is true execute 2nd statement*/}
      {cartItems.map((item) => {
        return (
        <div key={item.id} className='cartspacing'>
            <div>{item.title}</div>
            <div>{item.qty}</div>
            <button onClick={()=>addToCart(item)}>+</button>
            <button onClick={()=>removeFromCart(item)}>-</button>
        </div>
        );
      })}
    </div>
  );
};
export default Cart;
