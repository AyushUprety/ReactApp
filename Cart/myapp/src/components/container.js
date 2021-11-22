import React from 'react';
import { useState, useEffect} from 'react';

const Container = ({Name,img})=>{
    const[quantity,setquantity]=useState(0);
    useEffect(()=>{
      document.querySelector(".increase").addEventListener('click',()=>{
        setquantity(quantity+1);
      })
      document.querySelector(".decrease").addEventListener('click',()=>{
        setquantity(quantity-1);
      })
    },[quantity])
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
        <button className='increase'><i class="fas fa-arrow-up"></i></button>
        {quantity}
        <button className='decrease'><i class="fas fa-arrow-down"></i></button>
        </a>
      </div>
    </div>
    )
}
export default Container;