import React from "react";

const Cart = (props) => {
  console.log(props);
  const { cartItems, addToCart } = props;
  return (
    <div>
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>{" "}
      {/* && denotes if before condition is true execute 2nd statement*/}
      {cartItems.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.title}</div>
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
