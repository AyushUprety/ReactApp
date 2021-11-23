import React from 'react';
import { useState, useEffect} from 'react';

const Container = ({Name,img})=>{
    const[quantity,setquantity]=useState(0);
    // const increase =()=>{
    //    setquantity(quantity+1)
    // }
    // const decrease =()=>{
    //    setquantity(quantity-1)
    // }
    const handleIncrease = () => {
      setquantity(q => q + 1)
    }
    const handleDecrease = () => {
      setquantity(q => q - 1)
    }
    return (   
      <div className="ui card">
      <div className="image">
        <img src={img}/> 
      </div>
      <div className="content">
        <a className="header">{Name}</a>
        <div className="meta">
          <span className="date">Added in 2020</span>
        </div>
      </div>
      <div className="extra content">
        <a>
        <button onClick={handleIncrease} className='increase'><i class="fas fa-arrow-up"></i></button>
        {quantity}
        <button onClick={handleDecrease} className='decrease'><i class="fas fa-arrow-down"></i></button>
        </a>
      </div>
    </div>
    )
}
export default Container;